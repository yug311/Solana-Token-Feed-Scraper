function flattenHandles(handleGroups) {
  const set = new Set();

  Object.values(handleGroups).forEach(group => {
    group.forEach(handle => {
      set.add(handle.toLowerCase());
    });
  });

  return set;
}


function createTTLCache(storageKey, ttl = FIVE_MINUTES) {
  const store = new Map();

  chrome.storage.local.get([storageKey], (result) => {
    if (result[storageKey]) {
      const now = Date.now();
      for (const [key, ts] of Object.entries(result[storageKey])) {
        if (now - ts <= ttl) store.set(key, ts);
      }
    }
  });

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
    },

    serialize() {
      cleanup();
      return Object.fromEntries(store.entries());
    }
  };
}

function persistAllCaches() {
  chrome.runtime.sendMessage({
    type: "persistCaches",
    data: {
      twitterCache: twitterCache.serialize(),
      instagramCache: instagramCache.serialize(),
      youtubeCache: youtubeCache.serialize(),
      tiktokCache: tiktokCache.serialize()
    }
  });
}

document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "hidden") {
    persistAllCaches();
  }
});





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

  if (now - tweetTime > TWITTER_MAX_PASSED_TIME) return false;

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
    
    if (now - createTime > TIKTOK_MAX_PASSED_TIME) return false;

  return true;
}

function instagramPassesVerification(data) {
    //created within last 5 minutes
    //createTime, username
    if (!data) return false;
    const createTime = data.createTime;
    const now = Date.now();

    if (now - createTime > INSTAGRAM_MAX_PASSED_TIME) return false;

    return true;
}

function youtubePassesVerification(data) {
  if (!data) return false;
  if (!data.badges) return false;
  if (data.subscriberCount <= 10000) return false;

  //created within last 6 hrs
    const uploadTime = data.uploadTime;
    const now = Date.now();

    if (now - uploadTime > YOUTUBE_MAX_PASSED_TIME) return false;
    
  return true;
}
