import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  stocks: any;

  getStockPrices() {
    return [500, 200];
  }

  constructor() {
    this.stocks = ['GOOG', 'YHOO'];
    console.log("Stocks from the stock service ", this.stocks.toString());
  }

}
