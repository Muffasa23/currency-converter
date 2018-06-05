import React, { Component } from 'react';

import BaseCurrencyInput from './components/BaseCurrencyInput';
import ControlPanel from './components/ControlPanel';
import QuoteCurrencyOutput from './components/QuoteCurrencyOutput';
import RadioPanel from './components/RadioPanel';
import Chart from './components/Chart';

export default class App extends Component{
  render() {
    return(
      <div>
        <BaseCurrencyInput />
        <ControlPanel/>
        <QuoteCurrencyOutput/>
        <RadioPanel/>
        <Chart/>
      </div>
    )
  }
} 


  
  

/* 
const currencies = [
  { title: 'United States Dollar', value: 'usd', abbr: 'USD' },
  { title: 'Australia Dollar', value: 'aud', abbr: 'AUD' },
  { title: 'Euro', value: 'eur', abbr: 'EUR' },
  { title: 'Japan Yen', value: 'jpy', abbr: 'JPY' },
  { title: 'Switzerland Franc', value: 'chf', abbr: 'CHF' },
  { title: 'Great Britain Pound', value: 'gbp', abbr: 'GBP' },
  { title: 'Taiwan Dollar', value: 'ntd', abbr: 'NTD' },
  { title: 'Singapore Dollar', value: 'sgd', abbr: 'SGD' },
  { title: 'New Zealand Dollar', value: 'nzd', abbr: 'NZD' },
  { title: 'South Africa Rand', value: 'zar', abbr: 'ZAR' },
  { title: 'Canada Dollar', value: 'cad', abbr: 'CAD' },
  { title: 'China Yuan', value: 'cny', abbr: 'CNY' },
  { title: 'Hong Kong Dollar', value: 'hkd', abbr:'HKD' }
]; */