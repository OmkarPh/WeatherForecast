const request = require('request');

function timeToDate(stamp){
    var newDate = new Date();
    newDate.setTime(stamp*1000);
    // console.log(newDate);
    return newDate;
}

const forecast = ({ latitude, longitude, location }, callback) =>{
    // let url = "https://api.openweathermap.org/data/2.5/onecall?lat=19.191384&lon=72.862827&exclude={part}&appid=d1b4207b08b14cc80a44430bfe6598d0";    // Hard coded for malad

    let url = "https://api.openweathermap.org/data/2.5/onecall?lat="+latitude+"&lon="+longitude+"&exclude={part}&appid=d1b4207b08b14cc80a44430bfe6598d0";

    request({url, proxy: '', json: true}, (error, response)=>{
        if(error)
            callback("Unable to connect to url !");
        else if(response.body.error)
            callback("Unable to fetch weather details !");
        else
            callback(undefined, {
                location,
                current: response.body.current,
                hourly: response.body.hourly,
                daily: response.body.daily
            });
    });

};

module.exports = forecast;