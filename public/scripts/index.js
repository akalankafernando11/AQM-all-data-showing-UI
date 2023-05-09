// DOM elements
const loginElement = document.querySelector('#login-form');
const contentElement = document.querySelector('#content-sign-in');
const userDetailsElement = document.querySelector('#user-details');
const authBarElement = document.querySelector('#authentication-bar');
const deleteButtonElement = document.getElementById('delete-button');
const deleteModalElement = document.getElementById('delete-modal');
const deleteDataFormElement = document.querySelector('#delete-data-form');
const viewDataButtonElement = document.getElementById('view-data-button');
const hideDataButtonElement = document.getElementById('hide-data-button');
//const tableContainerElement = document.querySelector('#table-container');
//const chartsRangeInputElement = document.getElementById('charts-range');
const loadDataButtonElement = document.getElementById('load-data');
const cardsCheckboxElement = document.querySelector('input[name=cards-checkbox]');
const gaugesCheckboxElement = document.querySelector('input[name=gauges-checkbox]');
//const chartsCheckboxElement = document.querySelector('input[name=charts-checkbox]');
const dropdownElement = document.querySelector('#device-select');
const sensordropdownElement = document.querySelector('#sensor-select');
const tableElement = document.querySelector('#tbody');

// DOM elements for sensor readings
const cardsReadingsElement = document.querySelector('#cards-div');
const gaugesReadingsElement = document.querySelector('#gauges-div');
//const chartsDivElement = document.querySelector('#charts-div');
const tempElement = document.getElementById('temp');
const humElement = document.getElementById('hum');
const co2Element = document.getElementById('co2');
const coElement = document.getElementById('co');
const updateElement = document.getElementById('lastUpdate');
const timeupdateElement = document.getElementById('currenttimeUpdate');
const time2updateElement = document.getElementById('7dateagoUpdate');
const nameupdateElement = document.getElementById('nameUpdate');
const nowtimeupdateElement = document.getElementById('nowcurrenttimeUpdate');
// convert epochtime to JavaScripte Date object
function epochToJsDate(epochTime) {
  return new Date(epochTime * 1000);
}
function epochToJsDate1(epochTime) {
  return new Date(epochTime);
}
// convert time to human-readable format YYYY/MM/DD HH:MM:SS
function epochToDateTime(epochTime) {
  var epochDate = new Date(epochToJsDate1(epochTime));
  var dateTime =
      epochDate.getFullYear() +
      '/' +
      ('00' + (epochDate.getMonth() + 1)).slice(-2) +
      '/' +
      ('00' + epochDate.getDate()).slice(-2) +
      ' ' +
      ('00' + epochDate.getHours()).slice(-2) +
      ':' +
      ('00' + epochDate.getMinutes()).slice(-2) +
      ':' +
      ('00' + epochDate.getSeconds()).slice(-2);

  return dateTime;
}

function epochToDateTime1(epochTime) {
    var epochDate = new Date(epochToJsDate(epochTime));
    var dateTime =
        epochDate.getFullYear() +
        '/' +
        ('00' + (epochDate.getMonth() + 1)).slice(-2) +
        '/' +
        ('00' + epochDate.getDate()).slice(-2) +
        ' ' +
        ('00' + epochDate.getHours()).slice(-2) +
        ':' +
        ('00' + epochDate.getMinutes()).slice(-2) +
        ':' +
        ('00' + epochDate.getSeconds()).slice(-2);
  
    return dateTime;
  }

