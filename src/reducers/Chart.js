const initialState = {
    option: '30',
};

export function chart ( state = initialState, action ){
    switch(action.type){
        case 'CHANGE_CHART_OPTION':
            return Object.assign({}, state, {option: action.option});
        default:
            return state;
    }
};