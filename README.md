SIMPLE CLI FOR CURRENT WEATHER

0. DOWNLOAD
git clone https://github.com/Xybaks/weather-cli.git 

1. INSTALL
npm i

2. HOW TO USE:

2.1. add token from openweathermap.org:
node weather.js -t [TOKEN_VALUE]  
(try to use 076da5e9066dbbbd651e11aa8b6127b2)
Note: you need to add token just one time

2.2. add city (or change it if you need): 
node weather.js -s [CITY_NAME] (try Minsk/minsk/London/london)
previos 2 steps can be done in one command:  node weather.js -t [TOKEN_VALUE] -s [CITY_NAME]

3. get current weather:
npm start 
or  
node weather.js