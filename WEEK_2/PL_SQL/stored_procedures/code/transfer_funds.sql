CREATE OR REPLACE PROCEDURE TransferFunds (
  p_from_account_id   IN NUMBER,
  p_to_account_id     IN NUMBER,
  p_amount            IN NUMBER
) AS
  v_from_balance NUMBER;
BEGIN
  SELECT Balance INTO v_from_balance
  FROM Accounts
  WHERE AccountID = p_from_account_id;

  IF v_from_balance < p_amount THEN
    RAISE_APPLICATION_ERROR(-20001, 'Insufficient fund in source account.');
  END IF;

  UPDATE Accounts
  SET Balance = Balance - p_amount,
      LastModified = SYSDATE
  WHERE AccountID = p_from_account_id;

  UPDATE Accounts
  SET Balance = Balance + p_amount,
      LastModified = SYSDATE
  WHERE AccountID = p_to_account_id;

  COMMIT;

  DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');
EXCEPTION
  WHEN OTHERS THEN
    ROLLBACK;
    DBMS_OUTPUT.PUT_LINE('Error in fund transfer: ' || SQLERRM);
END;
