CREATE OR REPLACE FUNCTION CalculateMonthlyInstallment (
  p_loan_amount    NUMBER,
  p_interest_rate  NUMBER,  
  p_duration_years NUMBER
) RETURN NUMBER IS
  v_monthly_rate    NUMBER;
  v_num_months      NUMBER;
  v_installment     NUMBER;
BEGIN
  v_monthly_rate := p_interest_rate / (12 * 100); 
  v_num_months := p_duration_years * 12;

  IF v_monthly_rate = 0 THEN
    v_installment := p_loan_amount / v_num_months;
  ELSE
    v_installment := (p_loan_amount * v_monthly_rate) /
                     (1 - POWER(1 + v_monthly_rate, -v_num_months));
  END IF;

  RETURN ROUND(v_installment, 2);
END;
/
