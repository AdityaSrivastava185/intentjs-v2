"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function FeaturesCodeBlockDemo({
  code,
  language = "tsx",
}: {
  code?: string;
  language?: string;
}) {
  code = code
    ? code
    : `Route::get('/profile', ProfileController::class) ->middleware('auth');`;

  return (
    <div className="w-full">
      <CodeBlock
        language={language}
        // filename="DummyComponent.jsx"
        // highlightLines={[9, 13, 14, 18]}
        code={code}
      />
    </div>
  );
}
