# 1-Add a task with these attributes: title, description, created, updated, due_date, status_id, user_id 
 #-Insert into task table:
INSERT INTO task (title, description, created, updated, due_date, status_id)
VALUES('Do db homeworks','Doing all the parts','2017-02-09 09:07:24','2017-02-19 04:27:02','2017-02-25 06:09:32' ,2);

# 2-Change the title of a task:
UPDATE task SET title = 'DB homeworks'  WHERE id = 36;

# 3-Change a task due date:
UPDATE task SET due_date ='2017-10-19 00:40:54' WHERE id = 36;

# 4-Change a task status:
UPDATE task SET status_id = 2  WHERE id =22 ;

# 5-Mark a task as complete:
UPDATE task SET status_id = 3  WHERE id =22 ;

# 6-Delete a task:
DELETE FROM task WHERE id =26 ;


