package WEEK_1.Data_structure_Algorithm.financial_forecast.code;

public class forecast {
 public static double calcfutureValue(double presentvalue, double growthrate, int years) {
        if (years == 0) {
            return presentvalue;
        }
        return calcfutureValue(presentvalue, growthrate, years - 1) * (1 + growthrate);
    }
    public static void main(String[] args) {
        double presentvalue = 10000; 
        double growthrate = 0.10;   
        int years = 5;
        double futureValue = calcfutureValue(presentvalue, growthrate, years);
        System.out.printf("future value after %d years: %.2f\n", years, futureValue);
    }
}
