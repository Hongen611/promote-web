import "./Landing.css";
import landingImage from "../assets/running.jpg";

function Landing() {
  return (
    <section className="landing">
      <div className="landing-all">
        <div className="landing-left">

          <div className="badge">
            ● Your Health, Our Priority
          </div>

          <h1>
            Your Personal <br />
            <span>Virtual Healthcare</span> <br />
            <span>Companion</span>
          </h1>

          <p>
            Track your health, connect with doctors, and achieve your
            wellness goals—all in one intelligent platform powered by AI.
          </p>

          <div className="landing-buttons">
            <button className="download">Download Now</button>
            <button className="learn">Learn More →</button>
          </div>

        </div>

        <div className="landing-right">
          <img src={landingImage} alt="health app"/>
        </div>
      </div>

    </section>
  );
}

export default Landing;