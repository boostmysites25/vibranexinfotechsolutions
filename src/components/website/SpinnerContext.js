import { createContext, useContext, useState } from "react";
import { LoadingSpinner } from "./LoadingSpinner";

export const SpinnerContext = createContext(null);

const SpinnerContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <SpinnerContext.Provider value={{ loading, setLoading }}>
      {children}
    </SpinnerContext.Provider>
  );
};

export default SpinnerContextProvider;

// component to manage loading spinner based on context
export const LoadingSpinnerContext = () => {
  const { loading } = useContext(SpinnerContext);
  return loading && <LoadingSpinner />;
};
