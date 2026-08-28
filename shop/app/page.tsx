"use client";

import { useEffect, useState } from "react";

/* =========================
   SOCIAL ICONS
========================= */

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="32"
    height="32"
    xmlns="http://www.w3.org/2000/svg"
  >
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

    <circle cx="17.3" cy="6.7" r="1.3" fill="#E1306C" />
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
      name: "21 STOCKS",
      subtitle: "OFFICIAL BUSINESS ACCOUNT",
      platform: "TikTok",
      handle: "@21stocks",
      url: "https://www.tiktok.com/@21stocks",
      icon: <TikTokIcon />,
      className: "businessTikTok",
    },
    {
      name: "21restocks",
      subtitle: "OFFICIAL VINTED SHOP",
      platform: "Vinted",
      handle: "21restocks",
      url: "https://www.vinted.de/member/3178578094-21restocks",
      icon: <VintedIcon />,
      className: "businessVinted",
    },
  ];

  /* =========================
     PERSONAL ACCOUNTS
  ========================= */

  const socials = [
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

          <div className="brandMark">
            21
          </div>

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
          21 STOCKS
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
              21 STOCKS
              <span>↗</span>
            </a>

            <a href="#socials" className="secondaryButton">
              OUR SOCIALS
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

      {/* =========================
          BUSINESS ACCOUNTS
      ========================= */}

      <section id="business" className="business">

        <div className="sectionLabel">
          01 / OFFICIAL BUSINESS
        </div>

        <div className="businessHeading">

          <h2>
            THIS IS
            <br />
            <span>21 STOCKS.</span>
          </h2>

          <p>
            Unser offizieller Business-Account und unser
            offizieller Vinted-Shop – alles an einem Ort.
          </p>

        </div>

        {/* POSTER */}

        <div className="businessPoster">

          <div className="posterNoise" />

          <div className="posterTop">
            <span>21 RESSELLING</span>
            <span>EST. 2026</span>
          </div>

          <div className="posterCenter">

            <div className="posterSmall">
              OFFICIAL BUSINESS ACCOUNT
            </div>

            <h3>
              21
              <span>STOCKS</span>
            </h3>

            <div className="posterLine" />

            <p>
              STREETWEAR
              <span>×</span>
              RESELLING
              <span>×</span>
              VINTED
            </p>

          </div>

          {/* Fake product collage */}

          <div className="product productOne">
            <div className="productShape hoodie">
              HOODIE
            </div>
          </div>

          <div className="product productTwo">
            <div className="productShape sneaker">
              SHOES
            </div>
          </div>

          <div className="product productThree">
            <div className="productShape cap">
              CAP
            </div>
          </div>

          <div className="product productFour">
            <div className="productShape bag">
              BAG
            </div>
          </div>

          <div className="posterBottom">
            <span>@21STOCKS</span>
            <span>21RESTOCKS</span>
          </div>

        </div>

        {/* BUSINESS CARDS */}

        <div className="businessGrid">

          {businessAccounts.map((account, index) => (

            <a
              key={index}
              href={account.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`businessCard ${account.className}`}
            >

              <div className="businessCardTop">

                <span>
                  {account.subtitle}
                </span>

                <span>
                  ↗
                </span>

              </div>

              <div className="businessIcon">
                {account.icon}
              </div>

              <div className="businessCardInfo">

                <span>
                  {account.platform}
                </span>

                <strong>
                  {account.name}
                </strong>

                <p>
                  {account.handle}
                </p>

              </div>

              <div className="businessOpen">
                OPEN ACCOUNT
                <span>↗</span>
              </div>

            </a>

          ))}

        </div>

      </section>

      {/* ABOUT */}

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
              Unser Business läuft über 21 Stocks und unseren
              Vinted-Shop 21restocks.
            </p>

          </div>

        </div>

        {/* MITWIRKENDE */}

        <div className="contributors">

          <div className="contributorsTitle">

            <div className="sectionLabel">
              MITWIRKENDE
            </div>

            <h3>
              THE PEOPLE
              <br />
              <span>BEHIND 21.</span>
            </h3>

          </div>

          <div className="contributorsGrid">

            <a
              href="https://www.tiktok.com/@youyu21bansky"
              target="_blank"
              rel="noopener noreferrer"
              className="personCard"
            >

              <div className="personNumber">
                01
              </div>

              <div className="personAvatar">
                Y
              </div>

              <div className="personInfo">

                <span>
                  CO-FOUNDER
                </span>

                <strong>
                  YOUSSEF
                </strong>

                <small>
                  @youyu21bansky
                </small>

              </div>

              <div className="personArrow">
                ↗
              </div>

            </a>

            <a
              href="https://www.tiktok.com/@adam4go"
              target="_blank"
              rel="noopener noreferrer"
              className="personCard"
            >

              <div className="personNumber">
                02
              </div>

              <div className="personAvatar">
                A
              </div>

              <div className="personInfo">

                <span>
                  CO-FOUNDER
                </span>

                <strong>
                  ADAM
                </strong>

                <small>
                  @adam4go
                </small>

              </div>

              <div className="personArrow">
                ↗
              </div>

            </a>

          </div>

        </div>

      </section>

      {/* SOCIALS */}

      <section id="socials" className="socials">

        <div className="sectionTop">

          <div>

            <div className="sectionLabel">
              03 / SOCIALS
            </div>

            <h2>
              FIND
              <br />
              <span>US ONLINE.</span>
            </h2>

          </div>

          <p className="sectionIntro">
            Folgt uns auf unseren persönlichen Accounts und
            bleibt bei neuen Drops, Content und Updates dabei.
          </p>

        </div>

        <div className="socialGrid">

          {socials.map((social, index) => (

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

      {/* VINTED */}

      <section id="vinted" className="vinted">

        <div className="vintedOrb" />

        <div className="sectionLabel">
          04 / MARKETPLACE
        </div>

        <div className="vintedGrid">

          <div className="vintedMain">

            <div className="vintedLogoBox">
              <VintedIcon />
            </div>

            <h2>
              CHECKT UNSEREN
              <br />
              <span>VINTED ACCOUNT.</span>
            </h2>

            <p>
              Dort findet ihr alle unsere aktuellen Listings
              und krassen Deals.
            </p>

            <a
              href="https://www.vinted.de/member/3178578094-21restocks"
              target="_blank"
              rel="noopener noreferrer"
              className="vintedButton"
            >

              <span className="vintedButtonLogo">
                <VintedIcon />
              </span>

              OPEN VINTED

              <span>↗</span>

            </a>

          </div>

          <div className="profileCard">

            <div className="profileHeader">
              <span>21</span>
              <span>VINTED</span>
            </div>

            <div className="profileAvatar">
              21
            </div>

            <h3>
              21restocks
            </h3>

            <p>
              RESELLING / STREETWEAR
            </p>

            <div className="profileStats">

              <div>
                <strong>21</strong>
                <span>SHOP</span>
              </div>

              <div>
                <strong>∞</strong>
                <span>DEALS</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>ONLINE</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT */}

      <section id="contact" className="contact">

        <div className="sectionLabel">
          05 / CONTACT
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

      {/* =========================
          CSS
      ========================= */}

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
          font-family:
            Arial,
            Helvetica,
            sans-serif;
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

        /* NAVBAR */

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

        /* HERO */

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
        .vintedButton,
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
        .vintedButton:hover,
        .emailButton:hover {
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

        /* SECTIONS */

        .about,
        .socials,
        .business,
        .vinted,
        .contact {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          padding: 130px 28px;
        }

        /* BUSINESS */

        .businessHeading {
          margin-top: 45px;
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 60px;
        }

        .businessHeading h2 {
          font-size: clamp(60px, 8vw, 105px);
          line-height: 0.85;
          letter-spacing: -6px;
          margin: 0;
        }

        .businessHeading h2 span {
          color: rgba(255,255,255,0.25);
        }

        .businessHeading p {
          max-width: 330px;
          color: rgba(255,255,255,0.4);
          line-height: 1.7;
          font-size: 13px;
        }

        /* POSTER */

        .businessPoster {
          position: relative;
          margin-top: 60px;
          min-height: 480px;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(255,255,255,0.15);
          background:
            radial-gradient(
              circle at 50% 50%,
              rgba(130,95,255,0.3),
              transparent 35%
            ),
            linear-gradient(
              135deg,
              #111217,
              #090a0e 55%,
              #171020
            );
          box-shadow:
            0 40px 100px rgba(0,0,0,0.45);
        }

        .posterNoise {
          position: absolute;
          inset: 0;
          opacity: 0.08;
          background:
            repeating-linear-gradient(
              45deg,
              transparent 0,
              transparent 4px,
              rgba(255,255,255,0.2) 5px
            );
        }

        .posterTop,
        .posterBottom {
          position: absolute;
          left: 30px;
          right: 30px;
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.5);
        }

        .posterTop {
          top: 25px;
        }

        .posterBottom {
          bottom: 25px;
        }

        .posterCenter {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          z-index: 3;
        }

        .posterSmall {
          font-size: 9px;
          letter-spacing: 5px;
          color: rgba(255,255,255,0.5);
          margin-bottom: 20px;
        }

        .posterCenter h3 {
          margin: 0;
          font-size: clamp(70px, 12vw, 145px);
          line-height: 0.7;
          font-weight: 900;
          letter-spacing: -8px;
          text-shadow:
            0 0 50px rgba(139,100,255,0.4);
        }

        .posterCenter h3 span {
          display: block;
          font-size: 0.43em;
          letter-spacing: 14px;
          margin-top: 25px;
          color: rgba(255,255,255,0.8);
        }

        .posterLine {
          width: 150px;
          height: 1px;
          background: rgba(255,255,255,0.25);
          margin: 35px 0 20px;
        }

        .posterCenter p {
          display: flex;
          gap: 15px;
          align-items: center;
          margin: 0;
          font-size: 8px;
          letter-spacing: 4px;
          color: rgba(255,255,255,0.45);
        }

        .posterCenter p span {
          color: #9272ff;
        }

        /* PRODUCTS */

        .product {
          position: absolute;
          z-index: 2;
          opacity: 0.7;
          filter: drop-shadow(0 25px 25px rgba(0,0,0,0.55));
        }

        .productShape {
          display: grid;
          place-items: center;
          font-size: 8px;
          letter-spacing: 2px;
          font-weight: 900;
          color: rgba(255,255,255,0.5);
          border: 1px solid rgba(255,255,255,0.2);
        }

        .productOne {
          left: 7%;
          top: 23%;
          transform: rotate(-14deg);
        }

        .hoodie {
          width: 145px;
          height: 175px;
          border-radius: 28px 28px 18px 18px;
          background:
            linear-gradient(
              145deg,
              #252630,
              #101116
            );
          clip-path: polygon(
            25% 0,
            75% 0,
            100% 25%,
            82% 38%,
            88% 100%,
            12% 100%,
            18% 38%,
            0 25%
          );
        }

        .productTwo {
          right: 8%;
          top: 17%;
          transform: rotate(18deg);
        }

        .sneaker {
          width: 155px;
          height: 75px;
          border-radius: 60% 50% 20% 20%;
          background:
            linear-gradient(
              135deg,
              #282a33,
              #0b0c10
            );
          clip-path: polygon(
            0 55%,
            40% 38%,
            55% 5%,
            72% 20%,
            100% 65%,
            95% 85%,
            5% 85%
          );
        }

        .productThree {
          left: 12%;
          bottom: 13%;
          transform: rotate(9deg);
        }

        .cap {
          width: 125px;
          height: 70px;
          border-radius: 80px 80px 20px 20px;
          background:
            linear-gradient(
              145deg,
              #2b2935,
              #111116
            );
        }

        .productFour {
          right: 12%;
          bottom: 12%;
          transform: rotate(-12deg);
        }

        .bag {
          width: 110px;
          height: 135px;
          border-radius: 12px;
          background:
            linear-gradient(
              145deg,
              #242630,
              #0b0c10
            );
        }

        /* BUSINESS CARDS */

        .businessGrid {
          margin-top: 18px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .businessCard {
          position: relative;
          min-height: 290px;
          padding: 25px;
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.11);
          background: rgba(255,255,255,0.035);
          color: #fff;
          text-decoration: none;
          overflow: hidden;
          transition: 0.35s;
        }

        .businessCard:hover {
          transform: translateY(-8px);
          border-color: rgba(255,255,255,0.3);
        }

        .businessTikTok:hover {
          box-shadow: 0 30px 80px rgba(37,244,238,0.08);
        }

        .businessVinted:hover {
          box-shadow: 0 30px 80px rgba(127,92,255,0.1);
        }

        .businessCardTop {
          display: flex;
          justify-content: space-between;
          color: rgba(255,255,255,0.3);
          font-size: 7px;
          letter-spacing: 3px;
        }

        .businessIcon {
          width: 62px;
          height: 62px;
          border-radius: 18px;
          display: grid;
          place-items: center;
          margin-top: 35px;
        }

        .businessTikTok .businessIcon {
          background: #000;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15),
            0 0 35px rgba(37,244,238,0.1);
        }

        .businessVinted .businessIcon {
          background: #fff;
          color: #111;
        }

        .businessCardInfo {
          display: flex;
          flex-direction: column;
          margin-top: 25px;
        }

        .businessCardInfo span {
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.35);
        }

        .businessCardInfo strong {
          font-size: 25px;
          margin-top: 6px;
        }

        .businessCardInfo p {
          margin: 6px 0 0;
          color: rgba(255,255,255,0.4);
          font-size: 12px;
        }

        .businessOpen {
          position: absolute;
          right: 25px;
          bottom: 25px;
          font-size: 8px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.4);
          display: flex;
          gap: 10px;
        }

        /* ABOUT */

        .aboutGrid {
          margin-top: 55px;
          display: grid;
          grid-template-columns: 1fr 0.7fr;
          gap: 100px;
        }

        .about h2,
        .socials h2,
        .vinted h2,
        .contact h2 {
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.86;
          letter-spacing: -6px;
          margin: 0;
        }

        .about h2 span,
        .socials h2 span,
        .vinted h2 span,
        .contact h2 span {
          color: rgba(255,255,255,0.28);
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

        /* CONTRIBUTORS */

        .contributors {
          margin-top: 110px;
          padding-top: 50px;
          border-top: 1px solid rgba(255,255,255,0.08);
        }

        .contributorsTitle h3 {
          margin: 25px 0 0;
          font-size: clamp(45px, 6vw, 75px);
          line-height: 0.85;
          letter-spacing: -4px;
        }

        .contributorsTitle h3 span {
          color: rgba(255,255,255,0.25);
        }

        .contributorsGrid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
        }

        .personCard {
          position: relative;
          display: flex;
          align-items: center;
          gap: 18px;
          min-height: 150px;
          padding: 20px;
          color: #fff;
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          background: rgba(255,255,255,0.025);
          transition: 0.3s;
        }

        .personCard:hover {
          transform: translateY(-5px);
          background: rgba(255,255,255,0.06);
        }

        .personNumber {
          position: absolute;
          right: 20px;
          top: 17px;
          color: rgba(255,255,255,0.2);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .personAvatar {
          width: 65px;
          height: 65px;
          flex-shrink: 0;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle at 30% 30%,
              #9578ff,
              #252034
            );
          font-size: 22px;
          font-weight: 900;
        }

        .personInfo {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .personInfo span {
          font-size: 7px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.35);
        }

        .personInfo strong {
          font-size: 19px;
        }

        .personInfo small {
          font-size: 10px;
          color: rgba(255,255,255,0.4);
        }

        .personArrow {
          margin-left: auto;
          color: rgba(255,255,255,0.3);
        }

        /* SOCIALS */

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
          transform: translateY(-6px);
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

        /* VINTED */

        .vinted {
          max-width: 1100px;
          padding: 80px 55px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          background:
            radial-gradient(
              circle at 70% 20%,
              rgba(130,90,255,0.17),
              transparent 35%
            ),
            rgba(255,255,255,0.025);
          overflow: hidden;
        }

        .vintedGrid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 80px;
          align-items: center;
        }

        .vintedLogoBox {
          width: 55px;
          height: 55px;
          border-radius: 16px;
          background: #fff;
          color: #111;
          display: grid;
          place-items: center;
          margin-bottom: 30px;
        }

        .vintedMain h2 {
          font-size: clamp(45px, 6vw, 75px);
        }

        .vintedMain p {
          max-width: 480px;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          font-size: 14px;
          margin: 25px 0;
        }

        .vintedButton {
          background: #fff;
          color: #080808;
          padding: 17px 22px;
          border-radius: 100px;
        }

        .vintedButtonLogo {
          display: flex;
          align-items: center;
        }

        .vintedButtonLogo svg {
          width: 20px;
          height: 20px;
        }

        .profileCard {
          min-height: 330px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 25px;
          padding: 22px;
          text-align: center;
          background: linear-gradient(
            145deg,
            #191b22,
            #0b0c10
          );
          transform: rotate(3deg);
          box-shadow: 0 30px 80px rgba(0,0,0,0.4);
        }

        .profileHeader {
          display: flex;
          justify-content: space-between;
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.4);
        }

        .profileAvatar {
          width: 85px;
          height: 85px;
          border-radius: 50%;
          margin: 35px auto 18px;
          display: grid;
          place-items: center;
          background:
            radial-gradient(
              circle at 30% 30%,
              #9473ff,
              #282039
            );
          font-size: 27px;
          font-weight: 900;
        }

        .profileCard h3 {
          margin: 0;
          font-size: 21px;
        }

        .profileCard > p {
          font-size: 8px;
          letter-spacing: 2px;
          color: rgba(255,255,255,0.35);
        }

        .profileStats {
          display: flex;
          justify-content: space-around;
          margin-top: 35px;
        }

        .profileStats div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .profileStats strong {
          font-size: 16px;
        }

        .profileStats span {
          font-size: 7px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 2px;
        }

        /* CONTACT */

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

        /* FOOTER */

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

        /* MOBILE */

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

          .about,
          .socials,
          .business,
          .vinted,
          .contact {
            padding: 90px 18px;
          }

          .businessHeading {
            display: block;
          }

          .businessHeading p {
            margin-top: 25px;
          }

          .businessPoster {
            min-height: 430px;
          }

          .posterCenter h3 {
            font-size: 85px;
          }

          .posterCenter p {
            gap: 7px;
            letter-spacing: 2px;
          }

          .productOne {
            left: -35px;
          }

          .productTwo {
            right: -35px;
          }

          .productThree {
            left: -20px;
          }

          .productFour {
            right: -20px;
          }

          .businessGrid {
            grid-template-columns: 1fr;
          }

          .aboutGrid,
          .vintedGrid {
            grid-template-columns: 1fr;
            gap: 45px;
          }

          .contributorsGrid {
            grid-template-columns: 1fr;
          }

          .sectionTop {
            display: block;
          }

          .sectionIntro {
            margin-top: 25px;
          }

          .socialGrid {
            grid-template-columns: 1fr;
          }

          .vinted {
            margin: 20px 18px;
            padding: 45px 25px;
          }

          .profileCard {
            max-width: 300px;
            margin: auto;
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