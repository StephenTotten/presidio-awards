import Button from "../components/Button";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div className="center">
          <h2 className="lineUp">Welcome to</h2>
          <h1 className="lineUp">Presidio Awards</h1>
          <Link to ="/login">
          <Button 
          text="Log In"
          id="lineUp"
          />
          </Link>
        </div>
      );
}

export default Landing;