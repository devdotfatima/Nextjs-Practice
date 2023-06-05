"use client"; // Error components must be Client Components

import { useEffect } from "react";
import { toast } from "react-hot-toast";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    toast.error(error.message);
    console.error(error);
    return;
  }, [error]);

  return <div></div>;
}
