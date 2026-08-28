"use client";

import { useEffect, useState } from "react";

/* =========================
   SOCIAL ICONS
========================= */

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32">
    <path
      fill="#25F4EE"
      d="M16.5 3.5h-3.1v10.2a2.7 2.7 0 1 1-2.1-2.6V8a6 6 0 1 0 5.3 5.9V8.4c1 .8 2.2 1.2 3.5 1.3V6.5c-2-.2-3.3-1.2-3.6-3z"
      transform="translate(-1 1)"
    />
    <path
      fill="#FE2C55"
      d="M16.5 3.5h-3.1v10.2a2.7 2.7 0 1 1-2.1-2.6V8a6 6 0 1 0 5.3 5.9V8.4c1 .8 2.2 1.2 3.5 1.3V6.5c-2-.2-3.3-1.2-3.6-3z"
      transform="translate(1 -1)"
    />
    <path
      fill="#000"
      d="M16.5 3.5h-3.1v10.2a2.7 2.7 0 1 1-2.1-2.6V8a6 6 0 1 0 5.3 5.9V8.4c1 .8 2.2 1.2 3.5 1.3V6.5c-2-.2-3.3-1.2-3.6-3z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32">
    <defs>
      <linearGradient id="instagramGradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#FFDC80" />
        <stop offset="25%" stopColor="#FC7C2D" />
        <stop offset="55%" stopColor="#E1306C" />
        <stop offset="78%" stopColor="#C13584" />
        <stop offset="100%" stopColor="#833AB4" />
      </linearGradient>
    </defs>

    <rect
      x="3"
      y="3"
      width="18"
      height="18"
      rx="5"
      fill="none"
      stroke="url(#instagramGradient)"
      strokeWidth="2.5"
    />

    <circle
      cx="12"
      cy="12"
      r="4"
      fill="none"
      stroke="url(#instagramGradient)"
      strokeWidth="2"
    />

    <circle
      cx="17.3"
      cy="6.7"
      r="1.3"
      fill="#E1306C"
    />
  </svg>
);

const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32">
    <path
      fill="#fff"
      stroke="#000"
      strokeWidth="0.7"
      d="M12 3c-3.1 0-5 2.2-5 5.2v2.1c0 .8-.3 1.3-1.1 1.7l-1.4.6c-.4.2-.5.7-.1 1 .7.6 1.6.9 2.5 1 .3 1.2 1 2.1 2.1 2.6-.1.6-.5 1.1-1.1 1.3-.3.1-.3.6 0 .7.9.4 1.9.1 2.6-.3.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8c.7.4 1.7.7 2.6.3.3-.1.3-.6 0-.7-.6-.2-1-.7-1.1-1.3 1.1-.5 1.8-1.4 2.1-2.6.9-.1 1.8-.4 2.5-1 .4-.3.3-.8-.1-1l-1.4-.6c-.8-.4-1.1-.9-1.1-1.7V8.2C17 5.2 15.1 3 12 3z"
    />
  </svg>
);

const VintedIcon = () => (
  <svg viewBox="0 0 24 24" width="32" height="32">
    <path
      fill="currentColor"
      d="M4 5h4l4 9 4-9h4l-6.2 14h-3.6L4 5z"
    />
  </svg>
);

