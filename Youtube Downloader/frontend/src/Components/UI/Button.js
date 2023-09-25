import "./Button.css";

function Button(props) {
    /*
    Add passive (disabled) css class 
    accordingly disabled attribute of button element 
    */

    const classNames = props.isButtonDisabled ? "btn-passive":"btn";
    return (
        <button
            onClick={props.downloadHandler}
            className={classNames}
            disabled={props.isButtonDisabled}
        >{props.text}</button>
    );
}

export default Button;
