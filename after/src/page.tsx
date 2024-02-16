import React, { useEffect } from 'react';
import BurnButtonBar from './components/BurnButtonBar';
import BurnStatsContainer from './components/BurnStatsContainer';
import TransactionTable from './components/TransactionTable';
import ChainSelector from './components/ChainSelector';
import { useWallet, useChainSelector, useAppSupplies, useCoinData, useTransactions } from '../hooks';

const BurnPage = () => {
  const {
    walletAddress,
    isWalletConnected,
    walletBalance,
    isBalanceError,
    openChainModal,
    walletChain,
    chains,
    openConnectModal,
  } = useWallet();
  const { openChainSelector, setOpenChainSelector, openChainSelectorModal } = useChainSelector();
  const { supplies, allSupplies, setSuppliesChain, suppliesChain, fetchSupplies } = useAppSupplies(true);
  const [burnTransactions, setBurnTransactions] = useTransactions([]);
  const coinData = useCoinData();

  useEffect(() => {
    if (!walletChain) return;
    let isSubscribed = true;
    if (isSubscribed) setBurnTransactions([]);
    const isTestnet = isChainTestnet(walletChain?.id);
    let _chainObjects = [mainnet, avalanche, fantom];
    if (isTestnet) _chainObjects = [sepolia, avalancheFuji, fantomTestnet];
    Promise.all(ChainScanner.fetchAllTxPromises(isTestnet))
      .then((results) => {
        if (isSubscribed) {
          let new_chain_results = [];
          results.forEach((results_a, index) => {
            new_chain_results.push(
              results_a.map((tx) => ({
                ...tx,
                chain: _chainObjects[index],
              }))
            );
          });
          let res = new_chain_results.flat();
          res = ChainScanner.sortOnlyBurnTransactions(res);
          res = res.sort((a, b) => b.timeStamp - a.timeStamp);
          setBurnTransactions(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    return () => {
      isSubscribed = false;
    };
  }, [walletChain]);

  const executeBurn = async () => {
    // Execute burn logic
  };

  return (
    <div>
      <BurnButtonBar executeBurn={executeBurn} />
      <BurnStatsContainer statsSupplies={statsSupplies} tokenAddress={tokenAddress} walletChain={walletChain} allSupplies={allSupplies} />
      <TransactionTable burnTransactions={burnTransactions} priceUSD={coinData?.current_price?.usd} />
      <ChainSelector
        title="Switch Token Chain"
        openChainSelector={openChainSelector}
        setOpenChainSelector={setOpenChainSelector}
        chains={receiveChains}
        selectedChain={suppliesChain}
        setSelectedChain={setSuppliesChain}
      />
    </div>
  );
};

export default BurnPage;
