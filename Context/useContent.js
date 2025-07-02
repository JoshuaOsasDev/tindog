import { useContext } from "react";
import { ContentContext } from "./useContext";

export const useContent = () => {
  const context = useContext(ContentContext);
  if (context === undefined) {
    throw new Error("useContent must be used within a ContextProvider");
  }
  return context;
};
