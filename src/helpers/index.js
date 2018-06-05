export function validateCurrencyInput(value) {
    const validationExp = /\d+\.?\d*/;
    const matchedValue = value.match(validationExp);

    return value !== '' && matchedValue !== null ? matchedValue[0] : '';
};

export function getYesterdayDate(currentDate) {
    const date = new Date(currentDate);
    date.setDate(date.getDate() - 1);

    const day = date.getDate();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;

    return `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
};

export function transformData(data) {
    
    let todayRates = data.rates;
    //let yesterdayRates = data.yesterdayData.rates;
    let rates = [];
    let options = ['USD','EUR','GBP','CNY','JPY','CHF','AUD','NZD','CAD','ZAR','TWD','SGD','HKD'];

    todayRates = Object.keys(todayRates).map((key, index) => {
        const rate = todayRates[key];

        if(options.includes(key)){
            rates.push({
                currency: key,
                rate
            });
        }
        return rate;
    });

    /* yesterdayRates = Object.keys(yesterdayRates).map((key, index) => {
        const rate = yesterdayRates[key];

        rates[index].yesterdayRate = rate;

        return rate;
    }); */
    return {
        base: data.base,
        date: data.date,
        //yesterdayDate: data.yesterdayData.date,
        rates
    };
};