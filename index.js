activities = [];
let today = new Date();

function addActivity (activity,duration){
    activities.push({
        date:today.toLocaleDateString("en-US"),
        activity:activity,
        duration:duration
    });
    console.log(today.toLocaleDateString("en-US")); 
}

function showStatus(activities,date){
    let activitiesNum = 0;
    //  Activities is empty
    if(activities.length == 0){
        return "Add some activities before calling showStatus";
    }else{
        //  Is it proplem if I don't use let?
        amount = 0;
        limit = 45;
        // Calculate how long time the user spend  with all activities at specific time,and how many activities he added.
        for (elem in activities){
            if(activities[elem].date == date){
                amount += activities[elem].duration;
                activitiesNum += 1;
            }
        }
        
        // check if the user reached his limit.
        if (amount > limit){
            return `You have reached your limit in ${date},
            you have spend ${amount} minutes and you have added ${activitiesNum},
            no more smartphoning for you!`;
        }else{
            return `You have added ${activitiesNum} activities in ${date}.
            The amount to ${amount} min. of usage`;
        }
    }
}

function mostActivity(activities){
    let using =[]
    max={
        duration:0,
        activity:''
    }

    for (elem in activities){
        isThere = false;
        // Check if the activity is already in the using array and check the max duratin.
        for (i in using){
            if (activities[elem].activity == using[i].activity){
                using[i].duration += activities[elem].duration;
                isThere = true;
                if(using[i].duration > max.duration){
                    max.duration=using[i].duration;
                    max.activity=using[i].activity;
                }
                break;
            }
        }
        // Add the activity to th using array if it is not already there
        if(!isThere){
            using.push({
                duration:activities[elem].duration,
                activity:activities[elem].activity
            })
        }
         console.log('using arr',using);
    }
    return ` The activity that you have spent the most time on is ${max.activity},
             you have spent ${max.duration} on it.` ;
}

addActivity('Facebook',30);
addActivity('Youtube',60);
addActivity('Instagram',30);
addActivity('Google',30);
addActivity('Snapchat',30);
addActivity('Youtube', 30);
console.log(activities);
console.log(showStatus(activities,date));
console.log(mostActivity(activities));



