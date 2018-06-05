import React, { Component } from 'react';
import { AreaChart } from 'react-easy-chart'; 
import { connect } from 'react-redux';
import { fetchCurrencies } from '../actions/GetData';

var finalData=[];

function EasyformatDate(daysAgo){
    var start = new Date();
    start.setDate(start.getDate()-(19-daysAgo)*5);
    
    var monthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
      ];
    let date =  start.getDate();
    let month = monthNames[start.getMonth()];
    let year = start.getFullYear().toString().slice(-2);

    return date + '-' + month + '-' + year;
}

function formatData(date, rates,selectedCurrency){
    for(let i=1;i<18;++i){
        //console.log(date);
        var obj={
            x: EasyformatDate(i),
            y: (rates[i].find(e => e.currency === selectedCurrency[1]).rate / rates[i].find(e => e.currency === selectedCurrency[0]).rate).toFixed(3)
        }
        finalData.push(obj);
    }
    obj={
        x: EasyformatDate(19),
        y: (rates[0].find(e => e.currency === selectedCurrency[1]).rate / rates[0].find(e => e.currency === selectedCurrency[0]).rate).toFixed(3)
    }
    finalData.push(obj);
}

class Chart extends Component{
    componentDidMount(){
        for(let i=1;i<18;++i){
            this.props.fetchData(this.props.selectedCurrency, 5*i);
        }
        
    }

    render(){
        if(this.props.date.length>17){
            formatData(this.props.date, this.props.rates, this.props.selectedCurrency);
            console.log(finalData)
            return(
                <div className="chart">
                    <AreaChart
                        xType={ 'time' }
                        axes
                        grid
                        noAreaGradient
                        interpolate={'cardinal'}
                        width={950}
                        height={450}
                        data={[
                        /* [
                            { x: '1-Jan-15', y: 20 },
                            { x: '1-Feb-15', y: 17 },
                            { x: '1-Mar-15', y: 33 },
                            { x: '1-Apr-15', y: 45 },
                            { x: '1-May-15', y: 15 }
                        ] */
                        finalData.slice((-1) * parseInt(this.props.option) / 5)
                        ]}
                    />
                </div>
            )
        }
        else{
            return null;
        }
        
    }
}

function mapStateToProps(state) {
    //console.log(state)
    return {
        date: state.ratesData.date,
        rates: state.ratesData.rates,
        option: state.chart.option,
        selectedCurrency: state.currency.selectedCurrency,
        currencyValue: state.currency.currencyValue,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchData: (currency, index) => {
            //dispatch(selectCurrency(currency));
            dispatch(fetchCurrencies(currency, index));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart);