
import "../CSS/Verification.css";
import { Link } from "react-router-dom";    
import upload from "../images/upload.png";

function Verification() {
    return(
        <>
        <div className="V-Page">
            <h2 className="text"> Verification </h2>
            <p> Send a copy of your medical license <br></br>Your medical license must be valid </p>
        </div>
        <div className="V-Content">
        <img src={upload} alt="logo"/>
        <p> Click here to upload the image </p>
        </div>
        <Link className="Send-button" to="/sign"> Send </Link>
        </>
    );
}

export default Verification;