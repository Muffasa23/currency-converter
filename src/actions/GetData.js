import { transformData } from '../helpers';
import fetch from "isomorphic-fetch";

export const fetchCurrenciesRequest = () => {
    return {
        type: 'FETCH_REQUEST'
    };
}

export const fetchCurrenciesSuccess = (payload, index) => {
    return {
        type: 'FETCH_SUCCESS',
        payload,
        index
    };
};

export const fetchCurrenciesError = (error) => {
    return {
        type: 'FETCH_ERROR',
        error
    };
};

export const fetchCurrencies = (baseCurrency, daysAgo) => {
    return (dispatch) => {
        dispatch(fetchCurrenciesRequest());

        return fetchRatesData(baseCurrency, daysAgo)
            .then((todayData, daysAgo) => {
                //console.log(todayData),
                dispatch(fetchCurrenciesSuccess(transformData(todayData,daysAgo)))
                //console.log('why')
            })

            .catch((error) => dispatch(fetchCurrenciesError(error)));
    };
};

/* export const fetchHistoricalCurrencies = (baseCurrency, daysAgo) => {
    return (dispatch) => {
        dispatch(fetchCurrenciesRequest());

        return fetchHistoricalRatesData(baseCurrency, daysAgo)
            .then((historicalData) => {
                dispatch(fetchCurrenciesSuccess(transformData(historicalData)))
            })

            .catch((error) => dispatch(fetchCurrenciesError(error))));
    };
}; */

function formatDate(old){
    let date =("0" + old.getDate()).slice(-2);
    let month = ("0" + (old.getMonth()+1)).slice(-2);
    let year = old.getFullYear();

    return year + '-' + month + '-' + date;
}

function fetchRatesData(baseCurrenc, daysAgo) {
    let date = new Date();
    date.setDate(date.getDate()-daysAgo);
    let correctFormat = formatDate(date);
    const URL = `http://data.fixer.io/api/${correctFormat}?access_key=c2287a2a3cbc19d7d3e3010dd8fa472f`;
    return fetchData(URL);
}



/* function fetchHistoricalRatesData(baseCurrency, daysAgo){
    let date = new Date();
    date.setDate(date.getDate()-daysAgo);
    const URL = 'http://data.fixer.io/api/${formatDate(date)}?access_key=c2287a2a3cbc19d7d3e3010dd8fa472f';
    return fetchData(URL);
} */

function fetchData(URL) {
    return fetch(URL, { method: 'GET' })
        .then(response => response)
        .then(response => response.json());
}



/* 
    .then((todayData) => {
                fetchYesterdayRatesData(baseCurrency, getYesterdayDate(todayData.date))
                    .then((yesterdayData) => ({ todayData, yesterdayData }))
                    .then((fullData) => dispatch(fetchCurrenciesSuccess(transformData(fullData))))
                    .catch((error) => dispatch(fetchCurrenciesError(error)));
            })

    `https://api.fixer.io/latest?base=${baseCurrency}`;
    
    function fetchYesterdayRatesData(baseCurrency, yesterdayDate) {
    const URL = `https://api.fixer.io/${yesterdayDate}?base=${baseCurrency}`;

    return fetchData(URL);
*/