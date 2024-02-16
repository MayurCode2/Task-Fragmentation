import React from 'react';
import styled from 'styled-components';

const TableContainer = styled.div`
  /* Your styles here */
`;

interface Transaction {
  /* Define your transaction interface here */
}

interface Props {
  data: Transaction[];
  priceUSD: number;
}

const TransactionTable: React.FC<Props> = ({ data, priceUSD }) => {
  return (
    <TableContainer>
      <div className="header">
        <p className="header_label">Burn Transactions</p>
      </div>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Time</th>
            <th>Price (USD)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((transaction, index) => (
            <tr key={index}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.time}</td>
              <td>{transaction.amount * priceUSD}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};

export default TransactionTable;
