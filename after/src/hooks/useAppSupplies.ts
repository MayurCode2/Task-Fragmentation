import { useContext } from 'react';
import { AppSuppliesContext } from '../contexts/AppSuppliesContext';

const useAppSupplies = (initialValue: boolean) => {
  const context = useContext(AppSuppliesContext);
  if (!context) {
    throw new Error('useAppSupplies must be used within a AppSuppliesProvider');
  }
  return context;
};

export default useAppSupplies;
