import { combineReducers } from 'redux';

import { ratesData } from './GetData';
import { currency } from './Currency';
import { chart } from './Chart'

export default combineReducers({
    ratesData: ratesData,
    currency: currency,
    chart: chart
});
