import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';
import { ethers, Wallet } from 'ethers';

require('dotenv').config()
const app = express();
const port = process.env.PORT || 3001;

app.use(cors())
app.use(express.json()) // to parse request body

interface Coin {
  id: 'string';
  symbol: 'string';
  name: 'string';
}

let COINS: Coin[];

app.post('/transfer', async (req: Request, res: Response) => {
  const { cardDetails, amount, currency, coin, walletAddr } = req.body; 

  if (COINS.filter((c: Coin) => c.id === coin).length === 0) {
    return res.status(404).json({ message: `error: coin not supported: ${coin}`});
  }

  const resp = await axios.get(`https://api.coingecko.com/api/v3/coins/${coin}`);
  const coins = await resp.data;

  const curPrice = coins?.market_data.current_price[currency];
  if (!curPrice) {
    return res.status(404).json({ message: `error: currency not supported: ${currency}`});
  }

  const coinAmt = `${amount / curPrice}`;

  const provider = new ethers.providers.AlchemyProvider('goerli', 'vQzzUz2zwttZpE_hp0eKfb-m9P1pJWke');
  const fromWallet = new Wallet(process.env.WALLET_PRIVATE_KEY, provider); // Your wallet private key
  const etherAmt = ethers.utils.parseEther(coinAmt)
  const transactionResponse = await fromWallet.sendTransaction({to: walletAddr, value: etherAmt})
  const receipt = await transactionResponse.wait(1)
  console.log(receipt)

  // bank activity here (deduct from user bank acc)

  res.status(200).json(transactionResponse);
})

app.get('*', (_req: Request, res: Response) => {
  console.log(process.env.WALLET_PRIVATE_KEY);
  res.status(404).json({ message: 'not found' })
})

const getCurrentData = async () => {
  const res = await axios.get('https://api.coingecko.com/api/v3/coins/list')
  COINS = await res.data
}

app.listen(port, () => {
  console.log(`Api listening on port ${port}`)
  getCurrentData();
})
