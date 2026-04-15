import { Link, Navigate, Route, Routes } from "react-router-dom";
import type { CSSProperties } from "react";
import AgentPage from "./AgentPage";
import { pageData, validPages } from "./pageData";
import { ExternalLink } from "lucide-react";

function HomePage() {
  return (
    <main className="home-shell">
      <section className="home-panel">
        <p className="home-kicker">Jesus Loves You Ball</p>
        <h1 className="home-title">Choose a Chatbot to fit your need:</h1>
        <p className="home-subtitle">
          Each chatbot is designed with a specific focus, but feel free to
          explore and see which one resonates with you the most! You can always
          switch between them to find the perfect fit for your questions and
          curiosities.
        </p>
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
