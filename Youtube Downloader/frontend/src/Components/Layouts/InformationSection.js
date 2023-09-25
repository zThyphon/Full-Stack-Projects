import SupportedPlatforms from "../UI/SupportedPlatforms";
import "./InformationSection.css";

function InformationSection(props) 
{
    /*
    A layout for information section 
    (supported platforms etc.)
    */

    return (
        <section className="info-section">
            <p className="info-text">{props.firstText}</p>
            <p className="info-text">{props.secondText}</p>
            <p className="info-text">{props.thirdText}</p>
            <p className="info-text">{props.fourthText}</p>
            <SupportedPlatforms />
        </section>
    );
}


export default InformationSection;