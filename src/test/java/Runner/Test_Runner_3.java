package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature\\Demo_2.feature", glue = {"Step_definition"}, plugin = {"html:target/cucumber_3.html"})


public class Test_Runner_3 {

}