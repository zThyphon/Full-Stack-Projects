import { Link } from "react-router-dom";
import "./UrlChangeButton.css";

function UrlChangeButton(props) {
  // If the path starts with '/', treat it as an absolute path
  const toPath = props.to.startsWith("/") ? props.to : `/${props.to}`;

  return (
    <Link className="url-change-button" to={toPath}>
      {props.children}
    </Link>
  );
}

export default UrlChangeButton;
