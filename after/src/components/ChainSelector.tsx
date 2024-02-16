import React from 'react';

interface ChainSelectorProps {
  openChainSelector: () => void;
  setOpenChainSelector: () => void;
  chains: any[]; // Adjust type as needed
  selectedChain: any; // Adjust type as needed
  setSelectedChain: () => void;
}

const ChainSelector: React.FC<ChainSelectorProps> = ({
  openChainSelector,
  setOpenChainSelector,
  chains,
  selectedChain,
  setSelectedChain,
}) => {
  return (
    <div className="chain-selector">
      <button onClick={openChainSelector}>Open Chain Selector</button>
      {chains.map((chain) => (
        <div key={chain.id} className="chain-item">
          <span>{chain.name}</span>
          <button onClick={() => setSelectedChain(chain)}>Select</button>
        </div>
      ))}
      <div className="selected-chain">
        Selected Chain: {selectedChain ? selectedChain.name : 'None'}
      </div>
    </div>
  );
};

export default ChainSelector;
