import { ReactNode, createElement } from "react";

export const formatTextWithBreaks = (text: string): ReactNode[] =>
  text
    .split("\n")
    .map((line, index) => [line, createElement("br", { key: index })])
    .flat()
    .slice(0, -1);
