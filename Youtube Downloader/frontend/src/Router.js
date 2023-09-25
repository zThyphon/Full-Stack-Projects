import { createBrowserRouter } from "react-router-dom";
import ErrorPage404 from "./Pages/ErrorPage404";
import DownloadVideoPage from "./Pages/DownloadVideoPage";
import DownloadMusicPage from "./Pages/DownloadMusicPage";
import Homepage from "./Pages/Homepage";

//Define router paths
const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage404 />,
        element: <Homepage />,
        children: [
            {
                path: "video",
                element: <DownloadVideoPage />,
            },
            {
                path: "music",
                element: <DownloadMusicPage />
            }
        ]
    }
]);

export default router;
