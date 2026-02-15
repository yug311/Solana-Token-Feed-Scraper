function decideHighlight({
  username,
  createdAt,
  passesVerification,
  prioritySet,
  cache,
  id
}) {
  const now = Date.now();
  const createdTime = new Date(createdAt).getTime();

  const isRecent = (now - createdTime) <= FIVE_MINUTES;
  if (!isRecent) return null;

  const isPriority = prioritySet.has("@" + username.toLowerCase());
  const isCached = cache.wasRecentlySeen(id);

  if (isPriority) {
    if (isCached) return "blue";
    return "gold";
  }

  if (passesVerification) {
    if (isCached) return "blue";
    return "red";
  }

  return null;
}

function applyHighlight(node, color, id, createdAt, cache) {
  if (!color) return;

  if (color === "gold") {
    node.style.border = "2px solid gold";
    cache.remember(id, new Date(createdAt).getTime());
  }

  if (color === "red") {
    node.style.border = "2px solid red";
    cache.remember(id, new Date(createdAt).getTime());
  }

  if (color === "blue") {
    node.style.border = "2px solid blue";
  }
}


async function highlightYouTube(node, youtubeLink) {

  chrome.runtime.sendMessage(
    { type: "fetchYouTube", url: youtubeLink.href },
    (response) => {

      if (!response) {
        return;
      }

      if (response.error) {
        return;
      }

      const { username, uploadTime, badges, subscriberCount } = response;
      if (!uploadTime) return;

      const highlight = decideHighlight({
        username,
        createdAt: uploadTime,
        passesVerification: youtubePassesVerification(response),
        prioritySet: youtubePriority,
        cache: youtubeCache,
        id: youtubeLink.href
      });

      applyHighlight(node, highlight, youtubeLink.href, uploadTime, youtubeCache);
    }
  );

}


async function highlightTikTok(node, tiktokLink) {
  chrome.runtime.sendMessage(
    { type: "fetchTikTok", url: tiktokLink.href },
    (response) => {
      if (!response ||response.error) {
        return;
      }

      const { createTime, followers, author } = response;

      if (!createTime) return;

      const highlight = decideHighlight({
        username: author,
        createdAt: createTime,
        passesVerification: tiktokPassesVerification(response),
        prioritySet: tiktokPriority,
        cache: tiktokCache,
        id: tiktokLink.href
      });

      applyHighlight(node, highlight, tiktokLink.href, createTime, tiktokCache);
  
    }
  );
}

async function highlightInstagram(node, instagramLink) {

  chrome.runtime.sendMessage(
    { type: "fetchInstagram", url: instagramLink.href },
    (response) => {

      if (!response) {
        return;
      }

      if (response.error) {
        console.log("Instagram fetch failed:", response.error);
        return;
      }

      const { username, createTime } = response;

      if (!createTime) return;

      const highlight = decideHighlight({
        username,
        createdAt: createTime,
        passesVerification: instagramPassesVerification(response),
        prioritySet: instagramPriority,
        cache: instagramCache,
        id: instagramLink.href
      });

      applyHighlight(node, highlight, instagramLink.href, createTime, instagramCache);
    }
  );

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


        const highlight = decideHighlight({
          username: data.userInfo?.userName,
          createdAt: data.createdAt,
          passesVerification: shouldHighlightTweet(data),
          prioritySet: twitterPriority,
          cache: twitterCache,
          id: tweetId
        });

        applyHighlight(node, highlight, tweetId, data.createdAt, twitterCache);
        }
    }
    };
    xhr.send();

}