import React from 'react';
import { Button, CircularProgress } from '@material-ui/core';
import { BurnTxProgress } from './constants';

interface BurnButtonBarProps {
  txButton: BurnTxProgress;
  txProgress: boolean;
  burnAmount: string;
  onChangeBurnAmount: (e: React.ChangeEvent<HTMLInputElement>) => void;
  executeBurn: () => void;
  burnTxHash: string | null;
  // Assuming these props are defined elsewhere in your project
  // walletChain: any;
  // prettyEthAddress: (address: string) => string;
  // zeroAddress: string;
}

const BurnButtonBar: React.FC<BurnButtonBarProps> = ({
  txButton,
  txProgress,
  burnAmount,
  onChangeBurnAmount,
  executeBurn,
  burnTxHash,
}) => {
  return (
    <div className="burn-button-bar">
      <div className="input_value_box">
        <p className="input_muted">Enter amount to Burn</p>
        <input
          className="input_value"
          type="text"
          value={burnAmount}
          placeholder="0.00"
          onChange={onChangeBurnAmount}
        />
      </div>
      <Button
        variant="outlined"
        onClick={executeBurn}
        startIcon={
          txProgress ? (
            <CircularProgress size={20} color="inherit" />
          ) : (
            <AppIcon url="/icons/fire.svg" fill={IconFilter.primary} size={1.5} margin={0} />
          )
        }
      >
        <span>{txButton}</span>
      </Button>
      {burnTxHash && (
        <div className="tx_links">
          <AppTooltip title={`Check burn Transaction on chain ${walletChain?.blockExplorers?.default?.name}`}>
            <AppExtLink
              url={`${walletChain?.blockExplorers?.default?.url}/tx/${burnTxHash}`}
              className="header_link"
            >
              Burn Tx: {prettyEthAddress(burnTxHash ?? zeroAddress)}
            </AppExtLink>
          </AppTooltip>
        </div>
      )}
    </div>
  );
};

export default BurnButtonBar;
