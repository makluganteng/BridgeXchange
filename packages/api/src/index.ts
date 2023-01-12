import express, { Request, Response } from 'express';
import cors from 'cors';
import axios from 'axios';

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

// POST /transfer
// body {
//   cardDetails: {
//     cardNumber: string;
//     expiryDate: Date;
//     cvv: string;
//   };
//   amount: number;
//   currency: string;
//   coin: string;
//   walletAddr: string;
// }

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

  const coinAmt = amount / curPrice;

  // bank activity here (deduct from user bank acc)

  res.status(200).json({message: `call smart contract to send ${coinAmt} ${coin} to ${walletAddr}`})
})

app.get('*', (_req: Request, res: Response) => {
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
