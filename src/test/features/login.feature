Feature: User Authentication tests

 Background:
 Given User navigates to the applications
 And User click on the login links

 @smoke
 Scenario: Login should be success
   And User enter the usernames as "ortoni"
   And User enter the passwords as "Pas1234"
   When User click on the login buttons
   Then Login should be success

