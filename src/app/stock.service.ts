import { Injectable } from '@angular/core';

@Injectable()
export class StockService {
  stocks: any;

  getStockPrices = () => {
    //setInterval(() => {this.computePrices(); }, 1000);
    this.computePrices();
    return Promise.resolve(this.stocks);
  }

  incrementPrice = (stock, index) => {
    var price = stock.price;
    price += 5;
    if (price > 120) {
      price = 120;
    }
    this.stocks[index].compute = this.uptrend;
    this.stocks[index].price = price;
  }

  decreasePrice = (stock, index) => {
    var price = stock.price;
    price -= 5;
    if (price < 0) {
      price = 0;
    }
    this.stocks[index].compute = this.downtrend;
    this.stocks[index].price = price;
  }

  computePrices = () => {
    console.log('computing new prices');
    this.stocks.forEach(function(stock, index) {
      if (stock.price >= 120) {
        this.decreasePrice(stock, index);
      }
      if (stock.price <= 0) {
        this.incrementPrice(stock, index)
      }
      
      this.stocks[index].price = stock.compute.call(stock);
    });

  }

  uptrend = function() {
    return this.price + 5;
  }

  downtrend = function() {
    return this.price - 5;
  }

  constructor() {
    this.stocks = [
                    { symbol: "GOOG", price: 150, compute: this.uptrend },
                    { symbol: "YHOO", price: 50, compute: this.uptrend },
                  ];
    console.log("Stocks from the stock service ", this.stocks.toString());

  }

}
