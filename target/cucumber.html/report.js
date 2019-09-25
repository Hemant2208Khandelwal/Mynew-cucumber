$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Demo.feature");
formatter.feature({
  "name": "Login Feature",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "user enters Username and Password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the login page is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "TestMeApp_login.the_login_page_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters lalitha as username",
  "keyword": "When "
});
formatter.match({
  "location": "TestMeApp_login.user_enters_lalitha_as_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters Password123 as password",
  "keyword": "And "
});
formatter.match({
  "location": "TestMeApp_login.user_enters_Password_as_password(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user will Finds a testmeapp homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "TestMeApp_login.user_will_Finds_a_testmeapp_homepage()"
});
formatter.result({
  "status": "passed"
});
});