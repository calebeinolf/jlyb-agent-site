import { ArrowLeft } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import Loader from "./Loader";
import { pageData, validPages, type PageId } from "./pageData";

function AgentPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const location = useLocation();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const state = location.state as { title?: string; iframeUrl?: string } | null;

  if (!pageId || !validPages.includes(pageId as (typeof validPages)[number])) {
    return <Navigate to="/" replace />;
  }

  const typedPageId = pageId as PageId;
  const title = state?.title ?? pageData[typedPageId].title;
  const iframeUrl = state?.iframeUrl ?? pageData[typedPageId].iframeUrl;

  useEffect(() => {
    setIsIframeLoaded(false);
  }, [iframeUrl]);

  return (
    <main className="h-screen flex flex-col gap-6 px-6 py-6">
      <header className="relative w-full flex items-center justify-center shrink-0">
        <Link
          to="/"
          className="absolute left-0 rounded-md border px-3 py-2 text-lg font-medium transition hover:bg-black hover:text-white"
        >
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <h1 className="text-center text-4xl font-semibold">{title}</h1>
      </header>
      <div className="relative w-full flex-1">
        {!isIframeLoaded && (
          <div className="absolute inset-0">
            <Loader />
          </div>
        )}
        <iframe
          src={iframeUrl}
          title={`Page ${title} content`}
          className={`h-full w-full rounded-md ${isIframeLoaded ? "opacity-100" : "opacity-0"}`}
          allowFullScreen
          onLoad={() => setIsIframeLoaded(true)}
        />
      </div>
    </main>
  );
}

export default AgentPage;
