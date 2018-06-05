const initialState = {
    base: '',
    date: [],
    rates: [],
    error: '',
};

export function ratesData(state = initialState, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return state;
        case 'FETCH_SUCCESS':
            return {...state, base: action.payload.base, 
                 date: [...state.date.slice(0, action.index/5), action.payload.date, ...state.date.slice(action.index/5 + 1)],
                 rates: [...state.rates.slice(0, action.index/5), action.payload.rates, ...state.rates.slice(action.index/5 + 1)],
                 //date: [...state.date, action.payload.date],
                 //rates: [...state.rates, action.payload.rates],
                 error: undefined };    
        //return Object.assign({}, state, { base: action.payload.base, data: action.payload.date, rates: action.payload.rates,error: undefined });
        case 'FETCH_ERROR':
            return Object.assign({}, state, { error: action.error.message });
        default:
            return state;
    }
};