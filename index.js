activities=[];
function addActivity (date,activity,duration){
activities.push({
    date:date,
    activity:activity,
    duration:duration
});
}
addActivity('1/1-2020','Facebook',30);
addActivity('2/1-2020','Youtube',60);
addActivity('3/1-2020','Instagram',30);
addActivity('23/7-18', 'Youtube', 30);
console.log(activities);

