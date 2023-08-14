"use client";

import { useState } from "react";

export function Views() {
  const [view, setView] = useState(0);
  return (
    <div className="flex flex-col justify-center gap-6 items-center mb-6">
      <p>Views: {view}</p>
      <button type="button" onClick={() => setView(view + 1)}>
        Increment
      </button>
    </div>
  );
}
