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

    const createTime = data.createTime;
    const now = Date.now();
    const ONE_HOUR = 12 * FIVE_MINUTES;
    
    if (now - createTime > ONE_HOUR) return false;

  return true;
}

function instagramPassesVerification(data) {
    //created within last 5 minutes
    //createTime, username
    if (!data) return false;
    const createTime = data.createTime;
    const now = Date.now();
    const FIFTEEN_MINUTES = 3 * FIVE_MINUTES

    if (now - createTime > FIFTEEN_MINUTES) return false;

    return true;
}

function youtubePassesVerification(data) {
  if (!data) return false;
  if (!data.badges) return false;
  if (data.subscriberCount <= 10000) return false;

  //created within last 6 hrs
    const uploadTime = data.uploadTime;
    const now = Date.now();
    const SIX_HOURS = 6 * 60 * 60 * 1000;

    if (now - uploadTime > SIX_HOURS) return false;
    
  return true;
}
