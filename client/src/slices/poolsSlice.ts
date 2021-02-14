import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { utils } from 'ethers';
import { ERC20PresetMinterPauser } from '../contracts/external';
import { updateBalances, ValidToken } from './walletSlice';
import { TokenChopStable, TokenChopSpec } from '../contracts';

export type ChopStatus = 'Complete' | 'Pending' | 'NotStarted';
export type PoolType = 'spec' | 'stable';

export interface PoolsState {
  chop: {
    status: ChopStatus,
    type?: PoolType
  }
}

export const initialState: PoolsState = {
    chop: { status: 'NotStarted' }
};

interface PoolsDetails {
  name: string;
  symbol: string;
  decimals: number;
  totalSupply: string;
}

interface PoolsBalanceOf {
  name: string;
  balanceOf: string;
}

interface PoolsChop {
  name: string;
  status: ChopStatus;
  type?: ChopType;
}

export const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    updateDetails: (state, action: PayloadAction<PoolsDetails>) => {
      const { name } = action.payload;
    },
    updateBalanceOf: (state, action: PayloadAction<PoolsBalanceOf>) => {
      const { name, balanceOf } = action.payload;
    },
    updateChop: (state, action: PayloadAction<PoolsChop>) => {
      const { name, status, type } = action.payload;
      if (!name) return;
      return { ...state };
    }    
  }
});
const { updateChop, updateDetails, updateBalanceOf } = tokenSlice.actions;

export const getPoolsDetailsAsync = (contract: ERC20PresetMinterPauser): AppThunk => async dispatch => {
  const [name, symbol, decimals, totalSupply] = await Promise.all([
    await contract.name(),
    await contract.symbol(),
    await contract.decimals(),
    await contract.totalSupply()
  ]);
  dispatch(updateDetails({
    name,
    symbol,
    decimals,
    totalSupply: totalSupply.toString()
  }));
};

export const getBalanceOfAsync = (contract: ERC20PresetMinterPauser, account: string, tokenName: ValidToken): AppThunk => async dispatch => {
  const balanceOf = await contract.balanceOf(account);
  dispatch(updateBalanceOf({ name: tokenName, balanceOf: balanceOf.toString()}));
};

export const getBalanceOfsAsync = (tokenNames: string[], contracts: ERC20PresetMinterPauser[], account: string): AppThunk => async dispatch => {
  const balances = await Promise.all(contracts.map(
    async c => await c.balanceOf(account)
  ));
  dispatch(updateBalances({
    WBNB: utils.formatUnits(balances[0], 18),
    ETH: utils.formatUnits(balances[1], 18),
    BTC: utils.formatUnits(balances[2], 18),
    XRP: utils.formatUnits(balances[3], 18),
    DAI: utils.formatUnits(balances[4], 18)
  }));  
};

export const chopAsync = (contract: TokenChopPools, name: ValidToken, amount: string, type: ChopType ): AppThunk => async dispatch => {
  
  
  
  
  
  dispatch(updateChop({ name, status: 'Pending', type }));
  const tokenChopAddress = '0xeFFEa4030f19C9588c7cE864ae5553745717766B';
  const chopAmount = utils.parseEther(amount).toString();
  let result;
  try {
    // const filter = contract.filters.Transfer(account, tokenChopAddress, null);
    // contract.on(filter, (address, account, amount) => {
    //   dispatch(updateChop({name, status: 'Approved', amountInWei: approveAmount}));
    // });
    result = type === 'spec'
       ? await contract.mintLowToken(name, chopAmount)
       : await contract.mintHighToken(name, chopAmount);
  } catch (err) {
    if (err.code === "4001") {
      // user cancelled
      return;
    }
    debugger;
  }
};


export const mintAsync = (contract: ERC20PresetMinterPauser, account: string, tokenName: string): AppThunk => async dispatch => {
  const amount = utils.parseEther('2').toString();
  const result = await contract.mint(account, amount);
  await result.wait();
  const balanceOf = await contract.balanceOf(account);
  dispatch(updateBalanceOf({ name: tokenName, balanceOf: balanceOf.toString()}));
};

export const selectPools = (tokenName: string) => (state: RootState) => {
  return state.factory || {};
}

export default tokenSlice.reducer;