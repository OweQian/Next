"use client";

import { useEffect } from "react";

interface IErrorProps {
  error: boolean;
  reset: () => void;
}
export default function Error({ error, reset }: IErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
