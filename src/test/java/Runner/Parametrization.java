package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="Feature\\Parametrization.feature", glue = {"Step_definition//Login_Parametrization"}, plugin = {"html:target/parametrization.html"})


public class Parametrization {

}