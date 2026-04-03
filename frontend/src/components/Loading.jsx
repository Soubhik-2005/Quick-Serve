function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div role="status">
        <svg
          aria-hidden="true"
          className="w-10 h-10 text-gray-300 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
        >
          <path
            d="M100 50.5908C100 78.2051..."
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393..."
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}