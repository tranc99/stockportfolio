import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  stocks: any;

  getStockPrices() {
    return Promise.resolve(this.stocks);
  }

  constructor() {
    this.stocks = [
                    { stock: "GOOG", price: 100 },
                    { stock: "YHOO", price: 50 },
                  ];
    console.log("Stocks from the stock service ", this.stocks.toString());
  }

}
