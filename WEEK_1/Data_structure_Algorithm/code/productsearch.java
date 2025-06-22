package WEEK_1.Data_structure_Algorithm.code;
import java.util. *;

 class product {
  int productid;
  String productname;
  String category;

  public product(int id,String name, String category){
    this.productid=id;
    this.productname=name;
    this.category=category;
  }

  public String toString(){
    return productid+"-"+productname+"-"+category;
  }
  
  
}
public class productsearch{
  public static product linearsearch(product[] products, String targetname){
    for(product p:products){
      if (p.productname.equalsIgnoreCase(targetname)) {
          return p;

    }
  }
  return null;
}

  public static product binarysearch(product[] products, String targetname){
    int left=0;
    int right=products.length-1;

    while(left<=right){
      int mid=(left+right)/2;
      int compare =products[mid].productname.compareToIgnoreCase(targetname);

      if(compare==0) {
        return products[mid];
      }
      else if(compare==0){
        left=mid+1;
      }
      else{
        right=mid-1;
      }
    }
    return null;
  }

  public static void main(String[] args){
    product[] products = {
            new product(1, "laptop", "Electronics"),
            new product(2, "watches", "gadgets"),
            new product(3, "mobile", "Electronics"),
            new product(4, "dress", "textile")
        };

        System.out.println("Linear search result: ");
        product result1=linearsearch(products, "watches");
        if(result1!=null){
          System.out.println("Found: "+result1);
        }
        else{
          System.out.println("product is not available");
        }

        Arrays.sort(products, Comparator.comparing(p->p.productname.toLowerCase()));
        System.out.println("Binary search result: ");
        product result2=binarysearch(products, "dress");
        if(result2!=null){
          System.out.println("Found: "+result2);
        }
        else{
          System.out.println("product not available");
        }



  }}
