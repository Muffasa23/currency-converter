import React from 'react';

function CurrencySelect(props) {
    const { selectedCurrency, handleSelectChange, rates } = props;
    let options = rates;
    //console.log(options);
    
    options = options.map((rate, index) => {
        //console.log(rate);
        return <option value={rate.currency}>{rate.currency}</option>;
    });
    

    return (
        <select value={selectedCurrency} onChange={handleSelectChange}>
            {options}
        </select>
    );
}

export default CurrencySelect;
