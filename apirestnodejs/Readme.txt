1. (Install dependences) npm install express --save
2. (Install dependences) npm install mysql
3. (Install dependences) npm install nodemon -D
4. (Install dependences) npm install cors
5. (Create Databaseand table in MySQL)
CREATE DATABASE IF NOT EXISTS company;
USE company;
CREATE TABLE employess(
	id INT(11) NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(45) DEFAULT NULL,
    last_name VARCHAR(45) DEFAULT NULL,
    document_id INT(11) DEFAULT NULL,
    PRIMARY KEY(id)
);
DESCRIBE employess;
INSERT INTO employess values
	(1,'Ryan','Ray',123456),
    (2,'Stidl','Torres',234598),
    (3,'Alfonso','Moron',987654);
SELECT * FROM employess;
6. To create the stored procedure in the company database use the following code:
CREATE PROCEDURE employeeAddOrEdit(
	IN _id INT(11),
    IN _first_name VARCHAR(45),
    IN _last_name VARCHAR(45),
	IN _document_id INT(11)
)
BEGIN
	IF _id=0 THEN
		INSERT INTO employess(first_name,last_name,document_id)
		VALUES (_first_name,_last_name,_document_id);
		SET _id= LAST_INSERT_ID();
    ELSE
		UPDATE employess
        SET
			first_name=_first_name,
            last_name=_last_name
            document_id=_document_id
            WHERE id=_id;
	END IF;
    SELECT _id AS id;
			
END

7.Before running the api make sure that the connection string in the database.js file contains the correct data. In my case they are these:
const mysqlConnection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'company'
});
8.to run the api, type the following line in the terminal: npm run dev
D:\apirestnodejs> npm run dev
9.you can use postman to test the api or you can also open the index.html file (Frontend of the api).
10.IF YOU HAVE THIS PROBLMEM: Error: ER_NOT_SUPPORTED_AUTH_MODE: Client does not support authentication protocol requested by server; consider upgrading MySQL client
in MySQL Workbench, it is necessary to run the following query: ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
flush privileges;
In this case my password is 'password', you can change it for yours
11. If you have any other problem you can contact me at stidlalfonso@gmail.com. I will be attentive to answer your problem.
