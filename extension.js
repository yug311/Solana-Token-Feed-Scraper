window.addEventListener('load', () => {
  console.log("Extension loaded");
  runFeedLogic();
});

function observeRouteChanges() {
  let currentPath = window.location.pathname; // Track the current path

  const observer = new MutationObserver(() => {
    const newPath = window.location.pathname;
    // Only trigger when the path changes to /pulse and wasn't previously /pulse
    if (newPath === '/pulse' && currentPath !== '/pulse') {
      console.log('Navigated to /pulse (detected via DOM change)');
      // Your logic here
      runFeedLogic();
    }
    currentPath = newPath; // Update the tracked path
  });

  // Observe changes to the body or a specific container
  const target = document.getElementById('root') || document.body; // Adjust if you know the SPA's root
  observer.observe(target, {
    childList: true,
    subtree: true,
  });
}

observeRouteChanges();

function waitForFeedContainer(callback) {
  const checkInterval = setInterval(() => {
  const feedContainer = document.querySelector(
  'div[style*="overflow-anchor: none"][style*="flex: 0 0 auto"][style*="position: relative"][style*="visibility: hidden"][style*="width: 100%"]');    
if (feedContainer) {
      clearInterval(checkInterval);
      console.log("✅ Feed container found:", feedContainer);
      callback(feedContainer);
    }
  }, 700); // check every 0.5s
}

function shouldHighlightTweet(apiData) {
  const user = apiData.userInfo;
  if (!user) return false;

  // 1️⃣ Blue verified or verified
  if (!user.isBlueVerified && user.verifiedType == null) return false;

  // 2️⃣ Followers over 1k
  if (user.followers <= 10000) return false;

  // 3️⃣ Tweet within last 5 minutes
  const tweetTime = new Date(apiData.createdAt).getTime();
  const now = Date.now();
  const FIVE_MINUTES = 5 * 60 * 1000;
  if (now - tweetTime > FIVE_MINUTES) return false;

  return true;
}

function highlightTweet(node, twitterLink) {
  const tweetId = twitterLink.href.split("/").pop();
    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", `https://api9.axiom.trade/tweet-by-tweet-id?tweetId=${tweetId}`, true);
    xhr.withCredentials = true; // if the API requires cookies

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) { // DONE
        if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
          if (shouldHighlightTweet(data)) {
            if (wasRecentlySeen(tweetId)) {
              node.style.border = "2px solid blue"; // Already seen in last 5 mins
            } else {
              node.style.border = "2px solid red"; // Highlight with red border
              rememberTweet(tweetId, new Date(data.createdAt).getTime());
            }
          }
        }
    }
    };
    xhr.send();
}

const recentTweets = new Map(); // tweetId -> timestamp in ms
const FIVE_MINUTES = 5 * 60 * 1000;

function rememberTweet(tweetId, tweetTime) {
  recentTweets.set(tweetId, tweetTime);

  // Remove old entries to keep the map small
  for (const [id, ts] of recentTweets.entries()) {
    if (Date.now() - ts > FIVE_MINUTES) {
      recentTweets.delete(id);
    }
  }

}

function wasRecentlySeen(tweetId) {
  const ts = recentTweets.get(tweetId);
  if (!ts) return false;
  return (Date.now() - ts <= FIVE_MINUTES);
}

function runFeedLogic() {

  waitForFeedContainer(feedContainer => {
  
  if (!feedContainer) 
  {
    console.log("Feed container not found!");
  } 
  else
  {
    const observer = new MutationObserver(mutations => {
      mutations.forEach(mutation => {
        mutation.addedNodes.forEach(node => {
          if (node.nodeType === 1 && node.tagName === "DIV") {
            // Poll for the tweet link inside this div
            const intervalId = setInterval(() => {
              const twitterLink = node.querySelector("a[href*='/status/']");
              if (twitterLink) {
                highlightTweet(node, twitterLink);

                clearInterval(intervalId); // stop polling
              }
            }, 50); // check every 50ms, very lightweight
            
            setTimeout(() => clearInterval(intervalId), 1000);
          }
        });
      });
    });

    observer.observe(feedContainer, { childList: true, subtree: false });
    console.log("MutationObserver running...");

    document.querySelectorAll('a[href*="/status/"]').forEach(link => {
      const tweetDiv = link.closest('div[style*="position: absolute"][style*="width: 100%"][style*="visibility: visible"]');
      if (tweetDiv) {
        highlightTweet(tweetDiv, link);
      }
    });

  }

  });
}

