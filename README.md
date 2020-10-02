# Weather Forecast

## This Prototype uses following third party APIs:

  - Weather Data -> https://openweathermap.org/api/one-call-api
    Fetch weather data depending on your geo-coordinates
  - Geolocation -> https://www.mapbox.com
    Fetch geo-coordinates based on your query address
    
### Basic workflow
  - Clientside JS queries Node server API with one or two word string as search query 
  - Node server queries address string and obtains latitude & longitude from [Mapbox API](https://www.mapbox.com).
  - Node server queries obtained latitude & longitude and obtains weather details from [OpenWeather API](https://openweathermap.org/api/one-call-api).
  - Weather and location data are sent to clientside JS in JSON format which is formatted in user-friendly way.

### Requirements

  - Node installed on yourlocal machine
  - All necessary npm packages installed post cloning
    ```sh
    npm install
    ```

## Todos

 - Present weather data in a more user-friendly and reactive way.
 - Incorporate graphs for forecast data.


**Intelligence is the ability to avoid doing work, yet getting the work done.** -Somebody better than me.
