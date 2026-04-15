export default function MovieCard() {
  return (
    <>
      <style>{`
        body {
          margin: 0;
          font-family: 'Segoe UI', sans-serif;
          background: #f8fafc;
        }

        .container {
          padding: 40px 20px;
          max-width: 1200px;
          margin: auto;
        }

        h1 {
          text-align: center;
          font-size: 32px;
          margin-bottom: 10px;
          color: #1e293b;
        }

        .subtitle {
          text-align: center;
          color: #64748b;
          margin-bottom: 40px;
        }

        .movies {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 25px;
        }

        .card {
          background: #ffffff;
          border-radius: 18px;
          padding: 16px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .card:hover {
          transform: translateY(-6px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.08);
        }

        .card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 12px;
          margin-bottom: 12px;
        }

        .card h3 {
          margin: 8px 0;
          font-size: 18px;
          color: #0f172a;
        }

        .meta {
          font-size: 14px;
          color: #475569;
          margin-bottom: 8px;
        }

        .story {
          font-size: 14px;
          color: #334155;
          line-height: 1.5;
        }

        /* Footer */
        .footer {
          margin-top: 60px;
          background: #ffffff;
          border-top: 1px solid #e2e8f0;
          padding: 40px 20px;
        }

        .footer-container {
          max-width: 900px;
          margin: auto;
          text-align: center;
        }

        .footer-name {
          font-size: 22px;
          color: #0f172a;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .footer-text {
          color: #475569;
          margin-bottom: 10px;
        }

        .footer-meta {
          color: #64748b;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .footer-contact p {
          margin: 5px 0;
          color: #334155;
          font-size: 14px;
        }

        .footer-collab {
          margin-top: 12px;
          font-size: 14px;
          color: #2563eb;
          font-weight: 500;
        }

        .footer-copy {
          margin-top: 20px;
          font-size: 13px;
          color: #94a3b8;
        }

        /* Responsive */
        @media (max-width: 480px) {
          h1 {
            font-size: 24px;
          }
        }
      `}</style>

      <div className="container">
        <h1>Mera dil pasand laga Movies 🎬</h1>
        <p className="subtitle">
          These movies are purely based on my personal opinion. If yours is missing, try it and add yours too!
        </p>

        <div className="movies">

          <div className="card">
            <img src="https://i.pinimg.com/1200x/31/b1/ea/31b1ea4c9e3d8302460b69f00e31c74a.jpg" alt="Pushpa 2" />
            <h3>PUSHPA-2</h3>
            <p className="meta">Release: 4 Dec, 2024 | ⭐ 4.5/5</p>
            <p className="story">
              Pushpa rises as the head of the red sandal syndicate while facing revenge from Bhawar Singh.
            </p>
          </div>

          <div className="card">
            <img src="https://variety.com/wp-content/uploads/2022/12/Animal-first-look.jpg?w=1000&h=564&crop=1" alt="Animal" />
            <h3>Animal</h3>
            <p className="meta">Release: 18 Sep, 2023 | ⭐ 4.7/5</p>
            <p className="story">
              A son returns home and goes on a violent path after an attack on his father.
            </p>
          </div>

          <div className="card">
            <img src="https://m.media-amazon.com/images/M/MV5BMzFiNTVkZjYtM2I3Yi00MGNjLWEyYTAtMGViNGExZmMzMGMzXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg" alt="Dhurandhar" />
            <h3>Dhurandhar</h3>
            <p className="meta">Release: 5 Dec, 2025 | ⭐ 4.3/5</p>
            <p className="story">
              An undercover agent infiltrates Karachi and climbs the criminal ranks.
            </p>
          </div>

          <div className="card">
            <img src="https://i.ytimg.com/vi/3CYY8l7Nr0w/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD2WVMAHdkhppuSSWx1vy7avF74fw" alt="Rockstar" />
            <h3>Rockstar</h3>
            <p className="meta">Release: 11 Nov, 2011 | ⭐ 4.6/5</p>
            <p className="story">
              A boy becomes a rockstar through heartbreak and emotional struggles.
            </p>
          </div>

        </div>
      </div>

      {/* Footer */}
   <footer className="footer">
  <style>{`

    .footer {
      margin-top: 80px;
      padding: 60px 20px 30px;
      background: linear-gradient(135deg, #eef2ff, #f8fafc);
      position: relative;
      overflow: hidden;
    }

    /* Glow */
    .footer::before {
      content: "";
      position: absolute;
      width: 350px;
      height: 350px;
      background: radial-gradient(circle, rgba(37,99,235,0.15), transparent);
      top: -80px;
      left: -80px;
    }

    .footer-wrapper {
      max-width: 1100px;
      margin: auto;
      position: relative;
      z-index: 1;
    }

    /* CTA */
    .footer-cta {
      text-align: center;
      margin-bottom: 50px;
    }

    .footer-cta h2 {
      font-size: 28px;
      color: #0f172a;
      margin-bottom: 10px;
    }

    .footer-cta p {
      color: #64748b;
      margin-bottom: 20px;
    }

    .cta-btn {
      padding: 12px 22px;
      border-radius: 10px;
      border: none;
      background: linear-gradient(135deg, #2563eb, #4f46e5);
      color: white;
      font-size: 14px;
      cursor: pointer;
      transition: 0.3s;
    }

    .cta-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 20px rgba(37,99,235,0.3);
    }

    /* Grid */
    .footer-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 25px;
    }

    /* Cards */
    .footer-card {
      backdrop-filter: blur(12px);
      background: rgba(255, 255, 255, 0.75);
      border-radius: 16px;
      padding: 20px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.05);
      transition: 0.3s;
    }

    .footer-card:hover {
      transform: translateY(-5px);
    }

    .footer-card h3 {
      font-size: 20px;
      margin-bottom: 8px;
      color: #0f172a;
    }

    .footer-card h4 {
      margin-bottom: 8px;
      color: #1e293b;
    }

    .footer-card p {
      font-size: 14px;
      color: #475569;
      margin: 4px 0;
    }

    .tagline {
      font-size: 14px;
      color: #64748b;
    }

    /* Bottom */
    .footer-bottom {
      text-align: center;
      margin-top: 40px;
      font-size: 13px;
      color: #94a3b8;
    }

    /* Mobile */
    @media (max-width: 480px) {
      .footer-cta h2 {
        font-size: 22px;
      }
    }

  `}</style>

  <div className="footer-wrapper">

    {/* CTA */}
    <div className="footer-cta">
      <h2>Let’s Build Something Amazing 🚀</h2>
      <p>Open for collaborations, projects, and creative ideas.</p>
      <button className="cta-btn">Contact Me</button>
    </div>

    {/* Content */}
    <div className="footer-grid">

      <div className="footer-card">
        <h3>Koushik</h3>
        <p className="tagline">
          Passionate developer crafting clean, elegant, and meaningful web experiences.
        </p>
      </div>

      <div className="footer-card">
        <h4>Project Info</h4>
        <p>🎬 Movie Collection UI</p>
        <p>📅 15 April 2026</p>
      </div>

      <div className="footer-card">
        <h4>Contact</h4>
        <p>📞 8121203379</p>
        <p>📧 rajanikumarkunapa123@gmail.com</p>
      </div>

    </div>

    {/* Bottom */}
    <div className="footer-bottom">
      <p>© 2026 Koushik — Designed with ❤️</p>
    </div>

  </div>
</footer>
    </>
  );
}