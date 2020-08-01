const geocode = require('./geocode');
const forecast = require('./forecast');
const fs = require('fs');
let address = '';
for(let i=2; i<process.argv.length; i++)
    address += process.argv[i] + " "; 

address = address.replace(/ /g, '%20');

if(address == '')
    console.log("Location not provided !");
else
    geocode(address, (error, data)=>{
        if(error)
            return console.log('Error',error);

        console.log("Data about", data.location);

        console.log(forecast(data, (error, weather)=>{
            if(error)
                return console.log('Error',error);
            
            let jsonString = JSON.stringify(weather);
            // Send this to client
            
            fs.writeFileSync('data.json', jsonString);
        }));
    });

    
