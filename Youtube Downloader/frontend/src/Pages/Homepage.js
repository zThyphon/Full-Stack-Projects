import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

function Homepage() {
    const navigate = useNavigate();

    // Redirect to "/video" when the homepage is visited
    useEffect(() => {
        navigate("/video", { replace: true });
    }, [navigate]);

    return (
        <Outlet />
    );
}

export default Homepage;