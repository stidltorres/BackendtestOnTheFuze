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