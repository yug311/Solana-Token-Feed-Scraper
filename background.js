console.log("Background worker loaded");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

if (request.type === "fetchTikTok") {
  fetch(request.url)
    .then(res => res.text())
    .then(html => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const script = doc.querySelector("#__UNIVERSAL_DATA_FOR_REHYDRATION__");
      if (!script) {
        sendResponse({ error: "No rehydration data found" });
        return;
      }

      const data = JSON.parse(script.textContent);

      const itemStruct =
        data?.__DEFAULT_SCOPE__?.["webapp.video-detail"]?.itemInfo?.itemStruct;

      if (!itemStruct) {
        sendResponse({ error: "No itemStruct found" });
        return;
      }

      const createTime = parseInt(itemStruct.createTime) * 1000;
      const followers = parseInt(itemStruct.authorStats?.followerCount || "0");
      const author = itemStruct.author?.uniqueId || null;

      sendResponse({ createTime, followers, author });
    })
    .catch(err => {
      sendResponse({ error: err.message });
    });

  return true;
}

if (request.type === "fetchInstagram") {
  chrome.tabs.create({ url: request.url, active: false }, (tab) => {
    const listener = (tabId, changeInfo) => {
      if (tabId === tab.id && changeInfo.status === "complete") {


          chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: () => {
              // Get username from og:url
              const ogUrlMeta = document.querySelector('meta[property="og:url"]');
              let username = null;

              if (ogUrlMeta?.content) {
                try {
                  const url = new URL(ogUrlMeta.content);
                  const parts = url.pathname.split("/").filter(Boolean);
                  username = parts[0]; // first segment after instagram.com/
                } catch (e) {
                  username = null;
                }
              }

              // Get time from <time datetime="...">
              const timeTag = document.querySelector("time[datetime]");
              const datetime = timeTag?.getAttribute("datetime") || null;

              if (username && datetime) {
                return { username, datetime };
              }

              return null;
            }
          }).then((results) => {
            const data = results[0].result;

            chrome.tabs.remove(tab.id);

            if (!data) {
              sendResponse({ error: "No data found" });
            } else {
              sendResponse({
                username: data.username,
                createTime: new Date(data.datetime).getTime()
              });
            }
          });


        // chrome.scripting.executeScript({
        //   target: { tabId: tab.id },
        //   func: () => {
        //     return document.documentElement.outerHTML;
        //   }
        // }).then((results) => {
        //   const html = results[0].result;

        //   console.log("PAGE HTML:");
        //   console.log(html);

        //   chrome.tabs.remove(tab.id);
        //   sendResponse({ debug: "HTML logged" });
        // });

        chrome.tabs.onUpdated.removeListener(listener);
      }
    };

    chrome.tabs.onUpdated.addListener(listener);
  });

  return true;
}

// if (request.type === "fetchInstagram") {
//   chrome.tabs.create({ url: request.url, active: false }, (tab) => {
//     const listener = (tabId, changeInfo) => {
//       if (tabId === tab.id && changeInfo.status === "complete") {

//         chrome.scripting.executeScript({
//           target: { tabId: tab.id },
//           func: () => {

//                 return new Promise((resolve) => {
//                   const tryResolve = () => {
//                     const timeTag = document.querySelector("time");
//                     const twitterMeta = document.querySelector('meta[name="twitter:title"]');

//                     const datetime = timeTag?.getAttribute("datetime");
//                     console.log(datetime);

//                     let username = null;
//                     if (twitterMeta?.content) {
//                       const match = twitterMeta.content.match(/\(@([^)]*)\)/);
//                       if (match) username = match[1];
//                     }
//                     console.log(username);

//                     if (datetime && username) {
//                       return { datetime, username };
//                     }

//                     return null;
//                   };

//                   // 🔥 CHECK IMMEDIATELY FIRST
//                   const immediate = tryResolve();
//                   if (immediate) {
//                     resolve(immediate);
//                     return;
//                   }

