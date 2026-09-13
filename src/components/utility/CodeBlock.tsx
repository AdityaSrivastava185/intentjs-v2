"use client";

import React from "react";

import { CodeBlock } from "@/components/ui/code-block";

export function CodeBlockDemo() {
  const code = `npm i -g @intentjs/cli
intent new my-project`;

  return (
    <div className="max-w-3xl mx-auto w-full">
      <CodeBlock language="shell" code={code} />
    </div>
  );
}
