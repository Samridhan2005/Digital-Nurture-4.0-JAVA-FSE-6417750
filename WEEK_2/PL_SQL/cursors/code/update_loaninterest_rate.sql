DECLARE
  CURSOR loan_cursor IS
    SELECT LoanID, InterestRate
    FROM Loans;
  v_loan_id    Loans.LoanID%TYPE;
  v_rate       Loans.InterestRate%TYPE;
BEGIN
  OPEN loan_cursor;

  LOOP
    FETCH loan_cursor INTO v_loan_id, v_rate;
    EXIT WHEN loan_cursor%NOTFOUND;

    IF v_rate < 5 THEN
      UPDATE Loans
      SET InterestRate = v_rate + 0.5
      WHERE LoanID = v_loan_id;
    ELSE
      UPDATE Loans
      SET InterestRate = v_rate + 0.25
      WHERE LoanID = v_loan_id;
    END IF;
  END LOOP;

  CLOSE loan_cursor;
  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Loan interest rates updated as per new policy.');
END;
/
