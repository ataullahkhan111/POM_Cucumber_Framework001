Feature:HRMS
@TC002
Scenario: Login and Logout
Given open browser
When Enter URL
When Enter the username and password
When Logout of application
Then close browser