DECLARE
  CURSOR acct_cursor IS
    SELECT AccountID, Balance
    FROM Accounts;

  v_acct_id   Accounts.AccountID%TYPE;
  v_balance   Accounts.Balance%TYPE;
  v_fee       CONSTANT NUMBER := 100; -- flat annual fee
BEGIN
  OPEN acct_cursor;
  LOOP
    FETCH acct_cursor INTO v_acct_id, v_balance;
    EXIT WHEN acct_cursor%NOTFOUND;
    IF v_balance >= v_fee THEN
      UPDATE Accounts
      SET Balance = Balance - v_fee
      WHERE AccountID = v_acct_id;

    ELSE
      DBMS_OUTPUT.PUT_LINE('Skipping Account ' || v_acct_id || 
                           ' due to insufficient balance.');
    END IF;
  END LOOP;

  CLOSE acct_cursor;
  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Annual fee applied where possible.');
END;
/
