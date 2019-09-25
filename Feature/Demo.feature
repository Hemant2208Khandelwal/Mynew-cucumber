Feature: Login Feature

	Scenario: user enters Username and Password
		Given the login page is opened
		When user enters lalitha as username
		And user enters Password123 as password
		Then user will Finds a testmeapp homepage