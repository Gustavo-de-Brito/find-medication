import { createContext, useState } from 'react';
import P from 'prop-types';

export const MedicationContext = createContext();

export const MedicationDetailsContext = ({ children }) => {
  const [medicationData, setMedicationData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const contextValue = {
    medicationData,
    setMedicationData,
    isLoading,
    setIsLoading,
  };

  return (
    <MedicationContext.Provider value={contextValue}>
      {children}
    </MedicationContext.Provider>
  );
};

MedicationDetailsContext.propTypes = {
  children: P.node,
};
