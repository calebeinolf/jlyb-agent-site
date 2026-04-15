import { ArrowLeft, ChevronDown, ExternalLink } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useParams } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "./components/popover";
import Loader from "./Loader";
import { pageData, validPages, type PageId } from "./pageData";

function AgentPage() {
  const { pageId } = useParams<{ pageId: string }>();
  const location = useLocation();
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const state = location.state as {
    title?: string;
    iframeUrl?: string;
    color?: string;
  } | null;

  if (!pageId || !validPages.includes(pageId as (typeof validPages)[number])) {
    return <Navigate to="/" replace />;
  }

  const typedPageId = pageId as PageId;
  const title = state?.title ?? pageData[typedPageId].title;
  const iframeUrl = state?.iframeUrl ?? pageData[typedPageId].iframeUrl;
  const color = state?.color ?? pageData[typedPageId].color;

  useEffect(() => {
    setIsIframeLoaded(false);
  }, [iframeUrl]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [typedPageId]);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleWindowBlur = () => {
      // Clicking into a cross-origin iframe blurs the window; treat it as an outside click.
      window.setTimeout(() => {
        if (document.activeElement instanceof HTMLIFrameElement) {
          setIsMenuOpen(false);
        }
      }, 0);
    };

    window.addEventListener("blur", handleWindowBlur);

    return () => {
      window.removeEventListener("blur", handleWindowBlur);
    };
  }, [isMenuOpen]);

  return (
    <main
      className="agent-shell"
      style={{ "--page-color": color } as CSSProperties}
    >
      <header className="agent-header">
        <Link to="/" className="back-button" aria-label="Back to home">
          <ArrowLeft className="h-5 w-5" />
        </Link>
        <Popover open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <PopoverTrigger asChild>
            <button
              type="button"
              className="agent-title-trigger"
              aria-label="Switch chatbot page"
            >
              <div className="agent-title-wrap">
                <h1 className="agent-title">{title}</h1>
                <ChevronDown
                  className={`agent-title-chevron ${isMenuOpen ? "is-open" : ""}`}
                />
              </div>
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="center"
            sideOffset={10}
            className="agent-switcher-popover"
            style={{ "--page-color": color } as CSSProperties}
          >
            <p className="agent-switcher-kicker">Switch Chatbot</p>
            <div className="agent-switcher-list">
              {validPages.map((page) => {
                const isActive = page === typedPageId;

                return (
                  <Link
                    key={page}
                    to={`/${page}`}
                    state={{
                      title: pageData[page].title,
                      iframeUrl: pageData[page].iframeUrl,
                      color: pageData[page].color,
                    }}
                    className={`agent-switcher-link ${isActive ? "is-active" : ""}`}
                    style={
                      {
                        "--option-color": pageData[page].color,
                      } as CSSProperties
                    }
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="agent-switcher-link-title">
                      {pageData[page].title}
                    </span>
                    <span className="agent-switcher-link-description">
                      {pageData[page].description}
                    </span>
                  </Link>
                );
              })}
            </div>
          </PopoverContent>
        </Popover>
        <Link
          to={iframeUrl}
          target="_blank"
          className="link-button"
          aria-label="Open in new tab"
        >
          <ExternalLink className="h-5 w-5" />
        </Link>
      </header>
      <div className="agent-frame-shell">
        {/* <div className="absolute inset-0">
          <Loader />
        </div> */}
        {!isIframeLoaded && (
          <div className="absolute inset-0">
            <Loader />
          </div>
        )}
        <iframe
          src={iframeUrl}
          title={`Page ${title} content`}
          className={`agent-frame ${isIframeLoaded ? "opacity-100" : "opacity-0"}`}
          allowFullScreen
          onLoad={() => setIsIframeLoaded(true)}
        />
      </div>
    </main>
  );
}

export default AgentPage;
