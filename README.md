# React UK Weather

Further learning with React in combination with API requests. This uses open weather map to get weather data for cities in the UK.\
[View Demo](https://moms-spaghetti-reactukweather.netlify.app/)
<br/><br/>

## Details

This uses React useEffect to fetch data from the open weather map server. Data is saved to a state and passed to a component to be rendered. I utilised code I found on stackoverflow to convert wind direction received in the object from the server to heading text combined with an arrow. This improved readability for the user. Code was found here:
https://stackoverflow.com/questions/7490660/converting-wind-direction-in-angles-to-text-words\
The api key required for open weather map was stored in a .env file locally and added to environment variables for the demo above.\
I used icons available from open weather map with the corresponding codes available in the object recieved from the fetch to format a url on the ui.
<br/><br/>

## Built With

- HTML
- CSS
- Javascript
- Create React App
- JSX
- dotenv
  <br/><br/>

## Getting Started

Clone the repo as instructed below and download npm modules.
<br/><br/>

## Prerequisites

Download and install npm modules.
You will need an .env file in the root folder containing an API key from open weather map.
<br/><br/>

## Installation

1. Clone the repo
   ```sh
   git clone https://github.com/moms-spaghetti/react_panel_things.git
   ```
2. Download the required npm modules
   ```sh
   npm i
   ```
3. Create a .env file in the root folder with the prefix REACT_APP_API= then follow with your API from open weather map. You will have to create this on their site with an account.
4. Start the applicataion
   ```sh
   npm start
   ```
   <br/><br/>

## Usage

Enter a uk city and click select city. This will display weather information for that city.
<br/><br/>

## Contact

[Email](mailto:williamedwards36@aol.com)
<br/><br/>
