activities = [];
let today = new Date();
function addActivity(activity, duration,date='default') {
    (date == 'default') ? date = today.toLocaleDateString("en-US") : date=date;
    activities.push({
        date: date,
        activity: activity,
        duration: duration
    });
    console.log(today.toLocaleDateString("en-US"));
}
function showStatus(activities, date) {
    let activitiesNum = 0;
    //  Activities is empty
    if (activities.length == 0) {
        return "Add some activities before calling showStatus";
    }
    else {
        //  Is it proplem if I don't use let?
        amount = 0;
        limit = 45;
        // Calculate how long time the user spend  with all activities at specific time,and how many activities he added.
        for (elem in activities) {
            if (activities[elem].date == date) {
                amount += activities[elem].duration;
                activitiesNum += 1;
            }
        }
        // check if the user reached his limit.
        if (amount > limit) {
            return `You have reached your limit in ${date},
            you have spend ${amount} minutes and you have added ${activitiesNum},
            no more smartphoning for you!`;
        }
        else {
            return `You have added ${activitiesNum} activities in ${date}.
            The amount to ${amount} min. of usage`;
        }
    }
}
function mostActivity(activities) {
    let using = [];
    max = {
        duration: 0,
        activity: ''
    };
    for (elem in activities) {
        isThere = false;
        // Check if the activity is already in the using array and check the max duratin.
        for (i in using) {
            if (activities[elem].activity == using[i].activity) {
                using[i].duration += activities[elem].duration;
                isThere = true;
                if (using[i].duration > max.duration) {
                    max.duration = using[i].duration;
                    max.activity = using[i].activity;
                }
                break;
            }
        }
        // Add the activity to th using array if it is not already there
        if (!isThere) {
            using.push({
                duration: activities[elem].duration,
                activity: activities[elem].activity
            });
        }
        console.log('using arr', using);
    }
    return ` The activity that you have spent the most time on is ${max.activity},
             you have spent ${max.duration} on it.`;
}
addActivity('Facebook', 130);
addActivity('Youtube', 60);
addActivity('Instagram', 20);
addActivity('Google', 35);
addActivity('Snapchat', 40);
addActivity('Youtube', 37);
addActivity('Youtube', 90,'23/7-18');
addActivity('Facebook', 20),'23/7-18';
// console.log(activities);
console.log(showStatus(activities, today.toLocaleDateString("en-US")));
console.log(showStatus(activities, '23/7-18'));
// console.log(mostActivity(activities));
