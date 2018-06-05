import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../actions/GetData';

var result;
class QuoteCurrencyOutput extends Component{
    
   
    render(){
        
        if(this.props.rates.length > 0) { 
            //console.log(this.props.rates[0][4])
            if(this.props.selectedCurrency[0] === 'EUR')
                result = (this.props.rates[0].find(e => e.currency === this.props.selectedCurrency[1] ).rate * (this.props.currencyValue !== '' ? this.props.currencyValue : 1)).toFixed(3);
            else if(this.props.selectedCurrency[1] === 'EUR')
                result = (1/this.props.rates[0].find(e => e.currency === this.props.selectedCurrency[0] ).rate * (this.props.currencyValue !== '' ? this.props.currencyValue : 1)).toFixed(3);
            else{
                let base = (this.props.rates[0].find(e => e.currency === this.props.selectedCurrency[0] )).rate;
                let quote = (this.props.rates[0].find(e => e.currency === this.props.selectedCurrency[1] )).rate;
                result = (quote / base * (this.props.currencyValue !== '' ? this.props.currencyValue : 1)).toFixed(3);
            }
        }
        return(
            <div className="QuoteCurrencyOutput">
                <div className="group">      
                    <div className="result">{result}</div>
                    <div className="currency">{this.props.selectedCurrency[1]}</div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        rates: state.ratesData.rates,
        selectedCurrency: state.currency.selectedCurrency,
        currencyValue: state.currency.currencyValue,
    };
}

function mapDispatchToProps(dispatch) {
    
    return {
        fetchData: (baseCurrency) => {
            dispatch(fetchCurrencies(baseCurrency));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteCurrencyOutput);




/* old version
     <div className="QuoteCurrencyOutput">
                <div className="group">      
                    <div className="result">0</div>
                    <div className="currency">NTD</div>
                     <span className="bar"></span> 
                    
                    </div>
                
                    </div>
*/