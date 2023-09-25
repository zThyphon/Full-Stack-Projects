import Button from "../UI/Button";
import UrlInput from "../UI/UrlInput";
import { useDispatch, useSelector } from "react-redux";
import { downloadActions } from "../../Store/downloadSlice";
import { enteredUrlValidation }  from "../../Store/validation";

function InputLayout(props) {
  //Get state informations from redux
  const videoUrl = useSelector((state) => state.download.videoUrl);
  const musicUrl = useSelector(state=> state.download.musicUrl);
  const buttonText = useSelector((state) => state.download.buttonText);
  const isButtonDisabled = useSelector(state=> state.download.isButtonDisabled);
  const dispatch = useDispatch();

  const downloadHandler = async () => {
    //Get content type (video or music)
    const type = props.type;

    let validationUrl;

    //Get url accordingly content type
    (type==="video") ? 
    validationUrl = videoUrl: 
    validationUrl = musicUrl;
    
    /*
    Validate url is suitable for sending 
    request for backend api 
    */

    const validation = enteredUrlValidation(validationUrl);

    if(validation)
    {
      /*
      Change button text in order to 
      give information to user about process 
      */

      dispatch(downloadActions.setButtonText("Converting..."));
      // Disable the button when downloadHandler is triggered
      dispatch(downloadActions.setButtonIsDisabled());

      //Download content accordingly its type
      (type==="video") ? 
      dispatch(downloadActions.downloadVideo(videoUrl)) :
      dispatch(downloadActions.downloadMusic(musicUrl));

      // Enable the button after 3 seconds
      setTimeout(() => {
        dispatch(downloadActions.setButtonIsDisabled());
        //Set button text again
        dispatch(downloadActions.setButtonText("Download"));
      }, 3000);
     }
  };

  return (
    <div className="input-layout">
      <UrlInput type={props.type} />
      <Button
        text={buttonText}
        downloadHandler={downloadHandler}
        isButtonDisabled={isButtonDisabled}
      />
    </div>
  );
}

export default InputLayout;
