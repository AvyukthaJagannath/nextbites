// app/error.tsx
"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="p-8 text-center space-y-4">
      <h2 className="text-2xl font-bold">Something went wrong!</h2>
      <p>{error.message || "An unexpected error occurred."}</p>
      <button
        onClick={() => reset()}
        className="px-4 py-2 border rounded font-medium"
      >
        Try again
      </button>
    </main>
  );
}