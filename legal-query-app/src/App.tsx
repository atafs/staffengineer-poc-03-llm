import { useState } from "react";
import QueryInput from "./components/QueryInput";
import DocumentUpload from "./components/DocumentUpload";
import ResponseDisplay from "./components/ResponseDisplay";

interface LegalResponse {
  queryResponse: string;
  summary: string;
}

function App() {
  const [query, setQuery] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [legalResponse, setLegalResponse] = useState<LegalResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!query.trim() || !file) return;
    setIsLoading(true);
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Mock response incorporating both query and document
    const mockQueryResponse = `Based on your query "${query}" and the uploaded document "${file.name}", relevant legal precedents include [Mock Case Law]. Key points: [Mock Legal Analysis].`;
    const mockSummary = `Summary of ${file.name}: This document contains [Mock Legal Content]. Key clauses: [Mock Clause Analysis].`;

    setLegalResponse({
      queryResponse: mockQueryResponse,
      summary: mockSummary,
    });
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Legal Query Assistant
        </h1>
        <div className="max-w-2xl mx-auto space-y-6">
          <QueryInput query={query} setQuery={setQuery} isLoading={isLoading} />
          <DocumentUpload setFile={setFile} isLoading={isLoading} />
          <button
            onClick={handleSubmit}
            disabled={isLoading || !query.trim() || !file}
            className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
          >
            {isLoading ? "Processing..." : "Submit Request"}
          </button>
          <ResponseDisplay response={legalResponse} />
        </div>
      </div>
    </div>
  );
}

export default App;
