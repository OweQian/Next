"use client";

import { useState } from "react";

export default function Page() {
  const [error, setError] = useState<boolean>(false);

  const handleGetError = () => {
    setError(!error);
  };

  return (
    <>{error ? Error() : <button onClick={handleGetError}>Get Error</button>}</>
  );
}
