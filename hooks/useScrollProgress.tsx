"use client";

import React, { useEffect, useState } from "react";

const useScrollProgress = () => {
  const [completion, setCompletion] = useState<number>(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress: number = window.scrollY;
      const scrollHeight: number =
        document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        const progressRatio: number =
          Number(currentProgress) / Number(scrollHeight);
        const completion: number = progressRatio * 100;
        setCompletion(Number(completion.toFixed(2)));
      }
    };

    //event
    window.addEventListener("scroll", updateScrollCompletion);
    //clear event
    return () => window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return completion;
};

export default useScrollProgress;
