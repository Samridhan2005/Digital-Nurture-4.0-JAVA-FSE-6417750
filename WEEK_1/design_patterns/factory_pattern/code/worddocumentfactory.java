package WEEK_1.design_patterns.factory_pattern.code;

public class worddocumentfactory extends documentfactory {
  public document createDocument(){
    return new worddocument();
  } 
}
