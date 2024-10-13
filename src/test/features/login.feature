Feature: User Authentication tests

 Background:
 Given User navigates to the applications
 And User click on the login link

 @smoke
 Scenario: Login should be success
   And User enter the username as "ortoni"
   And User enter the password as "Pas1234"
   When User click on the login button
   Then Login should be success

