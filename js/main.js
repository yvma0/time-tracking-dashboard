// grab daily, weekly, monthly as separate elements probably
// set onclick events for them...apply an active state or just a style? TBD
// grab..the p tags in each section for changing
// there should be a way to grab it as an array and feed the json data in through array...? tbc thought
// maybe also try to figure out isolated hover states in js? when hovering over the svgs...
console.log(dataArr);

/*===FETCH CARD TEXT TO BE CHANGED===*/
const text = document.querySelectorAll('p.center-txt');
// console.log(text);
// console.log(text[1]);
// console.log(text[1].textContent);

/*===FETCH BUTTONS===*/
//=> NOTE: this selects all 'li's; may mess things up in later (hypothetical) feature
//   additions if any more li items are added <=
const nav = document.querySelectorAll('li');
const dailyBtn = nav[0];
const weeklyBtn = nav[1];
const monthlyBtn = nav[2];

/*===LISTEN FOR CLICKS===*/
dailyBtn.addEventListener('click', showDaily);
weeklyBtn.addEventListener('click', showWeekly);
monthlyBtn.addEventListener('click', showMonthly);

/* NOTE: all of these functions assume that the 'text' array (aka p.center-txt element) is fetched from their respective cards (work, play, etc.) in the same order as their counterparts are in the data array. Not super futureproof, just the laziest way to go about it */
function showDaily(){
    dataArr.forEach((e, i) => {
        let dailyData = e.timeframes.daily;
        text[i].innerHTML =
        `${dailyData.current}hrs
        <small>Yesterday - ${dailyData.previous}hrs</small>`
    });
}

function showWeekly(){
    dataArr.forEach((e, i) => {
        let weeklyData = e.timeframes.weekly;
        text[i].innerHTML =
        `${weeklyData.current}hrs
        <small>Last Week - ${weeklyData.previous}hrs</small>`
    });
}


function showMonthly(){
    dataArr.forEach((e, i) => {
        let monthlyData = e.timeframes.monthly;
        text[i].innerHTML =
        `${monthlyData.current}hrs
        <small>Last Month - ${monthlyData.previous}hrs</small>`
    });
}