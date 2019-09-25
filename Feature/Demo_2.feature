Feature: Login Action Test
	Scenario: Successful Login with Valid Credentials
		Given the login page is opened
		When user enters "Lalitha" as a username and "Password123" as a password
		When user clicks on login button
		Then user will find a testmeapp page
		
	