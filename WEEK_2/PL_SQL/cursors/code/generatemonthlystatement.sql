SET SERVEROUTPUT ON;

DECLARE
  CURSOR monthly_txns IS
    SELECT c.CustomerID, c.Name, t.TransactionDate, t.Amount, t.TransactionType
    FROM Customers c
    JOIN Accounts a ON c.CustomerID=a.CustomerID
    JOIN Transactions t ON a.AccountID=t.AccountID
    WHERE TRUNC(t.TransactionDate, 'MM')=TRUNC(SYSDATE, 'MM')
    ORDER BY c.CustomerID, t.TransactionDate;

  v_cust_id   Customers.CustomerID%TYPE;
  v_name      Customers.Name%TYPE;
  v_date      DATE;
  v_amount    NUMBER;
  v_type      VARCHAR2(10);

BEGIN
  DBMS_OUTPUT.PUT_LINE('Monthly Statement -'||TO_CHAR(SYSDATE, 'Month YYYY'));
  OPEN monthly_txns;
  LOOP
    FETCH monthly_txns INTO v_cust_id, v_name, v_date, v_amount, v_type;
    EXIT WHEN monthly_txns%NOTFOUND;
    DBMS_OUTPUT.PUT_LINE('Customer: ' || v_name || 
                         ' | Date: ' || TO_CHAR(v_date, 'DD-Mon-YYYY') || 
                         ' | Type: ' || RPAD(v_type, 10) || 
                         ' | Amount: $' || v_amount);
  END LOOP;
  CLOSE monthly_txns;
END;
/
