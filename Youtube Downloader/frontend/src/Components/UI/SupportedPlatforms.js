import "./SupportedPlatforms.css";
import WindowsIcon from "../../Assets/windows_icon.svg";
import AppleIcon from "../../Assets/apple_icon.svg";
import AndroidIcon from "../../Assets/android_icon.svg";
import LinuxIcon from "../../Assets/linux_icon.svg";

function SupportedPlatforms()
{   
    return (
        <div className="platform-container">
            <p className="platform-text">Supported Platforms</p>
            <img className="platform-icon" src={WindowsIcon} alt="Windows Icon" />
            <img className="platform-icon"  src={AppleIcon} alt="Apple Icon" />
            <img className="platform-icon"  src={AndroidIcon} alt="Android Icon" />
            <img className="platform-icon"  src={LinuxIcon} alt="Linux Icon" />
        </div>
    );
}

export default SupportedPlatforms;  