$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Parametrization.feature");
formatter.feature({
  "name": "Login Action",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on to Signin link",
  "keyword": "When "
});
formatter.step({
  "name": "User enters \"\u003cusername\u003e\" and \"\u003cpassword\"\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "Lalitha",
        "Password123"
      ]
    },
    {
      "cells": [
        "Admin",
        "Password456"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Parametrization.user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on to Signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Parametrization.user_click_on_to_Signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Lalitha\" and \"\u003cpassword\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Parametrization.user_enters_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//a[@href\u003d\u0027logout.htm\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6BBCNK2\u0027, ip: \u0027192.168.164.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Step_definition.Login_Parametrization.user_enters_and(Login_Parametrization.java:42)\r\n\tat ✽.User enters \"Lalitha\" and \"\u003cpassword\"\u003e(file:Feature/Parametrization.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Parametrization.message_displayed_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User opens the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Login_Parametrization.user_opens_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on to Signin link",
  "keyword": "When "
});
formatter.match({
  "location": "Login_Parametrization.user_click_on_to_Signin_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"Admin\" and \"\u003cpassword\"\u003e",
  "keyword": "And "
});
formatter.match({
  "location": "Login_Parametrization.user_enters_and(String,String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: Cannot locate an element using xpath\u003d//a[@href\u003d\u0027logout.htm\u0027]\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BDC6-DX-6BBCNK2\u0027, ip: \u0027192.168.164.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_102\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:327)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat Step_definition.Login_Parametrization.user_enters_and(Login_Parametrization.java:42)\r\n\tat ✽.User enters \"Admin\" and \"\u003cpassword\"\u003e(file:Feature/Parametrization.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Message displayed login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Login_Parametrization.message_displayed_login_successfully()"
});
formatter.result({
  "status": "skipped"
});
});