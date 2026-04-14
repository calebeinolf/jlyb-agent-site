function Loader() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3 rounded-md border bg-white">
      <div
        className="h-10 w-10 animate-spin rounded-full border-4 border-black/20 border-t-black"
        aria-label="Loading"
      />
      <p className="text-sm font-medium text-black/70">Loading content...</p>
    </div>
  );
}

export default Loader;
