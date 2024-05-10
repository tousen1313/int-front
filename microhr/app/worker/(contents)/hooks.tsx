"use client";
import { useEffect, useState } from "react";

export const useDebouncedKeyword = ({
  value,
  delay = 1000,
}: {
  value: string;
  delay?: number;
}) => {
  const [debouncedValue, setDebouncedValue] = useState(value ?? "");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
};
