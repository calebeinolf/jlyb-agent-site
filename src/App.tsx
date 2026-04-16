import { Link, Navigate, Route, Routes } from "react-router-dom";
import type { CSSProperties } from "react";
import AgentPage from "./AgentPage";
import { pageData, validPages } from "./pageData";
import { ExternalLink } from "lucide-react";

function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-panel text-center flex flex-col items-center">
        <p className="home-kicker">Jesus Loves You Ball</p>
        <h1 className="home-title">Welcome</h1>
        <p className="home-subtitle">
          This ball is used around the world to to increase people's
          understanding of (and joy in) God and the game of Soccer. And it
          starts with a simple message:{" "}
          <span className="font-bold">
            <br />
            Jesus Loves You
          </span>
        </p>
        <p className="home-subtitle">So... What brings you here today?</p>
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
