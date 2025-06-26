BEGIN
  FOR cust IN (
    SELECT CustomerID
    FROM Customers
    WHERE TRUNC(MONTHS_BETWEEN(SYSDATE, DOB) / 12) > 60
  ) LOOP
    UPDATE Loans
    SET InterestRate = InterestRate - 1
    WHERE CustomerID = cust.CustomerID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('Interest rate discount applied for customers above 60.');
END;
