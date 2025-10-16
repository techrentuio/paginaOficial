import { Link } from "react-router-dom";

import { Button } from "../components/Button";

import tech from "../assets/Tech Rent.png";


export const Home = () => {
  return (
    <section className="Home">
      <main className="Home-main">
        <section className="Home-info">
          <h1 className="Home-info--h1">
            Accede a 
            <span className="Home-info--span">tecnología sin comprarla</span>
          </h1>
          <Button className="Button Home-button">
            <Link to="/packages">PLANES</Link>
          </Button>
        </section>
        <section className="Home-photo">
          <img className="Home-img" src={tech} alt="tech"></img>
        </section>
      </main>
 
      
    </section>
  );
};
