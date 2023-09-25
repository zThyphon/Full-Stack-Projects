import "./UrlInput.css";
import { useDispatch } from "react-redux";
import { downloadActions } from "../../Store/downloadSlice";

function UrlInput(props) 
{
    const dispatch = useDispatch();

    /*
    This function sets content url state 
    accordingly content type
    */
    const urlChangeHandler = async (event) => {
        const url = event.target.value;
        
        (props.type==="video") ?
        dispatch(downloadActions.setVideoUrl(url)): 
        dispatch(downloadActions.setMusicUrl(url));
    };

    return (
        <input 
            className="url_input" 
            type="text" 
            placeholder="Paste link here"
            onChange={urlChangeHandler}
        />
    );
}

export default UrlInput;