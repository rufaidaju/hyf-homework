USE hyf_exercise_week2_part3;
#Get all the tasks assigned to users whose email ends in @spotify.com
SELECT task.title,user.name,user.email
FROM ((task INNER JOIN user_task 
ON task.id = user_task.task_id ) INNER JOIN user 
ON user.id = user_task.user_id)
WHERE user.email LIKE '%@spotify.com' ;


#Get all the tasks for 'Donald Duck' with status 'Not started'
SELECT task.title,user.name,user.email,status.name
FROM (((task INNER JOIN user_task 
ON task.id = user_task.task_id ) INNER JOIN user 
ON user.id = user_task.user_id)) INNER JOIN status 
ON task.status_id = status.id 
WHERE user.name = 'Donald Duck' AND status.name = 'NOT started';


#Get all the tasks for 'Maryrose Meadows' that were created in september (hint:         month(created)=month_number) :
SELECT task.title,user.name,user.email,task.created
FROM (((task INNER JOIN user_task 
ON task.id = user_task.task_id ) INNER JOIN user 
ON user.id = user_task.user_id))
WHERE user.name = 'Maryrose Meadows' AND task.created LIKE '_____09%';

#Find how many tasks where created in each month, e.g. how many tasks were created in october, how many tasks were created in november.
SELECT DATE_FORMAT(created,"%m") AS 'MONTH',
COUNT( DATE_FORMAT(created,"%m")) AS  'COUNT'
FROM task
GROUP BY DATE_FORMAT(created,"%m");





