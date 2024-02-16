import { useContext } from 'react';
import { ChainSelectorContext } from '../contexts/ChainSelectorContext';

const useChainSelector = () => {
  const context = useContext(ChainSelectorContext);
  if (!context) {
    throw new Error('useChainSelector must be used within a ChainSelectorProvider');
  }
  return context;
};

export default useChainSelector;
