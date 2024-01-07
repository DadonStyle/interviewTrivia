import { useEffect } from "react";

const useTimeout = (seconds: number, cb: any) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      cb();
    }, seconds * 1000);
    return () => clearTimeout(timer);
  }, [cb, seconds]);
};

export default useTimeout;
