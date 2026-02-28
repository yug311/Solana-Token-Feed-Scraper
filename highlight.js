function decideHighlight({
  username,
  createdAt,
  passesVerification,
  prioritySet,
  cache,
  id,
  max_time
}) {
  const now = Date.now();
  const createdTime = new Date(createdAt).getTime();

  const isRecent = (now - createdTime) <= max_time;
  if (!isRecent) return null;

  const isPriority = prioritySet.has("@" + username.toLowerCase());
  const isCached = cache.wasRecentlySeen(id);
  // console.log("Deciding highlight: ", id);

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

  // console.log(`Applying highlight to ${id}`);

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
      // console.log("YouTube response:", response);
      if (!uploadTime) return;

      // youtubeCache.debug();

      const highlight = decideHighlight({
        username,
        createdAt: uploadTime,
        passesVerification: youtubePassesVerification(response),
        prioritySet: youtubePriority,
        cache: youtubeCache,
        id: youtubeLink.href,
        max_time: YOUTUBE_MAX_PASSED_TIME
      });

      // console.log("2: ", highlight);

      applyHighlight(node, highlight, youtubeLink.href, uploadTime, youtubeCache);

      // youtubeCache.debug();
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
      // console.log("TikTok response:", response);

      if (!createTime) return;


      // tiktokCache.debug();
      const highlight = decideHighlight({
        username: author,
        createdAt: createTime,
        passesVerification: tiktokPassesVerification(response),
        prioritySet: tiktokPriority,
        cache: tiktokCache,
        id: tiktokLink.href,
        max_time: TIKTOK_MAX_PASSED_TIME
      });

        // console.log("2: ", highlight);

      applyHighlight(node, highlight, tiktokLink.href, createTime, tiktokCache);

      // tiktokCache.debug();
  
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

      const { createTime, username } = response;
      // console.log("Instagram response:", response);

      if (!createTime) return;

      // instagramCache.debug();

      const highlight = decideHighlight({
        username,
        createdAt: createTime,
        passesVerification: instagramPassesVerification(response),
        prioritySet: instagramPriority,
        cache: instagramCache,
        id: instagramLink.href,
        max_time: INSTAGRAM_MAX_PASSED_TIME
      });

      // console.log("2: ", highlight);

      applyHighlight(node, highlight, instagramLink.href, createTime, instagramCache);

      // instagramCache.debug();
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


        // twitterCache.debug();
        const highlight = decideHighlight({
          username: data.userInfo?.userName,
          createdAt: data.createdAt,
          passesVerification: shouldHighlightTweet(data),
          prioritySet: twitterPriority,
          cache: twitterCache,
          id: tweetId,
          max_time: TWITTER_MAX_PASSED_TIME
        });

        // console.log("2: ", highlight);

        applyHighlight(node, highlight, tweetId, data.createdAt, twitterCache);

        // twitterCache.debug();
        }
    }
    };
    xhr.send();

}