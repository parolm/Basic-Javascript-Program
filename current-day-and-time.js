let date = new Date();
currentDay = date.toLocaleDateString('en-US', {weekday: 'long'})
currentTime = date.toLocaleTimeString();
console.log('Today is : ' + currentDay )
console.log('Current time is : ' + currentTime)