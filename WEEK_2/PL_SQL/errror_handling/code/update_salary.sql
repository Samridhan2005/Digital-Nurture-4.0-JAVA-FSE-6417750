CREATE OR REPLACE PROCEDURE UpdateSalary (
  p_employee_id   IN NUMBER,
  p_percent       IN NUMBER
) AS
BEGIN
  UPDATE Employees
  SET Salary = Salary + (Salary * p_percent / 100)
  WHERE EmployeeID = p_employee_id;

  IF SQL%ROWCOUNT = 0 THEN
    RAISE_APPLICATION_ERROR(-20002, 'Employee not found.');
  END IF;

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Salary updated successfully.');
EXCEPTION
  WHEN OTHERS THEN
    DBMS_OUTPUT.PUT_LINE('Error updating salary: ' || SQLERRM);
END;

