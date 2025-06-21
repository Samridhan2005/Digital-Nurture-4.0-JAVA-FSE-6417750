package WEEK_1.design_patterns.singleton_pattern.code;


public class Test {
  public static void main(String[] args) {
    Logger obj1=Logger.getinstance();
    Logger obj2=Logger.getinstance();

    System.out.println("obj1==obj2");

    
  }
  
}
