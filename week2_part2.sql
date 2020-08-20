CREATE TABLE class (
 id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar(255) ,
 begins date ,
 ends date 
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;		
  		

CREATE TABLE student (
 id int(10) unsigned NOT NULL AUTO_INCREMENT PRIMARY KEY,
 name varchar(255) NOT NULL,
 email varchar(255) NOT NULL,
 phone int(10) NOT NULL,
 class_id int(10) unsigned NOT NULL,
 CONSTRAINT fk_status FOREIGN KEY (class_id) REFERENCES class (id) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

#Create an index on the name column of the student table.
CREATE INDEX   name_idx  ON student (name);

#Add a new column to the class table named status which can only have the following values: not-started, ongoing, finished .
ALTER TABLE class
ADD status ENUM ('not-started' , 'ongoing' ,'finished');

