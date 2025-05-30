// src/App.tsx
import { useState } from "react";
import QueryInput from "./components/QueryInput";
import DocumentUpload from "./components/DocumentUpload";
import ResponseDisplay from "./components/ResponseDisplay";

interface LegalResponse {
  queryResponse: string;
  summary: string;
}

function App() {
  const [legalResponse, setLegalResponse] = useState<LegalResponse | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleQuerySubmit = async (query: string) => {
    setIsLoading(true);
    // Simulate AI processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Mock AI response
    const mockResponse: LegalResponse = {
      queryResponse: `Based on your query "${query}", relevant legal precedents include [Mock Case Law]. Key points: [Mock Legal Analysis].`,
      summary: "N/A - No document uploaded",
    };

    setLegalResponse(mockResponse);
    setIsLoading(false);
  };

  const handleDocumentUpload = async (file: File) => {
    setIsLoading(true);
    // Simulate document processing delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Mock document summary
    const mockSummary = `Summary of ${file.name}: This document contains [Mock Legal Content]. Key clauses: [Mock Clause Analysis].`;

    setLegalResponse((prev) => ({
      queryResponse: prev?.queryResponse || "N/A - No query submitted",
      summary: mockSummary,
    }));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Legal Query Assistant
        </h1>
        <div className="max-w-2xl mx-auto space-y-6">
          <QueryInput onSubmit={handleQuerySubmit} isLoading={isLoading} />
          <DocumentUpload
            onUpload={handleDocumentUpload}
            isLoading={isLoading}
          />
          <ResponseDisplay response={legalResponse} />
        </div>
      </div>
    </div>
  );
}

export default App;
