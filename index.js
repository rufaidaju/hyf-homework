activities=[];
function addActivity (date,activity,duration){
activities.push({
    date:date,
    activity:activity,
    duration:duration
});
}

function showStatus(activities,date){
     let activitiesNum=activities.length;
     if(activities.length==0){
        return "Add some activities before calling showStatus";

     }else{
        //  Is it proplem if I don't use let?
        amount=0;
        limit=45;
        for (elem in activities){
            amount+=activities[elem].duration;
        }
        if (amount>limit){
            return `You have reached your limit ,you have spend ${amount} minutes, no more smartphoning for you!`;
        }else{
            return `You have added ${activitiesNum} activities. They amount to ${amount} min. of usage`;
        }
    }

}
addActivity('1/1-2020','Facebook',30);
addActivity('2/1-2020','Youtube',60);
addActivity('3/1-2020','Instagram',30);
addActivity('23/7-18', 'Youtube', 30);
console.log(activities);
console.log(showStatus(activities));



