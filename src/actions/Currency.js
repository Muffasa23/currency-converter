
export const selectCurrency = (currency,index) => {
    return {
        type: 'SELECT_CURRENCY',
        currency,
        index
    };
};

export const updateCurrencyValue = (value) => {
    return {
        type: 'UPDATE_CURRENCY_VALUE',
        value
    };
};