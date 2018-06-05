import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions/GetData';
import { selectCurrency } from '../actions/Currency';
import Select from './CurrencySelect';

class ControlPanel extends Component{
    constructor(props) {
        super(props);

        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    componentDidMount(){
        this.props.fetchData(this.props.selectedCurrency, 0);
    }

    render(){
        //console.log(this.props.rates)
        if(this.props.rates.length > 0){
            return(
                <div className="controlPanel">
                    <div className="select-style">
                        <Select
                            selectedCurrency={this.props.selectedCurrency[0]}
                            //selectedCurrency={currencyPair[0]}
                            handleSelectChange={(e) => this.handleSelectChange( 0,e)}
                            rates={this.props.rates[0]} />
                    </div>
                    <div className="to">to</div>
                    <div className="select-style">
                        <Select
                            selectedCurrency={this.props.selectedCurrency[1]}
                            //selectedCurrency={currencyPair[1]}
                            handleSelectChange={(e) => this.handleSelectChange(1,e)}
                            rates={this.props.rates[0]} />
                    </div>
                    <div className='nav'>
                        <a className="button" onClick={this.handleButtonClick} ><div className="refresh-icon"></div></a>
                    </div>
                </div>
            )
        }
        else{
            return null;
        }
    }

    handleSelectChange( index, e) {
        this.props.selectCurrency(e.target.value, index);
        //currencyPair[index] = e.target.value;
    }

    handleButtonClick(e){
        this.props.fetchData(this.props.selectedCurrency)
    }
}

function mapStateToProps(state) {
    //console.log(state)
    return {
        rates: state.ratesData.rates,
        selectedCurrency: state.currency.selectedCurrency,
        currencyValue: state.currency.currencyValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (currency, index) => {
            //dispatch(selectCurrency(currency));
            dispatch(fetchCurrencies(currency, index));
        },
        selectCurrency: (value, index) => {
            dispatch(selectCurrency(value, index));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ControlPanel);


/* old version
    <div className="controlPanel">
                <div className="select-style">
                    <select>
                        <option value="usd" selected="selected">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="jpy">JPY</option>
                        <option value="cny">CNY</option>
                        <option value="chf">CHF</option>
                        <option value="aud">AUD</option>
                        <option value="cad">CAD</option>
                        <option value="zar">ZAR</option>
                        <option value="nzd">NZD</option>
                        <option value="ntd">NTD</option>
                        <option value="sgd">SGD</option>
                        <option value="hkd">HKD</option>
                    </select>
                </div>
                <div className="to">to</div>
                <div className="select-style">
                    <select>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                        <option value="gbp">GBP</option>
                        <option value="jpy">JPY</option>
                        <option value="cny">CNY</option>
                        <option value="chf">CHF</option>
                        <option value="aud">AUD</option>
                        <option value="cad">CAD</option>
                        <option value="zar">ZAR</option>
                        <option value="nzd">NZD</option>
                        <option value="ntd" selected="selected">NTD</option>
                        <option value="sgd">SGD</option>
                        <option value="hkd">HKD</option>
                    </select>
                </div>
                <div className='nav'>
                    <a href="#" className="button">Go</a>
                </div>
            </div>
*/


/* 
<div className="select animated zoomIn">
                <input type="radio" name="option" />
                <i className="toggle icon icon-arrow-down"></i>
                <i className="toggle icon icon-arrow-up"></i>
                <span className="placeholder">...</span>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">USD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">EUR</span>
                </label>
                <label className="option">
                    <input type="radio" name="option" />
                    <span className="title animated fadeIn">GBP</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">CNY</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">AUD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">CHF</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">JPY</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">NZD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">ZAR</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">NTD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">CAD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">NTD</span>
                </label>
                <label className="option">
                    <input type="radio" name="option"/>
                    <span className="title animated fadeIn">SGD</span>
                </label>
            </div>
            
*/

/* 
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
<div className="panel">
                <Select  style={{marginLeft: '30px'}} onChange={this.handleChange}>
                    
                    <MenuItem value="usd">USD</MenuItem>
                    <MenuItem value="eur">EUR</MenuItem>
                    <MenuItem value="jpy">JPY</MenuItem>
                    <MenuItem value="gbp">GBP</MenuItem>
                    <MenuItem value="aud">AUD</MenuItem>
                    <MenuItem value="cny">CNY</MenuItem>
                    <MenuItem value="cnf">CNF</MenuItem>
                    <MenuItem value="zar">ZAR</MenuItem>
                    <MenuItem value="cad">CAD</MenuItem>
                    <MenuItem value="nzd">NZD</MenuItem>
                    <MenuItem value="ntd">NTD</MenuItem>
                    <MenuItem value="sgd">SGD</MenuItem>
                    <MenuItem value="hkd">HKD</MenuItem>
                </Select>
                
            </div>
 */