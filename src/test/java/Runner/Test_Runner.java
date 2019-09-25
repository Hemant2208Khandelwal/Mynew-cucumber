package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature\\Demo.feature", glue = {"Step_definition"}, plugin = {"html:target/cucumber.html"})
public class Test_Runner {

}
