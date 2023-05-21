package stepdef;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)

@CucumberOptions(
		monochrome = true,
		plugin = {"pretty","html:target/html-cucumber","json:target/cucumber.json"},
		features = "src/test/java/Features", 
		glue = "stepdef",
		//tags = {"@WIP"} 
	    //tags = {"@Sanity"} 
	    //tags = {"@Regression or @Sanity"} //either @Regression or @Sanity and we can use and also in the tag but the feature file should have both as a tag
		  tags = {"@Calculator"}//feature level tag
		
		
		)

public class TestRunner {
	

}
