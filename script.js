function digital(){
    var date = new Date();

    var hours = date.getHours() + ' ';
    var minutes = date.getMinutes() + ' ';
    var seconds = date.getSeconds() + ' ';
    var day = date.getDay();
    console.log(day)

    if(hours.length < 2){
        hours = '0' + hours;
    }

    if(minutes.length < 2){
        minutes = '0' + minutes;
    }

    if(seconds.length < 2 ){
        seconds = '0' + seconds;
    }


    var weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 

    var clock = weekDays[day]  +  ' ' + hours + ':' + minutes + ':' + seconds;

    
    document.getElementById('clock').innerHTML = clock;
    console.log(clock)

    
    
    // console.log( yearShow)

};
digital();


setInterval(digital, 1000)

function showYear(){
    var date = new Date();
    var year = date.getFullYear();
    var yearShow =  '-- ' + year + '-- ';
    document.getElementById('year').innerHTML = yearShow;
console.log('Show ' + yearShow)
}

showYear();