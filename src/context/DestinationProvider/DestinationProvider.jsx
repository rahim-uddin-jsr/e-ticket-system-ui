import { createContext, useState } from "react";

export const DestinationContext = createContext();
const DestinationProvider = ({ children }) => {
  const [isDac, setIsDac] = useState(true);
  const [isJFK, setIsJFK] = useState(false);
  const destinationInfo = {
    isDac,
    setIsDac,
    isJFK,
    setIsJFK,
  };
  return (
    <DestinationContext.Provider value={destinationInfo}>
      {children}
    </DestinationContext.Provider>
  );
};

export default DestinationProvider;
