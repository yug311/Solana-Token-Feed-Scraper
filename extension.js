/*Multiple links, links in tweets, instagram stories*/

const instagramPriority = flattenHandles(InstagramHandles);
const twitterPriority = flattenHandles(TwitterHandles);
const tiktokPriority = flattenHandles(TikTokHandles);
const youtubePriority = flattenHandles(YouTubeHandles);

const twitterCache = createTTLCache();
const instagramCache = createTTLCache();
const youtubeCache = createTTLCache();
const tiktokCache = createTTLCache();

window.addEventListener('load', () => {
  runFeedLogic();
});

function observeRouteChanges() {
  let currentPath = window.location.pathname; // Track the current path

  const observer = new MutationObserver(() => {
    const newPath = window.location.pathname;
    // Only trigger when the path changes to /pulse and wasn't previously /pulse
    if (newPath === '/pulse' && currentPath !== '/pulse') {
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
  // 'div[style*="overflow-anchor: none"][style*="flex: 0 0 auto"][style*="position: relative"][style*="visibility: hidden"][style*="width: 100%"]');   
  const feedContainer = document.querySelector('div[style*="height:"][style*="width: 100%"][style*="position: relative;"]');
if (feedContainer) {
      clearInterval(checkInterval);
      callback(feedContainer);
    }
  }, 700); // check every 0.5s
}


function runFeedLogic() {

  waitForFeedContainer(feedContainer => {
  
  if (!feedContainer) 
  {
    // console.log("Feed container not found!");
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
              const tiktokLink = node.querySelector("a[href*='tiktok.com/@'][href*='/video/']");
              if (tiktokLink)
              {
                highlightTikTok(node, tiktokLink);
                clearInterval(intervalId);
              }

              const instagramLink = node.querySelector("a[href*='instagram.com/p/']");
              if (instagramLink)
              {
                highlightInstagram(node, instagramLink); // Implement similar to TikTok
                clearInterval(intervalId);
              }

              const youtubeLink = node.querySelector("a[href*='youtube.com/watch']");
              if (youtubeLink)
              {
                highlightYouTube(node, youtubeLink); // Optional: Implement if you want to handle YouTube as well
                clearInterval(intervalId);
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