package WEEK_1.design_patterns.factory_pattern.code;

public class test {
  public static void main(String[] args) {
    documentfactory wordfactory = new worddocumentfactory();
    document wordDoc = wordfactory.createDocument();
    wordDoc.open();

    documentfactory pdffactory=new pdfdocumentfactory();
    document pdfdoc=pdffactory.createDocument();
    pdfdoc.open();

    documentfactory excelfactory = new exceldocumentfactory();
    document exceldoc=excelfactory.createDocument();
    exceldoc.open();
  }
  
}
