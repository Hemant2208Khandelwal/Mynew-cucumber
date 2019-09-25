package POM_Page_Factory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Page_Factory_Page_Class {
	
	WebDriver driver;
	@FindBy(how=How.LINK_TEXT,using="Log in")WebElement login;
	@FindBy(how=How.ID,using="Email")WebElement username;
	@FindBy(how=How.NAME,using="Password")WebElement password;
	@FindBy(how=How.XPATH,using="/html/body/div[4]/div[1]/div[4]/div[2]/div/div[2]/div[1]/div[2]/div[2]/form/div[5]/input")WebElement log;
	@FindBy(how=How.XPATH,using="/html/body/div[4]/div[1]/div[1]/div[2]/div[1]/ul/li[2]/a")WebElement logout;
		
	public Page_Factory_Page_Class(WebDriver driver)
		{
			this.driver=driver;
		}
		
		public void loginMethod(String uid, String pwd)
		{
			login.click();
			username.sendKeys(uid);
			password.sendKeys(pwd);
			log.click();
			logout.click();
		}
}
