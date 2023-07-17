
// // Select a ticker, e.g., "AAPL"
// let selectedTicker = ticker;

// // Filter history data for the selected ticker
// const selectedData = data.history.filter(entry => entry.ticker === selectedTicker);

// // Function to update the chart based on the selected ticker
// function updateChart() {
//   selectedTicker = document.getElementById("tickerDropdown").value;
//   const filteredData = data.history.filter(entry => entry.ticker === selectedTicker);

//   const dates = filteredData.map(entry => entry.stats[0].market[0].date);
//   const open = filteredData.map(entry => entry.stats[0].market[0].dailyOpen);
//   const high = filteredData.map(entry => entry.stats[0].market[0].dayHigh);
//   const low = filteredData.map(entry => entry.stats[0].market[0].dayLow);
//   const close = filteredData.map(entry => entry.stats[0].market[0].previousClose);

//   const update = {
//     x: [dates],
//     open: [open],
//     high: [high],
//     low: [low],
//     close: [close],
//   };

//   Plotly.update("chart", update);
// }

// // Create the OHLC trace
// const ohlcTrace = {
//   x: selectedData.map(entry => entry.stats[0].market[0].date),
//   open: selectedData.map(entry => entry.stats[0].market[0].dailyOpen),
//   high: selectedData.map(entry => entry.stats[0].market[0].dayHigh),
//   low: selectedData.map(entry => entry.stats[0].market[0].dayLow),
//   close: selectedData.map(entry => entry.stats[0].market[0].previousClose),
//   type: "ohlc",
// };

// // Define the layout for the chart
// const layout = {
//   title: `OHLC Chart for ${selectedTicker}`,
// };

// // Combine the trace and layout into a data array
// const data = [ohlcTrace];

// // Plot the chart using Plotly
// Plotly.newPlot("chart", data, layout);

// // Populate the ticker dropdown
// const tickerDropdown = document.getElementById("tickerDropdown");
// data.tickers.forEach(ticker => {
//   const option = document.createElement("option");
//   option.value = ticker;
//   option.textContent = ticker;
//   tickerDropdown.appendChild(option);
// });

// // Add event listener to the ticker dropdown
// tickerDropdown.addEventListener("change", updateChart);


// // annother idea
// //Fetch OHLC data for a specific ticker
// function fetchOHLCData(ticker) {
//   const url = `https://example.com/ohlc-data/${ticker}`;
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data.history);
// }

// // Fetch ticker list from a different URL
// function fetchTickerList() {
//   const url = 'https://example.com/ticker-list';
//   return fetch(url)
//     .then(response => response.json())
//     .then(data => data.tickers);
// }

// // Handle ticker selection change
// function handleTickerChange(event) {
//   const selectedTicker = event.target.value;
  
//   // Fetch OHLC data for the selected ticker
//   fetchOHLCData(selectedTicker)
//     .then(ohlcData => {
//       // Generate OHLC chart with the data
//       generateOHLCChart(ohlcData);
//     })
//     .catch(error => {
//       console.error('Error fetching OHLC data:', error);
//     });
// }

// // Fetch ticker list and populate the dropdown menu
// fetchTickerList()
//   .then(tickers => {
//     const dropdown = document.getElementById('ticker-dropdown');
//     tickers.forEach(ticker => {
//       const option = document.createElement('option');
//       option.value = ticker;
//       option.textContent = ticker;
//       dropdown.appendChild(option);
//     });
    
//     // Add event listener for ticker selection change
//     dropdown.addEventListener('change', handleTickerChange);
//   })
//   .catch(error => {
//     console.error('Error fetching ticker list:', error);
//   });

//     //Generating OHLC Chart with Plotly:

// // javascript

// // Generate OHLC chart using Plotly
// function generateOHLCChart(ohlcData) {
//   const dates = ohlcData.map(entry => entry.date);
//   const open = ohlcData.map(entry => entry.dailyOpen);
//   const high = ohlcData.map(entry => entry.dayHigh);
//   const low = ohlcData.map(entry => entry.dayLow);
//   const close = ohlcData.map(entry => entry.previousClose);
  
//   const trace = {
//     x: dates,
//     open: open,
//     high: high,
//     low: low,
//     close: close,
//     type: 'candlestick',
//     increasing: { line: { color: 'green' } },
//     decreasing: { line: { color: 'red' } },
//     xaxis: 'x',
//     yaxis: 'y',
//   };
  
//   const layout = {
//     title: 'OHLC Chart',
//     xaxis: { title: 'Date' },
//     yaxis: { title: 'Price' },
//   };
  
//   const data = [trace];
  
//   Plotly.newPlot('ohlc-chart', data, layout);
// }