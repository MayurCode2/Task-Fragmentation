import { useContext } from 'react';
import { CoinDataContext } from '../contexts/CoinDataContext';

const useCoinData = () => {
  const context = useContext(CoinDataContext);
  if (!context) {
    throw new Error('useCoinData must be used within a CoinDataProvider');
  }
  return context;
};

export default useCoinData;
