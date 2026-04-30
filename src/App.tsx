import { Link, Navigate, Route, Routes } from "react-router-dom";
import type { CSSProperties } from "react";
import AgentPage from "./AgentPage";
import { pageData, validPages } from "./pageData";
import { ExternalLink } from "lucide-react";

function HomePage() {
  return (
    <main className="home-shell">
      <div className="language-picker-panel">
        <script src="https://elfsightcdn.com/platform.js" async></script>
        <div
          className="elfsight-app-ad503079-3afa-4227-a7dc-3d915810e134"
          data-elfsight-app-lazy
        ></div>
      </div>

      <section className="home-panel text-center flex flex-col items-center">
        <img
          className="home-logo"
          src="/JLYB-Logo-1.png"
          alt="Jesus Loves You Ball"
        />
        <h1 className="home-title">Welcome!</h1>
        <div className="home-subtext">
          <p className="home-subtitle">
            This ball is used around the world to to increase people's
            understanding of (and joy in) God and the game of Soccer. And it
            starts with a simple message:
          </p>
          <p className="home-subtitle-large">Jesus Loves You.</p>
          <p className="home-subtitle">What brings you here today?</p>
        </div>
        <div className="home-grid">
          {validPages.map((page) => (
            <Link
              key={page}
              to={`/${page}`}
              state={{
                title: pageData[page].title,
                iframeUrl: pageData[page].iframeUrl,
                color: pageData[page].color,
              }}
              className="page-link"
              style={{ "--page-color": pageData[page].color } as CSSProperties}
            >
              <span className="page-link-title">{pageData[page].title}</span>
              <span className="page-link-slug">
                {pageData[page].description}
              </span>
            </Link>
          ))}
        </div>
      </section>
      <section>
        <a
          href="https://jesuslovesyouball.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="home-footer"
        >
          Jesus Loves You Ball
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </section>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:pageId" element={<AgentPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
