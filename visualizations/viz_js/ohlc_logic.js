

function buildOhlc(ticker) {
   
    d3.json(ohlcUrl).then((data) => {
        let date = data.dates;

        let marketArray = data.history.stats.market;
    })
}