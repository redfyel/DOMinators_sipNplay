import { useEffect } from "react";
import "./Home.css";
import { FaChessRook } from "react-icons/fa";
import { IoDiceSharp } from "react-icons/io5";
import { RiDrinksFill } from "react-icons/ri";

function Home() {
  useEffect(() => {
    VANTA.HALO({
      el: "#vanta",
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      baseColor: 0x4aae78,
      backgroundColor: 0xa0e384,
      amplitudeFactor: 0.6,
      yOffset: -0.02,
      xOffset: 0.01,
      size: 1.4,
    });
  }, []);

  return (
    <div>
      <div className="bg p-5 " id="vanta">
        <div className="content">
          <h1 >Sip & Play</h1>
          <h3><FaChessRook />Rewind</h3>
          <h3><IoDiceSharp />Retell</h3>
          <h3><RiDrinksFill />ReConnect</h3>
          <p className="lead fs-3">
            Re-enter through this portal into those good ol' days
            <br></br>where no gadget reigned
          </p>


          <p className="lead fs-3">
            Explore our Passion, Packages, Prices and More!
          </p>
        </div>

      </div>
    </div>
  );
}

export default Home;
