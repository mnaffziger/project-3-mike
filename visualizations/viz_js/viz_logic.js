//Copied structure from previous assignment, found here https://github.com/m-janssens-boop/belly_button_challenge.git
//placeholder code that will be changed later to fit actual project needs



  function buildMetadata(ticker, metadata_id) {

    // Access the website and use d3 to operate on the data
    // read in url
    const url = "./stock_data_2023-07-11.json";
  
    //fetch the JSON data and console log it
    d3.json(url).then((data) => {
      // console.log(data);
  
      // Select the panel with ticker of `#stock-one-metadata`
      let panel = d3.select(metadata_id);
  
      // Clear existing metadata - use `.html("")`
      panel.html("");
      
      // grab the data associated with the selected ticker
      let results = data.filter((tickerRow) => {
        return ticker == tickerRow.ticker
      })
      let result = results[0]
      // Append new tags for each key-value in the metadata
      for (key in result){
        panel.append("h6").text(`${key.toUpperCase()}: ${result[key]}`)
      };
    });
  };

 //THIS PART IS ALMOST DONE  : NEED TO ADD IN MICHAELS CHARTS    
function buildChart(ticker, gauge_id) {
  // Access the website and use .then to operate on the data
      // read in url
  const url = "./stock_data_2023-07-11.json"; 

  //fetch the JSON data and console log it
  d3.json(url).then((data) => {
    
    // Filter the data for the object with the desired ticker
    // grab the data associated with the selected ticker
    let results = data.filter((tickerRow) => {
      return ticker == tickerRow.ticker
    })
    let info = results[0]
    // Pull the  52 week low/high and the latest close
    let low = info["52WeekLow"];
    let high = info["52WeekHigh"];
    let close = info["previousClose"]
    
    //Build gauge chart for 52 week metrics
    //semi-circle gauge chart
   let plotData = [
    {
      domain: {x: [0,1], y: [0,1]},
      value: close,
      title: {text: `<b>Previous Close in Relation to 52 Week Low/High</b> <br> </br> <b> ${ticker}</b>`,
              font: {size: 15}
              },
      type: "indicator",
      mode: "gauge+number+delta",
      delta: { reference: low },
      number: {prefix: "$"},
      gauge: {
        axis: { range: [low, high] },
      steps: [
        { range: [low, close], color: "orange" },
        { range: [close, high], color: "purple" }
      ],
    }
    }
   ];

   let layout = {
    width: 500, 
    height: 500, 
    margin: { t: 10, b: 30 },
    annotations: [
      {
        x: -0.05,
        y: 0.2,
        text: `<b>52 Week Low: $${low}</b>`,
        showarrow: false,
        font: {size: 13}
      },
      {
        x: 1.1,
        y: 0.2,
        text: `<b>52 Week High: $${high}</b>`,
        showarrow: false,
        font: {size: 13}
      }
    ]
  };

    let GAUGE = document.getElementById(gauge_id);
    Plotly.newPlot(GAUGE, plotData, layout);


   });
  
};


  function init() {
    function buildStock(select_id, metadata_id, gauge_id) {
      // Get the reference to the dropdown menu
      let selector = d3.select(select_id)
    
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
          };
    
        // Use the first sample from the list to build the initial plots
        let firstTicker = tickers[0][0]
        buildChart(firstTicker, gauge_id)
        buildMetadata(firstTicker, metadata_id)
      })
      ;
    }
    buildStock("#selStockOne", "#stock-one-metadata", "gauge-1")
    buildStock("#selStockTwo", "#stock-two-metadata", "gauge-2")
  }

  function optionChanged(ticker, metadata_id, gauge_id) {
    // Change your data and update your plots/metadata when newTicker is selected from the dropdown
    buildChart(ticker, gauge_id);
    buildMetadata(ticker, metadata_id);
  
  };

  // Initialize the dashboards
    init();


