 ## Demo
 ![img](https://github.com/muffasa/currency-converter/blob/master/src/demo.gif)

 
 ## Description
The app is built with `react`, `redux`.
The chart is made with `react-easy-chart`.

Availble currencies: USD(USA Dollar), EUR(Euro), GBP(Great Britain Pound), CNY(China Yuan), CHF(Switzerland Franc), JPY(Japan Yen), CAD(Canada Dollar), AUD(Australia Dollar), NZD(New Zealand Dollar), ZAR(South African Rand), TWD(Taiwan Dollar), SGD(Singapore Dollar), HKD(Hong Kong Dollar)

You are able to...
- Change the amount of the base currency (which is the top one).
- Choose different currency pairs.
- Show different currency charts from different time periods (30/60/90 days).

## Data
The app uses API of the European Central Bank, which provides the latest official rates by the European Central Bank:  [fixer.io](https://fixer.io/)

**It updates data hourly, and _I am allowed to make only 1,000 api requests per month_ due to the free subscription plan.**

**The app will make api request once the user presses the reload button or reload the webpage.**

## Usage
```
github clone https://github.com/Muffasa23/currency-converter.git

cd currency-converter

npm install

npm start
```
