import React from "react";
import "./App.css";
import placeholderImage from "../src/assets/images/image1.svg";
import placeholderIcon from "../src/assets/images/casino1.svg";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="top-section">
        <div className="text-container">
          <p>
            קזינו לייב, סלוטים, ספורט 35% בונוס להפקדה ראשונה, דרך סוכן רשמי
          </p>
          <button className="cta-button">קליק כאן</button>
        </div>
        <img src={placeholderImage} alt="Casino" className="main-image" />
      </div>
      <div className="bottom-section">
        <img src={placeholderIcon} alt="Casino Icon" className="casino-icon" />
        <div className="form-container">
          <p>רשם עכשיו והתחל לשחק באתר הגדול בעולם</p>
          <form>
            <input type="text" placeholder="שם" />
            <input type="email" placeholder="הפק" />
            <input type="tel" placeholder="אימייל" />
            <button type="submit">שלח</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
