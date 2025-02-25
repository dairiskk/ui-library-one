export function Spinner({ className = "" }) {
    return (
      <div className={`animate-spin rounded-full h-6 w-6 border-b-2 border-black ${className}`}></div>
    );
  }