exports.formatString = (str) => {
    return str ? str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : str;
};