package Page_Object_Model;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Test_Class_POM {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\training_b6b.01.16\\Desktop\\Browser_Drivers\\chromedriver.exe");
		WebDriver driver=new ChromeDriver();
		Page_Class_POM PObject=new Page_Class_POM(driver);
		driver.get("http://demowebshop.tricentis.com/");
		driver.manage().window().maximize();
		PObject.clicklink();
		String username=null;
		PObject.typeuname(username);
		String password=null;
		PObject.typepassword(password);
		PObject.clickonloginlyn();
		Thread.sleep(3000);
		PObject.clickonlogoutlyout();
		System.out.println("Title of the page is :"+driver.getTitle());
		
		driver.close();
		
	}

}
