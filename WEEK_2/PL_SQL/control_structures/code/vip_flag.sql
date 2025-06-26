BEGIN
  FOR cust IN (
    SELECT CustomerID
    FROM Customers
    WHERE Balance > 10000
  ) LOOP
    UPDATE Customers
    SET IsVIP = 'Y'
    WHERE CustomerID = cust.CustomerID;
  END LOOP;

  COMMIT;
  DBMS_OUTPUT.PUT_LINE('VIP status updated for eligible customers.');
END;