/*function groupDataByweek(data) {
  const currentDate = new Date();
  const weekAgoTimestamp = currentDate.getTime() - (7 * 24 * 60 * 60 * 1000);
  timeupdateElement.innerHTML = currentDate.toDateString();//epochToDateTime(currentDate);
  time2updateElement.innerHTML = new Date(weekAgoTimestamp).toDateString();//epochToDateTime(weekAgoTimestamp);
  const dataByDay = Array.from({ length: 7 }, () => ({
      co: 0,
      co2: 0,
      humidity: 0,
      id: '',
      temperature: 0,
      timestamp: 0,
      count: 0,
  }));

  data.forEach(item => {
      const timestamp = parseInt(item.timestamp) * 1000;
      const dayIndex = Math.floor((timestamp - weekAgoTimestamp) / (24 * 60 * 60 * 1000));
      nowtimeupdateElement.innerHTML = dayIndex;//epochToDateTime(currentDate);
      if (dayIndex >= 0 && dayIndex < 7) {
          const dayData = dataByDay[dayIndex];
          dayData.co += parseFloat(item.co);
          dayData.co2 += parseFloat(item.co2);
          dayData.humidity += parseFloat(item.humidity);
          dayData.temperature += parseFloat(item.temperature);
          dayData.count++;
          dayData.id = item.id;
          dayData.timestamp = timestamp;
      }
  });

  const averageDataByDay = dataByDay.map(dayData => ({
      co: dayData.count > 0 ? (dayData.co / dayData.count).toFixed(2) : '0.00',
      co2: dayData.count > 0 ? (dayData.co2 / dayData.count).toFixed(2) : '0.00',
      humidity: dayData.count > 0 ? (dayData.humidity / dayData.count).toFixed(2) : '0.00',
      id: dayData.id,
      temperature: dayData.count > 0 ? (dayData.temperature / dayData.count).toFixed(2) : '0.00',
      timestamp: dayData.timestamp,
  }));

  return averageDataByDay;
}*/


