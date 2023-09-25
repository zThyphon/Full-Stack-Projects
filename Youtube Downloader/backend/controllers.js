const { getYouTubeVideoName } = require("./functions.js");
const ytdl = require("ytdl-core");
const unidecode = require("unidecode");

//Download Api
const DownloadController = async (request, response) => {
    try 
    {
        //Get url 
        const url = request.query.URL;
        //Get video name
        const videoName = await getYouTubeVideoName(url);
        //Get extension (.mp4 or .mp3 extensions supported)
        const extension = request.params.extension;
        console.log("extention is: "+extension);
        /*
        Create unicodedVideoName for avoiding 
        unexpected errors because of non-ascii 
        youtube video name characters
        */

        let unidecodedVideoName = `${unidecode(videoName)}.${extension}`;

        /*
        Create downloadFilter object 
        in order to video settings 
        (video or music)
        */

        let downloadFilter;
        (extension ==="mp4") ?
        downloadFilter = 'audioandvideo':
        downloadFilter = "audio";
        
        /*
        Make a small transformation if video title includes ','
        because ',' character in title leads unexpected errors.
        */

        if(unidecodedVideoName.includes(","))
        {
            const splittedVideoName = unidecodedVideoName.split(",");
            let videoNameWithoutCommas = "";
            for(let i=0;splittedVideoName.length>i;i++)
            {
                videoNameWithoutCommas += `${splittedVideoName[i]} ` ;
            }
            unidecodedVideoName = videoNameWithoutCommas;
        }

        /*
        Add header to response 
        for downloading the video or music 
        (frontend server will automaticlly download the content)
        */
       
        response.header('Content-Disposition', `attachment; filename=${unidecodedVideoName}`);
        
        // Specify the format quality, filter and format
        ytdl(url, {
            quality: 'highest', // You can specify the desired quality here
            filter: downloadFilter, // This ensures both video and audio are included
            format: extension
        }).pipe(response);
        
    } catch (e) {
        console.error(e);
    }
}

module.exports = {
    DownloadController
}