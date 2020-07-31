const request = require('request');


const forecast = (latitude, longitude, callback) =>{
    // let source = "https://api.openweathermap.org/data/2.5/onecall?lat=19.191384&lon=72.862827&exclude={part}&appid=d1b4207b08b14cc80a44430bfe6598d0";    // Hard coded for malad

    let source = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude={part}&appid=d1b4207b08b14cc80a44430bfe6598d0";
    request({url: source, proxy: '', json: true}, (error, response)=>{
        if(error)
            callback("Unable to connect to url !");
        else if(response.body.error)
            callback("Unable to fetch weather details !");
        else{
            let currentInfo = response.body.current;
            callback(undefined, {
                current:{
                    date: currentInfo.dt,
                    temp: currentInfo.temp - 273.15,
                    clouds: currentInfo.clouds,
                    visibility: currentInfo.visibility,
                    humidity: currentInfo.humidity
                }
            });
        }
    });

};

module.exports = forecast;