/*function groupDataByDay(data) {
    const currentDate = new Date();
    const weekAgoTimestamp = currentDate.getTime() - (24 * 60 * 60 * 1000);
    timeupdateElement.innerHTML = currentDate.toDateString();//epochToDateTime(currentDate);
    time2updateElement.innerHTML = new Date(weekAgoTimestamp).toDateString();//epochToDateTime(weekAgoTimestamp);
    const dataByDay = Array.from({ length: 24 }, () => ({
        co: 0,
        co2: 0,
        humidity: 0,
        id: '',
        temperature: 0,
        timestamp: 0,
        count: 0,
    }));
  
    data.forEach(item => {
        const timestamp = parseInt(item.timestamp) * 1000;
        const dayIndex = Math.floor((timestamp - weekAgoTimestamp) / (60 * 60 * 1000));
        nowtimeupdateElement.innerHTML = dayIndex;//epochToDateTime(currentDate);
        if (dayIndex >= 0 && dayIndex < 24) {
            const dayData = dataByDay[dayIndex];
            dayData.co += parseFloat(item.co);
            dayData.co2 += parseFloat(item.co2);
            dayData.humidity += parseFloat(item.humidity);
            dayData.temperature += parseFloat(item.temperature);
            dayData.count++;
            dayData.id = item.id;
            dayData.timestamp = timestamp;
        }
    });
  
    const averageDataByDay = dataByDay.map(dayData => ({
        co: dayData.count > 0 ? (dayData.co / dayData.count).toFixed(2) : '0.00',
        co2: dayData.count > 0 ? (dayData.co2 / dayData.count).toFixed(2) : '0.00',
        humidity: dayData.count > 0 ? (dayData.humidity / dayData.count).toFixed(2) : '0.00',
        id: dayData.id,
        temperature: dayData.count > 0 ? (dayData.temperature / dayData.count).toFixed(2) : '0.00',
        timestamp: dayData.timestamp,
    }));
  
    return averageDataByDay;
  }*/

  /*function groupDataBy6hours(data) {
    const currentDate = new Date();
    const weekAgoTimestamp = currentDate.getTime() - (6 * 60 * 60 * 1000);
    timeupdateElement.innerHTML = currentDate.toDateString();//epochToDateTime(currentDate);
    time2updateElement.innerHTML = new Date(weekAgoTimestamp).toDateString();//epochToDateTime(weekAgoTimestamp);
    const dataByDay = Array.from({ length: 24 }, () => ({
        co: 0,
        co2: 0,
        humidity: 0,
        id: '',
        temperature: 0,
        timestamp: 0,
        count: 0,
    }));
  
    data.forEach(item => {
        const timestamp = parseInt(item.timestamp) * 1000;
        const dayIndex = Math.floor(((timestamp - weekAgoTimestamp) / (60 * 60 * 1000))*4);
        nowtimeupdateElement.innerHTML = dayIndex;//epochToDateTime(currentDate);
        if (dayIndex >= 0 && dayIndex < 24) {
            const dayData = dataByDay[dayIndex];
            dayData.co += parseFloat(item.co);
            dayData.co2 += parseFloat(item.co2);
            dayData.humidity += parseFloat(item.humidity);
            dayData.temperature += parseFloat(item.temperature);
            dayData.count++;
            dayData.id = item.id;
            dayData.timestamp = timestamp;
        }
    });
  
    const averageDataByDay = dataByDay.map(dayData => ({
        co: dayData.count > 0 ? (dayData.co / dayData.count).toFixed(2) : '0.00',
        co2: dayData.count > 0 ? (dayData.co2 / dayData.count).toFixed(2) : '0.00',
        humidity: dayData.count > 0 ? (dayData.humidity / dayData.count).toFixed(2) : '0.00',
        id: dayData.id,
        temperature: dayData.count > 0 ? (dayData.temperature / dayData.count).toFixed(2) : '0.00',
        timestamp: dayData.timestamp,
    }));
  
    return averageDataByDay;
  }*/

 /* function groupDataByDay(data) {
    const currentDate = new Date();
    const weekAgoTimestamp = currentDate.getTime() - (7*24 * 60 * 60 * 1000);
    timeupdateElement.innerHTML = currentDate.toDateString();//epochToDateTime(currentDate);
    time2updateElement.innerHTML = new Date(weekAgoTimestamp).toDateString();//epochToDateTime(weekAgoTimestamp);
    const dataByDay = Array.from({ length: 7 }, () => ({
        co: 0,
        co2: 0,
        humidity: 0,
        id: '',
        temperature: 0,
        timestamp: 0,
        count: 0,
    }));
  
    data.forEach(item => {
        const timestamp = parseInt(item.timestamp) * 1000;
        const dayIndex = Math.floor(((timestamp - weekAgoTimestamp) / (24 * 60 * 60 * 1000)));
        nowtimeupdateElement.innerHTML = dayIndex;//epochToDateTime(currentDate);
        if (dayIndex >= 0 && dayIndex < 7) {
            const dayData = dataByDay[dayIndex];
            dayData.co += parseFloat(item.co);
            dayData.co2 += parseFloat(item.co2);
            dayData.humidity += parseFloat(item.humidity);
            dayData.temperature += parseFloat(item.temperature);
            dayData.count++;
            dayData.id = item.id;
            dayData.timestamp = timestamp;
        }
    });
  
    const averageDataByDay = dataByDay.map(dayData => ({
        co: dayData.count > 0 ? (dayData.co / dayData.count).toFixed(2) : '0.00',
        co2: dayData.count > 0 ? (dayData.co2 / dayData.count).toFixed(2) : '0.00',
        humidity: dayData.count > 0 ? (dayData.humidity / dayData.count).toFixed(2) : '0.00',
        id: dayData.id,
        temperature: dayData.count > 0 ? (dayData.temperature / dayData.count).toFixed(2) : '0.00',
        timestamp: dayData.timestamp,
    }));
  
    return averageDataByDay;
  }
*/

// function to plot values on charts
/*function plotValues(chart, timestamp, value) {
  var x = timestamp + 5.5 * 60 * 60 * 1000;
  var y = Number(value);
  if (chart.series[0].data.length > 40) {
      chart.series[0].addPoint([x, y], true, true, true);
  } else {
      chart.series[0].addPoint([x, y], true, false, true);
  }
}*/



dropdownElement.addEventListener('change', e => {
  try {
      auth.onAuthStateChanged(user => {
          if (user) {
              setupUI(user);
          } else {
              setupUI();
          }
      });
  } catch (e) {
      console.log(e);
  }
});


sensordropdownElement.addEventListener('change', e => {
    try {
        auth.onAuthStateChanged(user => {
            if (user) {
                setupUI(user);
            } else {
                setupUI();
            }
        });
    } catch (e) {
        console.log(e);
    }
  });
