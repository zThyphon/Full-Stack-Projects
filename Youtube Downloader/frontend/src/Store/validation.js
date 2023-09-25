// validation.js
import downloadActions from "./downloadSlice";
import store from "./downloadStore";

function isYoutubeURL(url) {
  // Regular expression to match YouTube video or channel URLs
  const youtubeRegex = /^(https?:\/\/)?(www\.)?(youtube\.com\/(channel\/|c\/)?|youtu\.be\/)/i;
  // Test if the URL matches the regex pattern
  return youtubeRegex.test(url);
}

function enteredUrlValidation(url) {
  if (url === "") {
    alert("Enter a url!");
    return false;
  }

  const isYoutubeUrlResult = isYoutubeURL(url); // Corrected the argument here
  if (!isYoutubeUrlResult) {
    alert("Please enter a Youtube URL");
    return false;
  }

  if (url.includes(",")) {
    const splittedText = url.split(",");
    let newText = "";

    for (let i = 0; i < splittedText.length; i++) {
      newText += splittedText[i] + " ";
    }

    store.dispatch(downloadActions.setVideoUrl(newText));
    return true;
  }

  return true;
}

export { isYoutubeURL, enteredUrlValidation };
