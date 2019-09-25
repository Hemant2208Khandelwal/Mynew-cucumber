package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature\\Tag_Demo.feature", glue = {"Step_definition"}, plugin = {"html:target/cucumber_1.html"}, tags = {"@End2End"})


public class Test_Runner_2 {

}
