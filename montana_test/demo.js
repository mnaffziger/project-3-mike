const url = "https://znjanxz3h6.execute-api.us-west-2.amazonaws.com/default";
d3.json(url).then((data) => {
     // Do this by pulling the array associated with `names` 
     let tickers = data.body;
    
     let tickerLs = []
     // Loop through the names and append to the dropdown menu
     for (let i = 0; i < tickers.length; i++){
        let ticker = data.body[i][0];
        tickerLs.push(ticker)
     };
     console.log(tickerLs)
})

//This is how you call the ticker from the dated stock data. Elaborate for calling other parts of the data.
data[i]["ticker"]

