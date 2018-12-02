exports.formatString = (str) => {
    return str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : str;
};

exports.roundToTick = (value, tick) => {
    return Math.round(value / tick) * tick;
};