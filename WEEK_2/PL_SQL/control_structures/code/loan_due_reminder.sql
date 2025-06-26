BEGIN
  FOR loan IN (
    SELECT l.LoanID, l.CustomerID, l.EndDate, c.Name
    FROM Loans l
    JOIN Customers c ON l.CustomerID = c.CustomerID
    WHERE l.EndDate <= SYSDATE + 30
  ) LOOP
    DBMS_OUTPUT.PUT_LINE('Reminder: Loan ID ' || loan.LoanID || 
                         ' for customer ' || loan.Name || 
                         ' is due on ' || TO_CHAR(loan.EndDate, 'YYYY-MM-DD'));
  END LOOP;
END;

