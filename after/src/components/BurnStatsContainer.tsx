import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  /* Your styles here */
`;

interface Props {
  statsSupplies: any;
  tokenAddress: string;
  walletChain: any;
  allSupplies: any[];
}

const BurnStatsContainer: React.FC<Props> = ({
  statsSupplies,
  tokenAddress,
  walletChain,
  allSupplies,
}) => {
  return (
    <Container>
      <div className="top_bar">
        <h3>Token Supply Information</h3>
        <p>Token Address: {tokenAddress}</p>
        <p>Wallet Chain: {walletChain?.name}</p>
      </div>
      <div className="supply_bar">
        <h3>Supply Bar</h3>
        <p>Total Supply: {statsSupplies.totalSupply}</p>
        <p>Circulating Supply: {statsSupplies.circulatingSupply}</p>
      </div>
      <div className="supply_label_list">
        <h3>Supply Label List</h3>
        <ul>
          {allSupplies.map((supply) => (
            <li key={supply.id}>
              <p>Chain: {supply.chain}</p>
              <p>Circulating Supply: {supply.circulatingSupply}</p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  );
};

export default BurnStatsContainer;
