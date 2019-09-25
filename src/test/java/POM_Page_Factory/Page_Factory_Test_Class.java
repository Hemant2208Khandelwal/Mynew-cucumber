package POM_Page_Factory;

import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

public class Page_Factory_Test_Class {
	
	@Test
	
	public void f() throws InterruptedException
	{
		System.setProperty("webdriver.chrome.driver","C:\\Users\\training_b6b.01.16\\Desktop\\Browser_Drivers\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("http://demowebshop.tricentis.com/");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		
		 Page_Factory_Page_Class locateElements = PageFactory.initElements(driver,  Page_Factory_Page_Class.class);
		 locateElements.loginMethod("hemant.acc@gmail.com", "hemant");
		 
		 System.out.println("The title of the page is: "+driver.getTitle());
		 
		 driver.close();
		 
		
	}

}
