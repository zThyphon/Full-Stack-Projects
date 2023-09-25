import fetch from "node-fetch";

async function getYouTubeVideoName(url) {
  try 
  {
    // Fetch the YouTube page's HTML
    const response = await fetch(url);
    const html = await response.text();

    // Extract the video title using a regular expression
    const titleMatch = html.match(/<title>(.*?) - YouTube<\/title>/);
    console.log("title match: "+titleMatch);
    
    // Get matched title
    if (titleMatch && titleMatch[1]) 
    {
      const videoTitle = titleMatch[1];
      return videoTitle;
    } 
    else 
    {
      console.error("Video title not found on the YouTube page.");
      return null;
    }
  } 
  catch (error) 
  {
    console.error("Error fetching YouTube page:", error);
    return null;
  }
}

export default getYouTubeVideoName;
