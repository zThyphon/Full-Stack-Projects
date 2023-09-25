import "./Header.css";
import downloadIcon from "../../Assets/download_icon.png";
import musicIcon from "../../Assets/music_icon.png";

function Header(props) {
    //Change header image accordingly content type
    const imageSrc = (props.type === "Music") ? musicIcon : downloadIcon;
    
    return (
        <div className="header">
            <div className="header-row">  
                <img src={imageSrc} alt="header icon" />
                <p className="header-text">{props.type} Downloader by <span>zThyphon</span></p>
            </div>
        </div>
    );
}

export default Header;