"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socials = [
    {
      type: "TikTok",
      username: "@youyu21bansky",
      url: "https://www.tiktok.com/@youyu21bansky",
      logo: "/tiktok.png",
    },
    {
      type: "TikTok",
      username: "@adam4go",
      url: "https://www.tiktok.com/@adam4go",
      logo: "𝕿",
    },
    {
      type: "Instagram",
      username: "@youssef.ddf",
      url: "https://www.instagram.com/youssef.ddf/",
      logo: "◎",
    },
    {
      type: "Instagram",
      username: "@adam_marox77",
      url: "https://www.instagram.com/adam_marox77/",
      logo: "◎",
    },
    {
      type: "Snapchat",
      username: "21cent",
      url: "https://snapchat.com/t/5fd6xHYP",
      logo: "👻",
    },
    {
      type: "Snapchat",
      username: "Adamgango",
      url: "https://snapchat.com/t/vAWV7kT1",
      logo: "👻",
    },
  ];

  return (
    <main className="site">
      {/* Animated background */}
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="ambient ambientThree" />

      <div className="noise" />

      {/* NAVBAR */}
      <header className="navbar">
        <a href="#" className="brand">
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
          <a href="#about">ABOUT US</a>
          <a href="#socials">SOCIALS</a>
          <a href="#vinted">VINTED</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="#socials" className="navButton">
          CONNECT
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
            <a href="#socials" className="primaryButton">
              OUR SOCIALS
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
            <div className="sideNumber">21</div>

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

      {/* ABOUT */}
      <section id="about" className="about">
        <div className="sectionLabel">01 / ABOUT US</div>

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
              Keine komplizierte Plattform. Einfach unsere
              Socials checken und auf Vinted vorbeischauen.
            </p>
          </div>
        </div>
      </section>

      {/* SOCIALS */}
      <section id="socials" className="socials">
        <div className="sectionTop">
          <div>
            <div className="sectionLabel">02 / SOCIALS</div>

            <h2>
              FIND
              <br />
              <span>US ONLINE.</span>
            </h2>
          </div>

          <p className="sectionIntro">
            Folgt uns auf unseren Plattformen und bleibt bei
            neuen Drops, Listings und Updates immer dabei.
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
              <div className="socialLogo">
                <img
  src={social.logo}
  alt={social.type}
  width="32"
  height="32"
/>
              </div>

              <div className="socialDetails">
                <span>{social.type}</span>
                <strong>{social.username}</strong>
              </div>

              <div className="socialArrow">↗</div>
            </a>
          ))}
        </div>
      </section>

      {/* VINTED */}
      <section id="vinted" className="vinted">
        <div className="vintedOrb" />

        <div className="sectionLabel">03 / MARKETPLACE</div>

        <div className="vintedGrid">
          <div className="vintedMain">
            <div className="vintedLogoBox">
              <span>V</span>
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
              <span className="vintedButtonLogo">V</span>
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

            <h3>21restocks</h3>

            <p>RESSELLING / STREETWEAR</p>

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
        <div className="sectionLabel">04 / CONTACT</div>

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
          href="mailto:21reselling.contact@gmail.com"
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
          <div className="footerMark">21</div>

          <div>
            <strong>21 RESELLING</strong>
            <span>2 MINDS. 1 PLAN.</span>
          </div>
        </div>

        <div className="footerRight">
          <span>© 2026 21 RESELLING</span>
          <span>MADE WITH PASSION.</span>
        </div>
      </footer>

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

        .navbar {
          position: relative;
          z-index: 10;
          max-width: 1250px;
          margin: auto;
          padding: 28px 28px;
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

        .about,
        .socials,
        .vinted,
        .contact {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          padding: 130px 28px;
        }

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
          background: linear-gradient(
            145deg,
            rgba(132,90,255,0.22),
            rgba(255,255,255,0.04)
          );
          font-size: 25px;
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
          font-size: 28px;
          font-weight: 900;
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
          font-size: 17px;
          font-weight: 900;
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

          .about,
          .socials,
          .vinted,
          .contact {
            padding: 90px 18px;
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
      `}
      </style>
    </main>
  );
}