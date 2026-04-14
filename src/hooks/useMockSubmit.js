import { useEffect, useState } from "react";

function useMockSubmit() {
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    if (status !== "success") {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setStatus("idle");
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [status]);

  const submit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setStatus("success");
  };

  return { status, submit };
}

export default useMockSubmit;