/* =========================
   MAIN PAGE
========================= */

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =========================
     BUSINESS ACCOUNTS
  ========================= */

  const businessAccounts = [
    {
      type: "TikTok",
      name: "21stocks",
      label: "OFFICIAL BUSINESS ACCOUNT",
      url: "https://www.tiktok.com/@21stocks",
      icon: <TikTokIcon />,
    },
    {
      type: "Vinted",
      name: "21restocks",
      label: "OFFICIAL SHOP",
      url: "https://www.vinted.de/member/3178578094-21restocks",
      icon: <VintedIcon />,
    },
  ];

  /* =========================
     PERSONAL ACCOUNTS
  ========================= */

  const personalAccounts = [
    {
      type: "TikTok",
      username: "@youyu21bansky",
      url: "https://www.tiktok.com/@youyu21bansky",
      icon: <TikTokIcon />,
    },
    {
      type: "TikTok",
      username: "@adam4go",
      url: "https://www.tiktok.com/@adam4go",
      icon: <TikTokIcon />,
    },
    {
      type: "Instagram",
      username: "@youssef.ddf",
      url: "https://www.instagram.com/youssef.ddf/",
      icon: <InstagramIcon />,
    },
    {
      type: "Instagram",
      username: "@adam_marox77",
      url: "https://www.instagram.com/adam_marox77/",
      icon: <InstagramIcon />,
    },
    {
      type: "Snapchat",
      username: "21cent",
      url: "https://snapchat.com/t/5fd6xHYP",
      icon: <SnapchatIcon />,
    },
    {
      type: "Snapchat",
      username: "Adamgango",
      url: "https://snapchat.com/t/vAWV7kT1",
      icon: <SnapchatIcon />,
    },
  ];

  return (
    <main className="site">

      {/* BACKGROUND */}

      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="ambient ambientThree" />

      <div className="noise" />

      {/* NAVBAR */}

      <header className="navbar">

        <a href="#home" className="brand">
          <div className="brandMark">21</div>

          <div className="brandText">
            <strong>21</strong>
            <span>RESELLING</span>
          </div>
        </a>

        <nav>
          <a href="#home">HOME</a>
          <a href="#business">BUSINESS</a>
          <a href="#about">ABOUT US</a>
          <a href="#socials">SOCIALS</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="#business" className="navButton">
          SHOP
        </a>

      </header>

      {/* HERO */}

      <section id="home" className="hero">

        <div
          className="heroGlow"
          style={{
            transform: `translateY(${scrollY * 0.12}px)`,
          }}
        />

        <div className="heroContent">

          <div className="eyebrow">
            <span className="liveDot" />
            21 RESELLING
          </div>

          <h1>
            <span>21</span>
            <strong>RESELLING</strong>
          </h1>

          <div className="slogan">
            <span>2 MINDS.</span>
            <span>1 PLAN.</span>
          </div>

          <p className="heroDescription">
            Zwei Köpfe. Ein Ziel.
            <br />
            Streetwear, Reselling &amp; unsere Community.
          </p>

          <div className="heroActions">

            <a href="#business" className="primaryButton">
              OUR BUSINESS
              <span>↗</span>
            </a>

            <a href="#about" className="secondaryButton">
              ABOUT US
              <span>↗</span>
            </a>

          </div>

        </div>

        <div className="heroSide">

          <div className="sideCard">

            <div className="sideNumber">
              21
            </div>

            <div className="sideLine" />

            <p>
              BUILDING
              <br />
              SOMETHING
              <br />
              DIFFERENT.
            </p>

          </div>

        </div>

        <div className="scrollHint">
          <span />
          SCROLL TO EXPLORE
        </div>

      </section>

      {/* BUSINESS ACCOUNTS */}

      <section id="business" className="business">

        <div className="sectionLabel">
          01 / OFFICIAL ACCOUNTS
        </div>

        <div className="businessTop">

          <div>
            <h2>
              OUR
              <br />
              <span>BUSINESS.</span>
            </h2>
          </div>

          <p>
            Das sind unsere offiziellen 21 Reselling Accounts.
            Hier findet ihr unsere neuesten Updates, Produkte
            und Listings.
          </p>

        </div>

        <div className="businessGrid">

          {businessAccounts.map((account, index) => (

            <a
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className="businessCard"
              key={index}
            >

              <div className="businessIcon">
                {account.icon}
              </div>

              <div className="businessInfo">

                <span>
                  {account.type}
                </span>

                <strong>
                  {account.name}
                </strong>

                <small>
                  {account.label}
                </small>

              </div>

              <div className="businessArrow">
                ↗
              </div>

            </a>

          ))}

        </div>

      </section>

      {/* ABOUT US */}

      <section id="about" className="about">

        <div className="sectionLabel">
          02 / ABOUT US
        </div>

        <div className="aboutGrid">

          <div>

            <h2>
              TWO MINDS.
              <br />
              <span>ONE VISION.</span>
            </h2>

          </div>

          <div className="aboutText">

            <p>
              Wir sind <b>21 Reselling</b> – zwei Jungs mit
              einer gemeinsamen Idee.
            </p>

            <p>
              Wir entdecken Trends, finden starke Pieces und
              bringen sie zu unserer Community.
            </p>

            <p className="muted">
              Unsere offiziellen Business Accounts findest du
              oben. Unsere persönlichen Accounts findest du
              weiter unten.
            </p>

          </div>

        </div>

        {/* MITWIRKENDE */}

        <div className="contributors">

          <div className="contributorsTitle">
            <span>THE PEOPLE BEHIND 21</span>
            <h3>
              MITWIRKENDE
            </h3>
          </div>

          <div className="contributorsGrid">

            <div className="personCard">

              <div className="personNumber">
                01
              </div>

              <div className="personAvatar">
                Y
              </div>

              <span>
                CO-FOUNDER
              </span>

              <h4>
                YOUSSEF
              </h4>

              <p>
                21 RESELLING
              </p>

            </div>

            <div className="personCard">

              <div className="personNumber">
                02
              </div>

              <div className="personAvatar">
                A
              </div>

              <span>
                CO-FOUNDER
              </span>

              <h4>
                ADAM
              </h4>

              <p>
                21 RESELLING
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* SOCIALS */}

      <section id="socials" className="socials">

        <div className="sectionTop">

          <div>

            <div className="sectionLabel">
              03 / PERSONAL SOCIALS
            </div>

            <h2>
              FIND
              <br />
              <span>US ONLINE.</span>
            </h2>

          </div>

          <p className="sectionIntro">
            Hier findet ihr unsere persönlichen Accounts.
            Folgt uns für Content, Updates und Einblicke.
          </p>

        </div>

        <div className="socialGrid">

          {personalAccounts.map((social, index) => (

            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="socialCard"
              key={index}
            >

              <div className={`socialLogo ${social.type.toLowerCase()}`}>
                {social.icon}
              </div>

              <div className="socialDetails">

                <span>
                  {social.type}
                </span>

                <strong>
                  {social.username}
                </strong>

              </div>

              <div className="socialArrow">
                ↗
              </div>

            </a>

          ))}

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact">

        <div className="sectionLabel">
          04 / CONTACT
        </div>

        <h2>
          GOT A
          <br />
          <span>QUESTION?</span>
        </h2>

        <p>
          Schreib uns einfach über unsere Socials.
          <br />
          Wir melden uns so schnell wie möglich.
        </p>

        <a
          href="mailto:21stocks.business@gmail.com"
          className="emailButton"
        >

          <span>✉</span>

          CONTACT US

          <span>↗</span>

        </a>

      </section>

      {/* FOOTER */}

      <footer>

        <div className="footerBrand">

          <div className="footerMark">
            21
          </div>

          <div>
            <strong>
              21 RESELLING
            </strong>

            <span>
              2 MINDS. 1 PLAN.
            </span>
          </div>

        </div>

        <div className="footerRight">

          <span>
            © 2026 21 RESELLING
          </span>

          <span>
            MADE WITH PASSION.
          </span>

        </div>

      </footer>

      {/* CSS */}

      <style jsx>{`

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        .site {
          min-height: 100vh;
          background:
            radial-gradient(
              circle at 70% 10%,
              rgba(116, 75, 255, 0.14),
              transparent 30%
            ),
            radial-gradient(
              circle at 15% 55%,
              rgba(0, 255, 190, 0.06),
              transparent 30%
            ),
            #08090d;
          color: #fff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
          position: relative;
        }

        .noise {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 20;
          opacity: 0.035;
          background-image:
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              #fff 3px
            );
        }

        .ambient {
          position: absolute;
          width: 480px;
          height: 480px;
          border-radius: 50%;
          filter: blur(110px);
          pointer-events: none;
          opacity: 0.13;
          animation: floating 14s ease-in-out infinite;
        }

        .ambientOne {
          top: 0;
          right: -220px;
          background: #6c45ff;
        }

        .ambientTwo {
          top: 55%;
          left: -250px;
          background: #00d9ad;
          animation-delay: -5s;
        }

        .ambientThree {
          bottom: -250px;
          right: 20%;
          background: #744cff;
          animation-delay: -9s;
        }

        @keyframes floating {

          0%,
          100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(40px, -35px);
          }

        }

        .navbar {
          position: relative;
          z-index: 10;
          max-width: 1250px;
          margin: auto;
          padding: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
        }

        .brand {
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .brandMark {
          width: 42px;
          height: 42px;
          border: 1px solid rgba(255,255,255,0.3);
          display: grid;
          place-items: center;
          font-weight: 900;
          font-size: 16px;
          transform: skew(-8deg);
        }

        .brandText {
          display: flex;
          flex-direction: column;
          line-height: 0.9;
        }

        .brandText strong {
          font-size: 19px;
          letter-spacing: -1px;
        }

        .brandText span {
          font-size: 8px;
          letter-spacing: 3px;
          opacity: 0.5;
          margin-top: 5px;
        }

        nav {
          display: flex;
          gap: 28px;
        }

        nav a {
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          font-size: 9px;
          letter-spacing: 2px;
          transition: 0.25s;
        }

        nav a:hover {
          color: #fff;
        }

        .navButton {
          color: #fff;
          text-decoration: none;
          font-size: 9px;
          letter-spacing: 2px;
          padding: 13px 19px;
          border: 1px solid rgba(255,255,255,0.18);
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(15px);
        }

        .hero {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          min-height: calc(100vh - 100px);
          margin: auto;
          padding: 80px 28px 120px;
          display: flex;
          align-items: center;
        }

        .heroContent {
          max-width: 800px;
        }

        .eyebrow,
        .sectionLabel {
          font-size: 9px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.42);
          font-weight: 700;
        }

        .liveDot {
          display: inline-block;
          width: 6px;
          height: 6px;
          background: #65ffb5;
          border-radius: 50%;
          margin-right: 9px;
          box-shadow: 0 0 15px #65ffb5;
        }

        .hero h1 {
          margin: 28px 0 0;
          line-height: 0.77;
          letter-spacing: -9px;
        }

        .hero h1 span {
          display: block;
          font-size: clamp(100px, 15vw, 190px);
          font-weight: 900;
        }

        .hero h1 strong {
          display: block;
          margin-top: 28px;
          font-size: clamp(28px, 4.5vw, 62px);
          letter-spacing: 8px;
          font-weight: 500;
          color: rgba(255,255,255,0.86);
        }

        .slogan {
          display: flex;
          gap: 18px;
          margin-top: 45px;
          font-size: 13px;
          letter-spacing: 4px;
          font-weight: 800;
        }

        .slogan span:last-child {
          color: #8c6aff;
        }

        .heroDescription {
          color: rgba(255,255,255,0.48);
          line-height: 1.7;
          font-size: 14px;
          margin-top: 22px;
        }

        .heroActions {
          display: flex;
          gap: 12px;
          margin-top: 32px;
        }

        .primaryButton,
        .secondaryButton,
        .emailButton {
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 18px;
          font-size: 9px;
          letter-spacing: 2px;
          font-weight: 900;
          transition: 0.3s;
        }

        .primaryButton {
          background: #fff;
          color: #050505;
          padding: 17px 22px;
          border-radius: 100px;
        }

        .secondaryButton {
          color: #fff;
          padding: 17px 22px;
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          background: rgba(255,255,255,0.04);
        }

        .primaryButton:hover,
        .secondaryButton:hover,
        .emailButton:hover,
        .businessCard:hover,
        .socialCard:hover {
          transform: translateY(-4px);
        }

        .heroSide {
          position: absolute;
          right: 35px;
          bottom: 130px;
        }

        .sideCard {
          width: 180px;
          height: 220px;
          padding: 25px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(20px);
          transform: rotate(5deg);
        }

        .sideNumber {
          font-size: 60px;
          font-weight: 900;
          opacity: 0.9;
        }

        .sideLine {
          height: 1px;
          width: 100%;
          background: rgba(255,255,255,0.15);
          margin: 25px 0;
        }

        .sideCard p {
          font-size: 9px;
          line-height: 1.8;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.45);
        }

        .scrollHint {
          position: absolute;
          bottom: 35px;
          left: 28px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.3);
        }

        .scrollHint span {
          width: 25px;
          height: 1px;
          background: rgba(255,255,255,0.3);
        }

        .business,
        .about,
        .socials,
        .contact {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          padding: 130px 28px;
        }

        .businessTop {
          margin-top: 45px;
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 60px;
        }

        .business h2,
        .about h2,
        .socials h2,
        .contact h2 {
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.86;
          letter-spacing: -6px;
          margin: 0;
        }

        .business h2 span,
        .about h2 span,
        .socials h2 span,
        .contact h2 span {
          color: rgba(255,255,255,0.28);
        }

        .businessTop p {
          max-width: 350px;
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          line-height: 1.8;
        }

        .businessGrid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .businessCard {
          color: #fff;
          text-decoration: none;
          padding: 30px;
          min-height: 190px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.12);
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(140,106,255,0.13),
              transparent 35%
            ),
            rgba(255,255,255,0.035);
          display: flex;
          align-items: center;
          gap: 22px;
          transition: 0.35s;
        }

        .businessCard:hover {
          background:
            radial-gradient(
              circle at 90% 10%,
              rgba(140,106,255,0.23),
              transparent 40%
            ),
            rgba(255,255,255,0.06);
          border-color: rgba(145,110,255,0.45);
        }

        .businessIcon {
          width: 70px;
          height: 70px;
          border-radius: 20px;
          background: #fff;
          color: #000;
          display: grid;
          place-items: center;
          flex-shrink: 0;
        }

        .businessIcon svg {
          width: 38px;
          height: 38px;
        }

        .businessInfo {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }

        .businessInfo span {
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.35);
        }

        .businessInfo strong {
          font-size: 25px;
          letter-spacing: -0.5px;
        }

        .businessInfo small {
          font-size: 8px;
          letter-spacing: 2px;
          color: #8c6aff;
        }

        .businessArrow {
          margin-left: auto;
          font-size: 20px;
          color: rgba(255,255,255,0.35);
        }

        .aboutGrid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 100px;
        }

        .aboutText {
          color: rgba(255,255,255,0.55);
          line-height: 1.8;
          font-size: 14px;
        }

        .aboutText b {
          color: #fff;
        }

        .aboutText .muted {
          color: rgba(255,255,255,0.3);
        }

        .contributors {
          margin-top: 100px;
        }

        .contributorsTitle span {
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.3);
        }

        .contributorsTitle h3 {
          margin: 12px 0 30px;
          font-size: 28px;
          letter-spacing: 2px;
        }

        .contributorsGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .personCard {
          position: relative;
          padding: 30px;
          min-height: 260px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 22px;
          background: rgba(255,255,255,0.035);
          overflow: hidden;
          transition: 0.3s;
        }

        .personCard:hover {
          transform: translateY(-5px);
          border-color: rgba(145,110,255,0.4);
        }

        .personNumber {
          position: absolute;
          top: 20px;
          right: 25px;
          font-size: 9px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.25);
        }

        .personAvatar {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle at 30% 30%,
              #9473ff,
              #282039
            );
          font-size: 25px;
          font-weight: 900;
          margin-bottom: 25px;
        }

        .personCard > span {
          font-size: 8px;
          letter-spacing: 3px;
          color: #8c6aff;
        }

        .personCard h4 {
          font-size: 30px;
          margin: 8px 0;
        }

        .personCard p {
          font-size: 8px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.3);
        }

        .sectionTop {
          display: flex;
          justify-content: space-between;
          align-items: end;
          gap: 50px;
        }

        .sectionIntro {
          max-width: 350px;
          color: rgba(255,255,255,0.4);
          font-size: 13px;
          line-height: 1.7;
        }

        .socialGrid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .socialCard {
          text-decoration: none;
          color: #fff;
          display: flex;
          align-items: center;
          gap: 18px;
          padding: 22px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(20px);
          transition: 0.35s;
        }

        .socialCard:hover {
          background: rgba(255,255,255,0.07);
          border-color: rgba(145,110,255,0.45);
        }

        .socialLogo {
          width: 52px;
          height: 52px;
          border-radius: 15px;
          display: grid;
          place-items: center;
        }

        .socialLogo.tiktok {
          background: #000;
        }

        .socialLogo.instagram {
          background: #fff;
        }

        .socialLogo.snapchat {
          background: #fffc00;
        }

        .socialDetails {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .socialDetails span {
          font-size: 8px;
          color: rgba(255,255,255,0.35);
          letter-spacing: 3px;
        }

        .socialDetails strong {
          font-size: 14px;
        }

        .socialArrow {
          margin-left: auto;
          color: rgba(255,255,255,0.35);
        }

        .contact {
          text-align: center;
          padding-bottom: 160px;
        }

        .contact h2 {
          margin-top: 40px;
        }

        .contact p {
          color: rgba(255,255,255,0.4);
          line-height: 1.8;
          font-size: 13px;
          margin: 30px 0;
        }

        .emailButton {
          background: #fff;
          color: #050505;
          padding: 17px 24px;
          border-radius: 100px;
        }

        footer {
          max-width: 1100px;
          margin: auto;
          padding: 35px 28px 50px;
          border-top: 1px solid rgba(255,255,255,0.08);
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .footerBrand {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .footerMark {
          width: 38px;
          height: 38px;
          border: 1px solid rgba(255,255,255,0.2);
          display: grid;
          place-items: center;
          font-size: 13px;
          font-weight: 900;
        }

        .footerBrand div:last-child {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .footerBrand strong {
          font-size: 12px;
        }

        .footerBrand span,
        .footerRight span {
          font-size: 7px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.3);
        }

        .footerRight {
          display: flex;
          gap: 25px;
        }

        @media (max-width: 800px) {

          .navbar {
            padding: 22px 18px;
          }

          nav {
            display: none;
          }

          .hero {
            min-height: 800px;
            padding: 80px 18px;
          }

          .hero h1 {
            letter-spacing: -5px;
          }

          .hero h1 span {
            font-size: 105px;
          }

          .hero h1 strong {
            font-size: 31px;
            letter-spacing: 4px;
          }

          .heroSide {
            display: none;
          }

          .business,
          .about,
          .socials,
          .contact {
            padding: 90px 18px;
          }

          .businessTop {
            display: block;
          }

          .businessTop p {
            margin-top: 25px;
          }

          .businessGrid,
          .contributorsGrid,
          .socialGrid,
          .aboutGrid {
            grid-template-columns: 1fr;
          }

          .aboutGrid {
            gap: 45px;
          }

          .sectionTop {
            display: block;
          }

          .sectionIntro {
            margin-top: 25px;
          }

          .businessCard {
            min-height: 165px;
            padding: 22px;
          }

          .businessIcon {
            width: 58px;
            height: 58px;
          }

          .businessInfo strong {
            font-size: 20px;
          }

          .personCard {
            min-height: 230px;
          }

          footer {
            margin: 0 18px;
            padding-left: 0;
            padding-right: 0;
            flex-direction: column;
            gap: 20px;
          }

          .footerRight {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

        }

      `}</style>

    </main>
  );
}