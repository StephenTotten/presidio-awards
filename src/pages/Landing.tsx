import Button from "../components/Button";
import { Link } from "react-router-dom";


const Landing = () => {
    return (
        <div className="center">
          <h2>Welcome to</h2>
          <h1>Presidio Awards</h1>
          <Link to ="/login">
          <Button 
          text="Log In"
          />
          </Link>
        </div>
      );
}

export default Landing;