//                   const observer = new MutationObserver(() => {
//                     const result = tryResolve();
//                     if (result) {
//                       observer.disconnect();
//                       clearTimeout(timeout);
//                       resolve(result);
//                     }
//                   });

//               observer.observe(document.body, { childList: true, subtree: true });

//               const timeout = setTimeout(() => {
//                 observer.disconnect();
//                 resolve(null);
//               }, 10000);
//             });
//           }
//         }).then((results) => {
//           const data = results[0].result;
//           chrome.tabs.remove(tab.id);

//           if (!data) {
//             sendResponse({ error: "No data found" });
//           } else {
//             sendResponse({
//               createTime: new Date(data.datetime).getTime(),
//               username: data.username
//             });
//           }
//         });

//         chrome.tabs.onUpdated.removeListener(listener);
//       }
//     };

//     chrome.tabs.onUpdated.addListener(listener);
//   });

//   return true;
// }

    if (request.type === "fetchYouTube") {
    fetch(request.url)
      .then(res => res.text())
      .then(html => {
        // --- 1️⃣ Extract ytInitialPlayerResponse for author & upload date ---
        const playerMatch = html.match(/ytInitialPlayerResponse\s*=\s*(\{.*?\});/s);
        if (!playerMatch) {
          sendResponse({ error: "Could not find ytInitialPlayerResponse" });
          return;
        }

        let playerData;
        try {
          playerData = JSON.parse(playerMatch[1]);
        } catch (err) {
          sendResponse({ error: "Failed to parse ytInitialPlayerResponse JSON" });
          return;
        }

        const username = playerData.videoDetails?.author || null;
        const publishDate = playerData.microformat?.playerMicroformatRenderer?.publishDate || null;
        const uploadTime = publishDate ? new Date(publishDate).getTime() : null;

        // --- 2️⃣ Extract ytInitialData for subscriber count & badges ---
        const dataMatch = html.match(/ytInitialData\s*=\s*(\{.*?\});/s);
        let subscriberCount = 0;
        let badges = false;

        if (dataMatch) {
          try {
            const data = JSON.parse(dataMatch[1]);

            const contents = data.contents?.twoColumnWatchNextResults?.results?.results?.contents || [];

            for (const item of contents) {
              const videoSecondaryInfo = item.videoSecondaryInfoRenderer;
              if (videoSecondaryInfo) {
                const owner = videoSecondaryInfo.owner?.videoOwnerRenderer;
                if (owner) {
                //   const subText = owner.subscriberCountText?.simpleText || "0";
                //   subscriberCount = parseInt(subText.replace(/,/g, "")) || 0;
                    
                    const subText = owner.subscriberCountText?.simpleText || "0";
                    subscriberCount = parseSubscriberCount(subText);

                  badges = Array.isArray(owner.badges) && owner.badges.length > 0;
                }
                break; // stop once we found it
              }
            }
          } catch (err) {
            console.warn("Failed to parse ytInitialData JSON:", err);
          }
        }

        // --- 3️⃣ Send everything back to content script ---
        sendResponse({
          username,
          uploadTime,
          badges,
          subscriberCount
        });

      })
      .catch(err => {
        sendResponse({ error: err.message });
      });

    return true; // keep channel open for async response
  }
});

function parseSubscriberCount(text) {
  if (!text) return 0;

  text = text.replace(/subscribers/i, "").trim();
  text = text.replace(",", "."); // normalize decimal comma
  const multipliers = { K: 1_000, M: 1_000_000, B: 1_000_000_000 };

  const match = text.match(/^([\d.]+)\s*([KMB])?$/i);
  if (!match) return 0;

  let [_, number, suffix] = match;
  number = parseFloat(number);

  if (suffix && multipliers[suffix.toUpperCase()]) {
    number *= multipliers[suffix.toUpperCase()];
  }

  return Math.round(number);
}
