import { Link, Navigate, Route, Routes } from "react-router-dom";
import AgentPage from "./AgentPage";
import { pageData, validPages } from "./pageData";

function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-8 px-6">
      <h1 className="text-4xl font-semibold">JLYB Agent Site</h1>
      <div className="flex gap-3">
        {validPages.map((page) => (
          <Link
            key={page}
            to={`/${page}`}
            state={{
              title: pageData[page].title,
              iframeUrl: pageData[page].iframeUrl,
            }}
            className="rounded-md border px-6 py-3 text-lg font-medium transition hover:bg-black hover:text-white"
          >
            {page}
          </Link>
        ))}
      </div>
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
