import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCurrencies } from '../actions/GetData';
import { selectCurrency, updateCurrencyValue } from '../actions/Currency';

import { validateCurrencyInput } from '../helpers';

class BaseCurrencyInput extends Component{
    constructor(props) {
        super(props);

        this.handleCurrencyValueChange = this.handleCurrencyValueChange.bind(this);
    }

    render(){
        
        return(
            <div className="BaseCurrencyInput">
                <div className="group">      
                    <input
                        type='text'
                        maxLength='4'
                        value={this.props.currencyValue}
                        onChange={this.handleCurrencyValueChange}
                        placeholder='0'/>
                    <div className="currency">{this.props.selectedCurrency[0]}</div>
                    
                </div>
                
            </div>
        )
    }

    handleCurrencyValueChange(e) {
        this.props.updateCurrencyValue(validateCurrencyInput(e.target.value));
    }

}

function mapStateToProps(store) {
    return {
        rates: store.ratesData.rates,
        selectedCurrency: store.currency.selectedCurrency,
        currencyValue: store.currency.currencyValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (currency) => {
            dispatch(selectCurrency(currency));
            dispatch(fetchCurrencies(currency));
        },
        updateCurrencyValue: (value) => {
            dispatch(updateCurrencyValue(value));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseCurrencyInput);


/* old version
    <div className="BaseCurrencyInput">
                <div className="group">      
                    <input type="text" placeholder='0'/>
                    <div className="currency">USD</div>
                    <span className="bar"></span>
                    
                    </div>
                
                    </div>
*/

/* coverflow version
import usd from '../images/united-states.png';
import eur from '../images/european-union.png';
import jpy from '../images/japan.png';
import cny from '../images/china.png';
import cad from '../images/canada.png';
import aud from '../images/australia.png';
import nzd from '../images/new-zealand.png';
import zar from '../images/south-africa.png';
import hkd from '../images/hong-kong.png';
import gbp from '../images/united-kingdom.png';
import chf from '../images/switzerland.png';
import sgd from '../images/singapore.png';
import ntd from '../images/taiwan.png';
<div className='slide-contain'>
            
                <Coverflow 
                width={600} 
                height={300}
                displayQuantityOfSide={2}
                navigation
                infiniteScroll
                enableHeading
                 media={{
                    '@media (max-width: 900px)': {
                    width: '600px',
                    height: '300px'
                    },
                    '@media (min-width: 900px)': {
                    width: '960px',
                    height: '600px'
                    }
                }} 
                >
                    <img src={usd} alt='United States Dollar' />
                    <img src={eur} alt='Euro' />
                    <img src={jpy} alt='Japan Yen' />
                    <img src={cny} alt='China Yuan' />
                    <img src={aud} alt='Australia Dollar' />
                    <img src={sgd} alt='Singapore Dollar' />
                    <img src={cad} alt='Canada Dollar' />
                    <img src={gbp} alt='Great British Pound' />
                    <img src={ntd} alt='Taiwan Dollar' />
                    <img src={nzd} alt='New Zealand Dollar' />
                    <img src={chf} alt='Switzerland Franc' />
                    <img src={zar} alt='South Africa Rand' />
                    <img src={hkd} alt='Hong Kong Dollar' />
                </Coverflow>
            
            </div>
*/


/* 3d-carousel
getInitialState() {
    return {
        images: images.slice(0, 13),
        width: 400,
        layout: 'prism',
        duration: 400
    };
}

render(){
    return(
        <Carousel
        width={this.state.width}
        images={this.state.images}
        ease={this.state.ease}
        duration={this.state.duration}
        layout={this.state.layout}/>
    )
}
*/