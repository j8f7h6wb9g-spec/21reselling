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

  const businessSocials = [
    {
      type: "TikTok",
      username: "@21stocks",
      label: "OFFICIAL BUSINESS",
      url: "https://www.tiktok.com/@21stocks",
      icon: <TikTokIcon />,
    },
    {
      type: "Vinted",
      username: "21restocks",
      label: "OFFICIAL SHOP",
      url: "https://www.vinted.de/member/3178578094-21restocks",
      icon: <VintedIcon />,
    },
  ];

  /* =========================
     PERSONAL ACCOUNTS
  ========================= */

  const personalSocials = [
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
          <a href="#vinted">VINTED</a>
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
            transform: `translateY(${scrollY * 0.08}px)`,
          }}
        />

        <div className="heroContent">

          <div className="eyebrow">
            <span className="liveDot" />
            OFFICIAL RESELLING BRAND
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

            <a href="#vinted" className="secondaryButton">
              VINTED
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

      </section>

      {/* BUSINESS */}

      <section id="business" className="business">

        <div className="sectionLabel">
          01 / OFFICIAL ACCOUNTS
        </div>

        <div className="businessTop">

          <div>
            <h2>
              21 STOCKS.
              <br />
              <span>OUR BUSINESS.</span>
            </h2>
          </div>

          <p>
            Das sind unsere offiziellen Business-Accounts.
            Hier findet ihr unsere neuesten Drops, Listings,
            Deals und Updates.
          </p>

        </div>

        <div className="businessGrid">

          {businessSocials.map((social, index) => (

            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`businessCard businessCard${index}`}
              key={index}
            >

              <div className="businessGlow" />

              <div className="businessLogo">
                {social.icon}
              </div>

              <div className="businessInfo">

                <span>
                  {social.label}
                </span>

                <strong>
                  {social.username}
                </strong>

                <small>
                  {social.type === "TikTok"
                    ? "FOLLOW OUR BUSINESS"
                    : "SHOP OUR CURRENT LISTINGS"}
                </small>

              </div>

              <div className="businessArrow">
                ↗
              </div>

            </a>

          ))}

        </div>

      </section>

      {/* VINTED POSTER */}

      <section id="vinted" className="vinted">

        <div className="vintedPosterGlow" />

        <div className="sectionLabel">
          02 / MARKETPLACE
        </div>

        <div className="vintedGrid">

          <div className="vintedMain">

            <div className="posterTag">
              21 RESTOCKS / VINTED
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

              <span>
                JETZT ANSEHEN
              </span>

              <span>→</span>

            </a>

          </div>

          {/* PHONE POSTER */}

          <div className="phoneScene">

            <div className="posterText">
              <span>21</span>
              <strong>RESTOCKS</strong>
            </div>

            <div className="phone">

              <div className="phoneScreen">

                <div className="phoneTop">

                  <strong>
                    21 Reselling
                  </strong>

                  <span>
                    VINTED
                  </span>

                </div>

                <div className="vintedProfile">

                  <div className="vintedAvatar">
                    21
                  </div>

                  <h3>
                    21restocks
                  </h3>

                  <p>
                    Zwei Jungs · Reseller aus Deutschland
                  </p>

                  <div className="profileTags">

                    <span>
                      TOP QUALITÄT
                    </span>

                    <span>
                      FAIRE PREISE
                    </span>

                    <span>
                      SCHNELLER VERSAND
                    </span>

                  </div>

                </div>

                <div className="phoneTabs">

                  <span className="active">
                    Kleiderschrank
                  </span>

                  <span>
                    Bewertungen
                  </span>

                  <span>
                    Über uns
                  </span>

                </div>

                <div className="itemCount">
                  32 Artikel
                </div>

                <div className="productGrid">

                  <div className="productItem">
                    <div className="productVisual hoodie">
                      HOODIE
                    </div>
                    <span>Streetwear</span>
                    <strong>24,99 €</strong>
                  </div>

                  <div className="productItem">
                    <div className="productVisual jacket">
                      JACKET
                    </div>
                    <span>Vintage</span>
                    <strong>39,99 €</strong>
                  </div>

                  <div className="productItem">
                    <div className="productVisual tee">
                      TEE
                    </div>
                    <span>Oversized</span>
                    <strong>19,99 €</strong>
                  </div>

                  <div className="productItem">
                    <div className="productVisual pants">
                      PANTS
                    </div>
                    <span>Streetwear</span>
                    <strong>29,99 €</strong>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}

      <section id="about" className="about">

        <div className="sectionLabel">
          03 / ABOUT US
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
              Wir sind <b>21 Reselling</b> – zwei Jungs mit einer
              gemeinsamen Idee.
            </p>

            <p>
              Wir entdecken Trends, finden starke Pieces und
              bringen sie zu unserer Community.
            </p>

            <p className="muted">
              Hinter dem Business stehen zwei Freunde,
              die gemeinsam an 21 Reselling arbeiten.
            </p>

            <div className="contributors">

              <div className="contributor">
                <div className="contributorNumber">
                  01
                </div>

                <div>
                  <strong>
                    YOUSSEF
                  </strong>

                  <span>
                    CO-FOUNDER / RESELLER
                  </span>
                </div>
              </div>

              <div className="contributor">
                <div className="contributorNumber">
                  02
                </div>

                <div>
                  <strong>
                    ADAM
                  </strong>

                  <span>
                    CO-FOUNDER / RESELLER
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PERSONAL SOCIALS */}

      <section id="socials" className="socials">

        <div className="sectionTop">

          <div>

            <div className="sectionLabel">
              04 / OUR PERSONAL ACCOUNTS
            </div>

            <h2>
              FIND
              <br />
              <span>US ONLINE.</span>
            </h2>

          </div>

          <p className="sectionIntro">
            Hier findet ihr unsere persönlichen Accounts.
            Folgt uns auch dort und begleitet uns neben
            21 Reselling.
          </p>

        </div>

        <div className="socialGrid">

          {personalSocials.map((social, index) => (

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

        /* NAVBAR */

        .navbar {
          position: relative;
          z-index: 10;
          max-width: 1250px;
          margin: auto;
          padding: 24px 28px;
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
          gap: 24px;
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
          min-height: calc(100vh - 90px);
          margin: auto;
          padding: 35px 28px 90px;
          display: flex;
          align-items: center;
        }

        .heroGlow {
          position: absolute;
          width: 500px;
          height: 500px;
          border-radius: 50%;
          right: 5%;
          top: 10%;
          background: #6947ff;
          filter: blur(160px);
          opacity: 0.13;
          pointer-events: none;
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
          margin: 20px 0 0;
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
          margin-top: 38px;
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
          margin-top: 20px;
        }

        .heroActions {
          display: flex;
          gap: 12px;
          margin-top: 28px;
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
          bottom: 110px;
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

        /* GENERAL SECTIONS */

        .about,
        .socials,
        .business,
        .vinted,
        .contact {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          padding: 110px 28px;
        }

        /* BUSINESS */

        .businessTop {
          margin-top: 45px;
          display: flex;
          justify-content: space-between;
          gap: 60px;
          align-items: end;
        }

        .business h2 {
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.86;
          letter-spacing: -6px;
          margin: 0;
        }

        .business h2 span {
          color: rgba(255,255,255,0.28);
        }

        .businessTop > p {
          max-width: 350px;
          color: rgba(255,255,255,0.42);
          font-size: 13px;
          line-height: 1.8;
        }

        .businessGrid {
          margin-top: 50px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
        }

        .businessCard {
          position: relative;
          overflow: hidden;
          min-height: 210px;
          padding: 30px;
          border-radius: 24px;
          border: 1px solid rgba(255,255,255,0.12);
          background: rgba(255,255,255,0.035);
          color: #fff;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 22px;
          transition: 0.4s;
        }

        .businessCard:hover {
          transform: translateY(-7px);
          border-color: rgba(145,110,255,0.5);
          background: rgba(255,255,255,0.06);
        }

        .businessGlow {
          position: absolute;
          width: 180px;
          height: 180px;
          border-radius: 50%;
          right: -70px;
          top: -70px;
          filter: blur(55px);
          opacity: 0.18;
          background: #744cff;
        }

        .businessCard1 .businessGlow {
          background: #00d9ad;
        }

        .businessLogo {
          position: relative;
          z-index: 2;
          width: 70px;
          height: 70px;
          border-radius: 20px;
          display: grid;
          place-items: center;
          background: #000;
          box-shadow: 0 15px 40px rgba(0,0,0,0.3);
        }

        .businessCard1 .businessLogo {
          background: #fff;
          color: #111;
        }

        .businessInfo {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .businessInfo span {
          font-size: 8px;
          letter-spacing: 3px;
          color: rgba(255,255,255,0.35);
        }

        .businessInfo strong {
          font-size: 22px;
        }

        .businessInfo small {
          font-size: 8px;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.35);
        }

        .businessArrow {
          position: relative;
          z-index: 2;
          margin-left: auto;
          color: rgba(255,255,255,0.4);
          font-size: 20px;
        }

        /* VINTED */

        .vinted {
          max-width: 1100px;
          padding: 75px 55px;
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

        .vintedPosterGlow {
          position: absolute;
          width: 400px;
          height: 400px;
          right: 0;
          bottom: -200px;
          border-radius: 50%;
          background: #6d4aff;
          filter: blur(130px);
          opacity: 0.15;
        }

        .vintedGrid {
          margin-top: 45px;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 55px;
          align-items: center;
        }

        .posterTag {
          display: inline-block;
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 100px;
          color: rgba(255,255,255,0.4);
          font-size: 7px;
          letter-spacing: 2px;
          margin-bottom: 25px;
        }

        .vintedMain h2 {
          font-size: clamp(45px, 6vw, 75px);
          line-height: 0.88;
          letter-spacing: -5px;
          margin: 0;
        }

        .vintedMain h2 span {
          color: rgba(255,255,255,0.28);
        }

        .vintedMain p {
          max-width: 420px;
          color: rgba(255,255,255,0.42);
          line-height: 1.7;
          font-size: 14px;
          margin: 25px 0;
        }

        .vintedButton {
          background: #4d8dff;
          color: #fff;
          padding: 17px 22px;
          border-radius: 100px;
          box-shadow: 0 10px 35px rgba(77,141,255,0.25);
        }

        /* PHONE */

        .phoneScene {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .posterText {
          position: absolute;
          right: -20px;
          top: 15px;
          display: flex;
          flex-direction: column;
          text-align: right;
          opacity: 0.15;
          transform: rotate(-5deg);
        }

        .posterText span {
          font-size: 70px;
          font-weight: 900;
          line-height: 0.7;
        }

        .posterText strong {
          font-size: 17px;
          letter-spacing: 8px;
        }

        .phone {
          position: relative;
          width: 285px;
          height: 555px;
          border-radius: 38px;
          padding: 8px;
          background: #111217;
          border: 1px solid rgba(255,255,255,0.22);
          box-shadow:
            0 35px 90px rgba(0,0,0,0.65),
            0 0 60px rgba(100,75,255,0.13);
          transform: rotate(4deg);
          overflow: hidden;
        }

        .phone::before {
          content: "";
          position: absolute;
          width: 95px;
          height: 25px;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          border-radius: 30px;
          background: #050506;
          z-index: 5;
        }

        .phoneScreen {
          height: 100%;
          border-radius: 31px;
          background: #f8f8fa;
          color: #17171a;
          overflow: hidden;
        }

        .phoneTop {
          padding: 45px 17px 10px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .phoneTop strong {
          font-size: 15px;
        }

        .phoneTop span {
          font-size: 7px;
          letter-spacing: 1.5px;
          color: #888;
        }

        .vintedProfile {
          text-align: center;
          padding: 8px 15px 12px;
        }

        .vintedAvatar {
          width: 58px;
          height: 58px;
          border-radius: 50%;
          margin: auto;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg, #714cff, #251d4d);
          color: #fff;
          font-size: 20px;
          font-weight: 900;
        }

        .vintedProfile h3 {
          margin: 8px 0 3px;
          font-size: 17px;
        }

        .vintedProfile p {
          margin: 0;
          font-size: 7px;
          color: #888;
        }

        .profileTags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 4px;
          margin-top: 10px;
        }

        .profileTags span {
          padding: 5px 6px;
          border-radius: 20px;
          background: #ededf0;
          font-size: 5px;
          letter-spacing: 0.5px;
          color: #666;
        }

        .phoneTabs {
          display: flex;
          justify-content: space-around;
          padding: 10px 5px 7px;
          border-bottom: 1px solid #e4e4e6;
          font-size: 6px;
          color: #999;
        }

        .phoneTabs .active {
          color: #111;
          font-weight: 800;
        }

        .itemCount {
          padding: 10px 14px 5px;
          font-size: 8px;
          font-weight: 800;
        }

        .productGrid {
          padding: 5px 10px;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 7px;
        }

        .productItem {
          background: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.06);
        }

        .productVisual {
          height: 105px;
          display: grid;
          place-items: center;
          font-size: 8px;
          font-weight: 900;
          letter-spacing: 1px;
        }

        .hoodie {
          background:
            linear-gradient(
              135deg,
              #222,
              #777
            );
          color: #fff;
        }

        .jacket {
          background:
            linear-gradient(
              135deg,
              #ddd,
              #888
            );
          color: #222;
        }

        .tee {
          background:
            linear-gradient(
              135deg,
              #111,
              #444
            );
          color: #fff;
        }

        .pants {
          background:
            linear-gradient(
              135deg,
              #555,
              #bbb
            );
          color: #fff;
        }

        .productItem > span {
          display: block;
          padding: 5px 7px 1px;
          font-size: 6px;
          color: #999;
        }

        .productItem > strong {
          display: block;
          padding: 2px 7px 7px;
          font-size: 8px;
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
        .contact h2 {
          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.86;
          letter-spacing: -6px;
          margin: 0;
        }

        .about h2 span,
        .socials h2 span,
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

        .contributors {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .contributor {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.025);
          border-radius: 14px;
        }

        .contributorNumber {
          font-size: 8px;
          color: #8d70ff;
          letter-spacing: 2px;
        }

        .contributor div:last-child {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .contributor strong {
          color: #fff;
          font-size: 12px;
        }

        .contributor span {
          font-size: 7px;
          letter-spacing: 1.5px;
          color: rgba(255,255,255,0.3);
        }

        /* PERSONAL SOCIALS */

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
          transition: 0.3s;
        }

        .socialLogo.tiktok {
          background: #000;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.12),
            0 0 25px rgba(37,244,238,0.12);
        }

        .socialLogo.instagram {
          background: #fff;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15),
            0 0 25px rgba(225,48,108,0.12);
        }

        .socialLogo.snapchat {
          background: #fffc00;
          box-shadow:
            0 0 0 1px rgba(255,255,255,0.15),
            0 0 25px rgba(255,252,0,0.15);
        }

        .socialLogo svg {
          display: block;
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
            padding: 20px 18px;
          }

          nav {
            display: none;
          }

          .hero {
            min-height: 720px;
            padding: 40px 18px 80px;
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
            padding: 85px 18px;
          }

          .businessTop {
            display: block;
          }

          .businessTop > p {
            margin-top: 25px;
          }

          .businessGrid {
            grid-template-columns: 1fr;
          }

          .businessCard {
            min-height: 180px;
            padding: 22px;
          }

          .businessInfo strong {
            font-size: 18px;
          }

          .aboutGrid,
          .vintedGrid {
            grid-template-columns: 1fr;
            gap: 45px;
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

          .phoneScene {
            min-height: 570px;
          }

          .phone {
            width: 265px;
          }

          .posterText {
            right: -5px;
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