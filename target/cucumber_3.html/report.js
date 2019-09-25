$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Demo_2.feature");
formatter.feature({
  "name": "Login Action Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "\t\tGiven: the login page is opened\n\t\tWhen: user enters \"Lalitha\" as a username and \"Password123\" as a password\n\t\tWhen: user clicks on login button\n\t\tThen: user will find a testmeapp page",
  "keyword": "Scenario"
});
});