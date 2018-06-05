const initialState = {
    selectedCurrency: ['USD', 'TWD'],
    currencyValue: 1
};

export function currency(state = initialState, action) {
    switch (action.type) {
        case 'SELECT_CURRENCY':
            return Object.assign({}, state, { selectedCurrency: [
                ...state.selectedCurrency.slice(0, action.index),
                action.currency,
                ...state.selectedCurrency.slice(action.index + 1)
              ] });
        case 'UPDATE_CURRENCY_VALUE':
            return Object.assign({}, state, { currencyValue: action.value });
        default:
            return state;
    }
};