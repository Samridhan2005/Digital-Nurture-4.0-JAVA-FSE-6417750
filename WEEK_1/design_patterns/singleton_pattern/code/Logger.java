package WEEK_1.design_patterns.singleton_pattern.code;

public class Logger {
  private static Logger instance;
  private Logger(){
    System.out.println("object created");
  }
  public static Logger getinstance(){
    if(instance==null){
      instance=new Logger();
    }
    return instance;
  }

   
}