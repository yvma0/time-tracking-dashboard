// maybe also try to figure out isolated hover states in js? when hovering over the svgs...

// console.log(dataArr);

/*===FETCH CARD TEXT TO BE CHANGED===*/
const text = document.querySelectorAll('p.center-txt');
// console.log(text);
// console.log(text[1]);
// console.log(text[1].textContent);

/*===FETCH TAB LINKS===*/
const tabs = document.getElementsByClassName("tab");
const dailyBtn = tabs[0];
const weeklyBtn = tabs[1];
const monthlyBtn = tabs[2];

/*===LISTEN FOR CLICKS===*/
dailyBtn.addEventListener('click', showDaily);
weeklyBtn.addEventListener('click', showWeekly);
monthlyBtn.addEventListener('click', showMonthly);

/* NOTE: all of these functions assume that the 'text' array (aka p.center-txt element) is fetched from their respective cards (work, play, etc.) in the same order as their counterparts are in the data array. Not super futureproof, just the laziest way to go about it */
function showDaily(){
    tabs.forEachEach(e=>e.classList.remove("active")); //remove 'active' class from any other tabs
    dailyBtn.classList.add("active");
    //for each item in the js data file's array, collect the appropriate daily/weekly/monthly data and inject it into the card ('text' variable) with the corresponding index
    dataArr.forEach((e, i) => {
        let dailyData = e.timeframes.daily;
        text[i].innerHTML =
        `${dailyData.current}hrs
        <small>Yesterday - ${dailyData.previous}hrs</small>`
    });
}

function showWeekly(){
    tabs.forEachEach(e=>e.classList.remove("active")); //remove 'active' class from any other tabs
    weeklyBtn.classList.add("active");
    //for each item in the js data file's array, collect the appropriate daily/weekly/monthly data and inject it into the card ('text' variable) with the corresponding index
    dataArr.forEach((e, i) => {
        let weeklyData = e.timeframes.weekly;
        text[i].innerHTML =
        `${weeklyData.current}hrs
        <small>Last Week - ${weeklyData.previous}hrs</small>`
    });
}


function showMonthly(){
    tabs.forEachEach(e=>e.classList.remove("active")); //remove 'active' class from any other tabs
    monthlyBtn.classList.add("active");
    //for each item in the js data file's array, collect the appropriate daily/weekly/monthly data and inject it into the card ('text' variable) with the corresponding index
    dataArr.forEach((e, i) => {
        let monthlyData = e.timeframes.monthly;
        text[i].innerHTML =
        `${monthlyData.current}hrs
        <small>Last Month - ${monthlyData.previous}hrs</small>`
    });
}