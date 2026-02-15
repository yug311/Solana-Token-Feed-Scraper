function flattenHandles(handleGroups) {
  const set = new Set();

  Object.values(handleGroups).forEach(group => {
    group.forEach(handle => {
      set.add(handle.toLowerCase());
    });
  });

  return set;
}

function createTTLCache(ttl = FIVE_MINUTES) {
  const store = new Map();

  function cleanup() {
    const now = Date.now();
    for (const [key, ts] of store.entries()) {
      if (now - ts > ttl) {
        store.delete(key);
      }
    }
  }

  return {
    remember(key, timestamp = Date.now()) {
      store.set(key, timestamp);
      cleanup();
    },

    wasRecentlySeen(key) {
      const ts = store.get(key);
      if (ts === undefined) return false;
      return (Date.now() - ts <= ttl);
    }
  };
}


function tweetMeetsCriteria(tweet) {
  if (!tweet || !tweet.userInfo) return false;

  const user = tweet.userInfo;

  // 1️⃣ Verified or Blue Verified
  if (!user.isBlueVerified && user.verifiedType == null) return false;

  // 2️⃣ Followers > 10k
  if (user.followers <= 10000) return false;

  // 3️⃣ Created within last 5 minutes
  const tweetTime = new Date(tweet.createdAt).getTime();
  const now = Date.now();
  const FIVE_MINUTES = 5 * 60 * 1000;

  if (now - tweetTime > FIVE_MINUTES) return false;

  return true;
}


function shouldHighlightTweet(apiData) {
  // Case 1: Main tweet qualifies
  if (tweetMeetsCriteria(apiData)) {
    return true;
  }

  // Case 2: Quote tweet → check quoted tweet instead
  if (apiData.isQuote && apiData.quotedTweet) {
    if (tweetMeetsCriteria(apiData.quotedTweet)) {
      return true;
    }
  }

  return false;
}

function tiktokPassesVerification(data) {
  if (!data) return false;
  if (data.followers <= 10000) return false;

  return true;
}

function instagramPassesVerification(data) {
  return true; 
}

function youtubePassesVerification(data) {
  if (!data) return false;
  if (!data.badge) return false;
  if (data.followers <= 10000) return false;

  return true;
}
