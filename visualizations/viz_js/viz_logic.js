//Copied structure from previous assignment, found here https://github.com/m-janssens-boop/belly_button_challenge.git
//placeholder code that will be changed later to fit actual project needs

function buildStockOne(tickerOne) {

  function buildMetadata(tickerOne) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = "URL GOES HERE";

    //fetch the JSON data and console log it
   d3.json(url).then((data) => {
    console.log(data);

    // Filter the data for the object with the desired ticker
    let metadata = data.metadata;
    //THIS CALL MAY NEED TO CHANGE DEPENDING ON HOW THE DATA IS FORMATTED
    let filteredArray = metadata.filter(tickerOneObj => tickerOneObj.ticker == tickerOne);
    let result = filteredArray[0];
    // Select the panel with ticker of `#stock-one-metadata`
    let panel = d3.select("#stock-one-metadata");
  
    // Clear existing metadata - use `.html("")`
    panel.html("");
  
    // Append new tags for each key-value in the metadata
    for (key in result){
      panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
    };
    });
  };

  function buildChart(tickerOne) {
    // Access the website and use .then to operate on the data
        // read in url
    const url = "URL GOES HERE";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      // Filter the data for the object with the desired ticker
      let tickers = data.tickers;
      let filteredTickersArray = tickers.filter(tickerOneObj => tickerOneObj.symbol == tickerOne);
      let result = filteredTickersArray[0]
      // Pull the desired information (ticker, long name, sector, daily volume, ) from your filtered data
      let ticker = result.symbol;
      let labels = result.otu_ids;
      let values = result.sample_values;
      
      //BUILD LINE CHART WITH DAILY PRICE OVER TIME FOR THE LAST WEEK WITH BAR CHART OF VOLUME IMPOSED BEHIND?
      // Build a Bubble Chart
      let bubbleTrace = {
       x: labels,
       y: values,
       mode: 'markers',
       marker: {
       color: labels,
       size: values
        }
      };
      let bubbleLayout = {
      title: "Prevalence of OTUs",
      xaxis: {
        title: {
          text: "OTU ID"
        }
      }
      };
      let bubbleData = [bubbleTrace]
      Plotly.newPlot('stock-1', bubbleData, bubbleLayout);
  
    });
    
  };


  //INPUT BUILD MAP FUNCTION
  function buildMap() {

  

  }

  //THIS PART IS UPDATED. NEEDS BOTH FUNCTIONS AT END TO BE UNCOMMENTED
  function init() {
    // Get the reference to the dropdown menu
    let selector = d3.select("#selStockOne")
  
    // Use the list of tickers to populate the select options
    const url = "stock_data_2023-07-11.json";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      //CHANGE THIS
    // Do this by pulling the array associated with `names` 
      let dicts = data[0].ticker;
      
      // Loop through the names and append to the dropdown menu
      for (let i = 0; i < dicts.length; i++){
        selector.append("option").text(dicts[i]).property("value",dicts[i]);
      };
  
      // Use the first sample from the list to build the initial plots
      // let firstTicker = tickers[0]
      // buildChart(firstTicker)
      // buildMetadata(firstTicker)
    })
    ;
  }

  function optionChanged(newTicker) {
    // Change your data and update your plots/metadata when newTicker is selected from the dropdown
    buildChart(newTicker);
    buildMetadata(newTicker);
  
  };

  // Initialize the dashboard
    init();

}

function buildStockTwo(tickerTwo) {
  

//COPY buildStockOne WHEN COMPLETE AND UPDATE WITH tickerTwo THROUGHOUT


}






function init() {
  // Get the reference to the dropdown menu
  let selector = d3.select("#selStockOne")

    // Use the list of tickers to populate the select options
    const url = "https://znjanxz3h6.execute-api.us-west-2.amazonaws.com/default";

    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      let tickers = data.body
      // Loop through the names and append to the dropdown menu
      for (let i = 0; i < tickers.length; i++){
        let ticker = tickers[i][0];
        console.log(ticker)
        selector.append("option").text(ticker).property("value",ticker);
        // <option value="AAPL">AAPL</option>
      };
  }
  
  )
}

init();

