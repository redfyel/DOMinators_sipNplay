import "./About.css";
import { GiSpades } from "react-icons/gi";
function About() {
  return (
    <div className="about-container">
      <div className="bg">
        <div className="card-body mx-auto" id="crd1">
          <p className="lead">
            
            Founder, Jonathan Li, shares a passion for board games, boba, and
            delicious food, so he combined them all to become Sip & Play, Park
            Slope’s first board game cafe. <GiSpades className="spade" />It is a straightforward concept, come
            in with your friends and family to play any board game from our
            library of 300+ games! We hope when you visit, you also enjoy our
            coffee, espresso, boba, sandwiches, and snacks!
          </p>
        </div>
        <div className="card-body fs-3" id="crd2">
          <p className="lead fs-3"> Find out the List of Games you can explore at Sip&Play!</p>
        
          <a
            href="https://docs.google.com/spreadsheets/d/1-TOvwUh-ziCB6QmLYvQlxtXuBd-aGiiO72GWAasby8o/edit?gid=0#gid=0"
            target="_blank"
          >
            Our Board Game Collection
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
