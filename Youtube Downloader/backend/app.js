import express from "express";
import DownloadController from "./controllers.js";

const app = express();

/*Create server opening text 
(info about server started correctly)
*/

const serverStartText = `
Video downloader api started.
Server is working at port 8080`;

//Start Backend Server at port 8080
app.listen(8080, () => {
    console.log(serverStartText);
});

//Define route for /download path
app.get('/download/:extension',DownloadController);

