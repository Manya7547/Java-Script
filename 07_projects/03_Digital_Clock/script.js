// we have to display local time 

// select the clock id where time is to be displayed 

// we want the time to be updated again and again without refreshing 
// time in milisecond

setInterval(function(){
    const clock = document.querySelector('#clock'); // or use getElementById('clock)
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000) 