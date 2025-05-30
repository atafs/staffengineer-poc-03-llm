// src/components/QueryInput.tsx
import { useState } from "react";

interface QueryInputProps {
  onSubmit: (query: string) => void;
  isLoading: boolean;
}

function QueryInput({ onSubmit, isLoading }: QueryInputProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <div className="bg-gray-600 p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-2">Legal Query</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full bg-black p-2 border rounded-md"
          rows={4}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your legal query..."
          disabled={isLoading}
        />
        <button
          type="submit"
          className="inline-block bg-black px-4 py-2 border border-black rounded-md text-white cursor-pointer hover:bg-gray-800 transition-colors"
          disabled={isLoading || !query.trim()}
        >
          {isLoading ? "Processing..." : "Submit Query"}
        </button>
      </form>
    </div>
  );
}

export default QueryInput;