// MANAGE LOGIN/LOGOUT UI
var setupUI = user => {
  if (user) {
      //toggle UI elements
      loginElement.style.display = 'none';
      contentElement.style.display = 'block';
      authBarElement.style.display = 'block';
      userDetailsElement.style.display = 'block';
      userDetailsElement.innerHTML = user.email;

      // get user UID to get data from database
      var uid = user.uid;
      // console.log(uid);

      const deviceId = dropdownElement.value;
      //const devicetext = dropdownElement.text;
      document.getElementById('demo').innerHTML = deviceId;
      // Database paths (with user UID)
      const dbPath = `UsersData/${uid.toString()}/${deviceId.toString()}`;
      // var chartPath = 'UsersData/' + uid.toString() + '/charts/range';
      //var dataRef = firebase.database().ref("UsersData/kFi4xAyKBhMEuSijAjyyVBLBG6F3/41112151719836");

      // Database references
      var dbRef = firebase.database().ref(dbPath);
      // var chartRef = firebase.database().ref(chartPath);
      var dataPoints = [];

      // Listen for new data and add it to the array
      dbRef.on("child_added", function(snapshot) {
          var data = snapshot.val();
          var timestamp = Number(((data.timestamp) * 1000)+(5.5 * 60 * 60 * 1000));
          var co = Number(data.co);
          var temperature = Number(data.temperature);
          var co2 = Number(data.co2); // add CO2 data
          var humidity = Number(data.humidity); // add humidity data
          dataPoints.push([timestamp, co, temperature, co2, humidity]); // add new data to dataPoints array
      });
      const sensorId = sensordropdownElement.value;
      //const sensorname = sensordropdownElement.text;
      const sensorname = $("#sensor-select option:selected").text();
      //const devicetext = sensordropdownElement.text;
     // document.getElementById('demo1').innerHTML = sensorname;
      // Create the chart once all the data is loaded
      dbRef.once("value", function(snapshot) {
          var chart = Highcharts.chart("chart-temperature", {
              title: {
                  text: sensorname
              },
              xAxis: {
                  type: "datetime"
              },
              yAxis: {
                  title: {
                      text: "CO (ppm), CO2 (ppm), Humidity (%), Temperature (C)"
                  }
              },
              series: [{
                  name: sensorname,
                  data: dataPoints.map(function(point) {
                      return [point[0], point[sensorId]]; // temperature is the third element in each data point
                  })
              }]

          });
          return chart;
      });
 
      dbRef.orderByKey().limitToLast(1).on(
          'value',
          querySnapshot => {


              const queryData = [];

              querySnapshot.forEach(function (item) {
                  const jsonData = item.val();
                  queryData.push(jsonData);
              });

              const averageData = queryData;

             averageData.forEach(function (jsonData) {
                  // Save values on variables
                  var temperature = jsonData.temperature;
                  var humidity = jsonData.humidity;
                  var co2 = jsonData.co2;
                  var co = jsonData.co;
                  var timestamp = jsonData.timestamp;

                  updateElement.innerHTML = epochToDateTime1(timestamp);

                  tempElement.innerHTML = temperature;
                  humElement.innerHTML = humidity;
                  co2Element.innerHTML = co2;
                  coElement.innerHTML = co;
                 
                  var gaugeT = createTemperatureGauge();
                  var gaugeH = createHumidityGauge();
                  gaugeT.draw();
                  gaugeH.draw();
                  gaugeT.value = temperature;
                  gaugeH.value = humidity;
                //  updateElement.innerHTML = epochToDateTime1(timestamp);
              });
          },
          error => {
              console.log('Error getting documents: ', error);
          }
      );
      //CHECKBOXES
      // Checbox (cards for sensor readings)
      cardsCheckboxElement.addEventListener('change', e => {
          if (cardsCheckboxElement.checked) {
              cardsReadingsElement.style.display = 'block';
          } else {
              cardsReadingsElement.style.display = 'none';
          }
      });
      // Checbox (gauges for sensor readings)
      gaugesCheckboxElement.addEventListener('change', e => {
          if (gaugesCheckboxElement.checked) {
              gaugesReadingsElement.style.display = 'block';
          } else {
              gaugesReadingsElement.style.display = 'none';
          }
      });

      // IF USER IS LOGGED OUT
  } else {
      // toggle UI elements
      loginElement.style.display = 'block';
      authBarElement.style.display = 'none';
      userDetailsElement.style.display = 'none';
      contentElement.style.display = 'none';
  }
};
