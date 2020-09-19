import React ,{useEffect}from "react";
import '../css/livestats.css';
import AOS from "aos";
import "aos/dist/aos.css";

export default function LiveStatsComponent() {
    useEffect(() => {
      AOS.init({
        duration: 2000,
      });
    }, []);
  return (
    <div>
    <section id="hero">
    <div className="container">
      <div className="row">
        <div className="col-12 d-flex align-items-center justify-content-center">
          <div data-aos="zoom-out">
            <h2>Rankings of Infinity 2020 </h2>
          </div>
        </div>
      </div>
    </div>

      <svg
        className="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path
            id="wave-path"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          />
        </defs>
        <g className="wave1">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="3"
            fill="rgba(255,255,255,0.1)"
            
          />
        </g>
        <g className="wave2">
          <use
            xlinkHref="#wave-path"
            x="50"
            y="0"
            fill="rgba(255,255,255, .2)"
          />
        </g>
        <g className="wave3">
          <use xlinkHref="#wave-path" x="50" y="9" fill="#fff" />
        </g>
      </svg>
      </section>
    </div>

  );
}
