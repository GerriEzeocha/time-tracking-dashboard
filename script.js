

let mydata;
fetch('./data.json')
    .then(response => {
        return response.json();
    })
    .then(jsondata => { 
        for (var i = 0; i < cards.length; i++) {
            titles[i].innerHTML = jsondata[i].title;
            hours[i].innerHTML = `${jsondata[i].timeframes.daily.current}hrs`;
            prevs[i].innerHTML = `Last Week - ${jsondata[i].timeframes.daily.previous}hrs`;
        }
        
        daily.addEventListener('click', () => {
            for (var i = 0; i < cards.length; i++) {
                titles[i].innerHTML = jsondata[i].title;
                hours[i].innerHTML = `${jsondata[i].timeframes.daily.current}hrs`;
                prevs[i].innerHTML = `Last Week - ${jsondata[i].timeframes.daily.previous}hrs`;
            }
        });
        weekly.addEventListener('click', () => {
            for (var i = 0; i < cards.length; i++) {
                titles[i].innerHTML = jsondata[i].title;
                hours[i].innerHTML = `${jsondata[i].timeframes.weekly.current}hrs`;
                prevs[i].innerHTML = `Last Week - ${jsondata[i].timeframes.weekly.previous}hrs`;
            }
        });
        monthly.addEventListener('click', () => {
            for (var i = 0; i < cards.length; i++) {
                titles[i].innerHTML = jsondata[i].title;
                hours[i].innerHTML = `${jsondata[i].timeframes.monthly.current}hrs`;
                prevs[i].innerHTML = `Last Week - ${jsondata[i].timeframes.monthly.previous}hrs`;
            }
        });
    })
    .catch (err => console.log(err));



const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');


let cards = document.querySelectorAll('.card');
let titles = document.querySelectorAll('#title');
let hours = document.querySelectorAll('.hrs');
let prevs = document.querySelectorAll('#previous');
