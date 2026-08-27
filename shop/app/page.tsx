"use client";

import { useEffect, useState } from "react";

const socials = [
  {
    platform: "TikTok",
    name: "@youyu21bansky",
    url: "https://www.tiktok.com/@youyu21bansky",
    icon: "♪",
  },
  {
    platform: "TikTok",
    name: "@adam4go",
    url: "https://www.tiktok.com/@adam4go",
    icon: "♪",
  },
  {
    platform: "Instagram",
    name: "@youssef.ddf",
    url: "https://www.instagram.com/youssef.ddf/",
    icon: "◎",
  },
  {
    platform: "Instagram",
    name: "@adam_marox77",
    url: "https://www.instagram.com/adam_marox77/",
    icon: "◎",
  },
  {
    platform: "Snapchat",
    name: "21cent",
    url: "https://snapchat.com/t/5fd6xHYP",
    icon: "👻",
  },
  {
    platform: "Snapchat",
    name: "Adamgango",
    url: "https://snapchat.com/t/vAWV7kT1",
    icon: "👻",
  },
];

export default function Home() {
  const [mouseX, setMouseX] = useState(50);
  const [mouseY, setMouseY] = useState(50);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setMouseX((e.clientX / window.innerWidth) * 100);
      setMouseY((e.clientY / window.innerHeight) * 100);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <main
      className="page"
      style={
        {
          "--mouse-x": `${mouseX}%`,
          "--mouse-y": `${mouseY}%`,
        } as React.CSSProperties
      }
    >
      <div className="backgroundGlow glowOne" />
      <div className="backgroundGlow glowTwo" />
      <div className="backgroundGlow glowThree" />

      <nav className="navbar">
        <div className="logo">
          <span>21</span> RESELLING
        </div>

        <a href="#socials" className="navButton">
          SOCIALS
        </a>
      </nav>

      <section className="hero">
        <div className="heroImage">
          <img src="/team.jpg" alt="21 Reselling Team" />

          <div className="imageOverlay" />

          <div className="heroBadge">
            <span className="dot" />
            ONLINE
          </div>
        </div>

        <div className="heroText">
          <p className="smallTitle">WELCOME TO</p>

          <h1>
            21
            <span>RESELLING</span>
          </h1>

          <p className="description">
            Streetwear. Reselling. Community.
            <br />
            Alles an einem Ort.
          </p>
        </div>
      </section>

      <section id="socials" className="socialSection">
        <div className="sectionHeader">
          <p>CONNECT WITH US</p>
          <h2>Unsere Socials</h2>
        </div>

        <div className="socialGrid">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="socialCard"
            >
              <div className="socialIcon">{social.icon}</div>

              <div className="socialInfo">
                <span>{social.platform}</span>
                <strong>{social.name}</strong>
              </div>

              <div className="arrow">↗</div>
            </a>
          ))}
        </div>
      </section>

      <section className="vintedSection">
        <div className="vintedContent">
          <p className="smallTitle">OUR MARKETPLACE</p>

          <h2>
            Checkt unseren
            <br />
            <span>Vinted Account.</span>
          </h2>

          <p className="vintedText">
            Dort findet ihr alle unsere aktuellen Listings und
            krassen Deals.
          </p>

          <a
            href="https://www.vinted.de/member/3178578094-21restocks"
            target="_blank"
            rel="noopener noreferrer"
            className="vintedButton"
          >
            <span>🛍️</span>
            <span>VINTED ACCOUNT</span>
            <b>↗</b>
          </a>
        </div>

        <div className="vintedCard">
          <div className="vintedTop">
            <span>21</span>
            <span>VINTED</span>
          </div>

          <div className="vintedCircle">
            21
          </div>

          <h3>21restocks</h3>
          <p>Unsere aktuellen Listings</p>

          <div className="fakeListings">
            <div />
            <div />
            <div />
          </div>
        </div>
      </section>

      <footer>
        <div className="footerLogo">
          <span>21</span> RESELLING
        </div>

        <p>Made with Passion.</p>

        <p className="copyright">© 2026 21 Reselling</p>
      </footer>

      <style jsx>{`
        * {
          box-sizing: border-box;
        }

        .page {
          min-height: 100vh;
          overflow: hidden;
          position: relative;
          background:
            radial-gradient(
              circle at var(--mouse-x) var(--mouse-y),
              rgba(103, 70, 255, 0.12),
              transparent 25%
            ),
            linear-gradient(135deg, #08090d, #101118 45%, #08090d);
          color: white;
          font-family: Arial, Helvetica, sans-serif;
        }

        .page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          opacity: 0.08;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E");
          z-index: 0;
        }

        .backgroundGlow {
          position: absolute;
          width: 420px;
          height: 420px;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          pointer-events: none;
          animation: float 12s ease-in-out infinite;
        }

        .glowOne {
          background: #704cff;
          top: 5%;
          left: -180px;
        }

        .glowTwo {
          background: #00d5b5;
          top: 45%;
          right: -180px;
          animation-delay: -4s;
        }

        .glowThree {
          background: #774cff;
          bottom: -180px;
          left: 35%;
          animation-delay: -8s;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }

          50% {
            transform: translateY(-45px) scale(1.08);
          }
        }

        .navbar {
          position: relative;
          z-index: 5;
          max-width: 1150px;
          margin: auto;
          padding: 28px 25px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo,
        .footerLogo {
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo span,
        .footerLogo span {
          font-size: 25px;
        }

        .navButton {
          text-decoration: none;
          color: white;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 12px 18px;
          border-radius: 100px;
          font-size: 11px;
          letter-spacing: 2px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(15px);
          transition: 0.3s;
        }

        .navButton:hover {
          background: white;
          color: black;
          transform: translateY(-2px);
        }

        .hero {
          position: relative;
          z-index: 2;
          max-width: 1150px;
          margin: 40px auto 0;
          padding: 0 25px 90px;
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 55px;
          align-items: center;
        }

        .heroImage {
          position: relative;
          height: 560px;
          border-radius: 28px;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.12);
          box-shadow: 0 30px 100px rgba(0, 0, 0, 0.5);
        }

        .heroImage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          display: block;
        }

        .imageOverlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              to top,
              rgba(5, 6, 10, 0.7),
              transparent 55%
            );
        }

        .heroBadge {
          position: absolute;
          left: 22px;
          bottom: 22px;
          padding: 10px 15px;
          border-radius: 100px;
          background: rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(15px);
          font-size: 10px;
          letter-spacing: 2px;
        }

        .dot {
          display: inline-block;
          width: 7px;
          height: 7px;
          background: #68ff9c;
          border-radius: 50%;
          margin-right: 8px;
          box-shadow: 0 0 12px #68ff9c;
        }

        .smallTitle {
          color: rgba(255, 255, 255, 0.5);
          font-size: 11px;
          letter-spacing: 4px;
          font-weight: bold;
        }

        .heroText h1 {
          margin: 15px 0;
          font-size: clamp(60px, 8vw, 105px);
          line-height: 0.85;
          letter-spacing: -7px;
        }

        .heroText h1 span {
          display: block;
          font-size: 0.42em;
          letter-spacing: 7px;
          margin-top: 18px;
          opacity: 0.9;
        }

        .description {
          color: rgba(255, 255, 255, 0.58);
          line-height: 1.7;
          font-size: 15px;
        }

        .socialSection {
          position: relative;
          z-index: 2;
          max-width: 900px;
          margin: auto;
          padding: 80px 25px;
        }

        .sectionHeader {
          text-align: center;
          margin-bottom: 35px;
        }

        .sectionHeader p {
          font-size: 10px;
          letter-spacing: 4px;
          color: rgba(255, 255, 255, 0.4);
        }

        .sectionHeader h2 {
          font-size: 38px;
          margin: 10px 0;
          letter-spacing: -2px;
        }

        .socialGrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 13px;
        }

        .socialCard {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 19px;
          color: white;
          text-decoration: none;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.045);
          backdrop-filter: blur(20px);
          border-radius: 18px;
          transition: 0.35s ease;
        }

        .socialCard:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.09);
          border-color: rgba(255, 255, 255, 0.22);
        }

        .socialIcon {
          width: 45px;
          height: 45px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: rgba(255, 255, 255, 0.08);
          font-size: 20px;
        }

        .socialInfo {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .socialInfo span {
          font-size: 10px;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.4);
          letter-spacing: 2px;
        }

        .socialInfo strong {
          font-size: 14px;
        }

        .arrow {
          margin-left: auto;
          color: rgba(255, 255, 255, 0.4);
        }

        .vintedSection {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: 40px auto 100px;
          padding: 65px;
          border-radius: 30px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background:
            radial-gradient(
              circle at 80% 30%,
              rgba(92, 66, 255, 0.15),
              transparent 30%
            ),
            rgba(255, 255, 255, 0.035);
          backdrop-filter: blur(25px);
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 50px;
          align-items: center;
        }

        .vintedContent h2 {
          font-size: clamp(40px, 5vw, 62px);
          line-height: 0.95;
          letter-spacing: -4px;
          margin: 18px 0;
        }

        .vintedContent h2 span {
          opacity: 0.5;
        }

        .vintedText {
          color: rgba(255, 255, 255, 0.5);
          max-width: 450px;
          line-height: 1.6;
        }

        .vintedButton {
          margin-top: 28px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          padding: 15px 20px;
          border-radius: 100px;
          background: white;
          color: black;
          text-decoration: none;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 1px;
          transition: 0.3s;
        }

        .vintedButton:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(255, 255, 255, 0.15);
        }

        .vintedButton b {
          font-size: 16px;
        }

        .vintedCard {
          min-height: 360px;
          border-radius: 25px;
          padding: 22px;
          background: linear-gradient(145deg, #1b1d25, #0d0e13);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 70px rgba(0, 0, 0, 0.35);
          text-align: center;
          transform: rotate(2deg);
        }

        .vintedTop {
          display: flex;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.45);
          font-size: 9px;
          letter-spacing: 2px;
        }

        .vintedCircle {
          width: 85px;
          height: 85px;
          margin: 40px auto 18px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          font-size: 30px;
          font-weight: 900;
          background: rgba(255, 255, 255, 0.07);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .vintedCard h3 {
          margin: 0;
          font-size: 21px;
        }

        .vintedCard p {
          margin: 7px 0 25px;
          color: rgba(255, 255, 255, 0.4);
          font-size: 12px;
        }

        .fakeListings {
          display: flex;
          gap: 7px;
        }

        .fakeListings div {
          height: 70px;
          flex: 1;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.07);
        }

        footer {
          position: relative;
          z-index: 2;
          max-width: 1100px;
          margin: auto;
          padding: 30px 25px 45px;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: rgba(255, 255, 255, 0.4);
          font-size: 11px;
        }

        footer p {
          margin: 0;
        }

        @media (max-width: 750px) {
          .navbar {
            padding: 22px 18px;
          }

          .hero {
            grid-template-columns: 1fr;
            margin-top: 20px;
            padding: 0 18px 60px;
            gap: 30px;
          }

          .heroImage {
            height: 420px;
            border-radius: 22px;
          }

          .heroText h1 {
            font-size: 75px;
          }

          .socialSection {
            padding: 55px 18px;
          }

          .socialGrid {
            grid-template-columns: 1fr;
          }

          .vintedSection {
            margin: 20px 18px 70px;
            padding: 35px 25px;
            grid-template-columns: 1fr;
          }

          .vintedCard {
            max-width: 300px;
            width: 100%;
            margin: auto;
          }

          footer {
            margin: 0 18px;
            padding-left: 0;
            padding-right: 0;
            flex-direction: column;
            gap: 15px;
          }
        }
      `}
      </style>
    </main>
  );
}