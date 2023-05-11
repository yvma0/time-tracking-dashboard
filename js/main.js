// grab daily, weekly, monthly as separate elements probably
// set onclick events for them...apply an active state or just a style? TBD
// grab..the p tags in each section for changing
// there should be a way to grab it as an array and feed the json data in through array...? tbc thought
// maybe also try to figure out isolated hover states in js? when hovering over the svgs...

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
dailyBtn.addEventListener('click', functionPlaceholder);
weeklyBtn.addEventListener('click', functionPlaceholder);
monthlyBtn.addEventListener('click', functionPlaceholder);