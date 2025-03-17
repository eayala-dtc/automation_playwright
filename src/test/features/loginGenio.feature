Feature: User Login test

 Background:
 Given User navigates to the Genio_webpage
 And User click on the login link

 @smokeTest
 Scenario: Login should be success
  And User enter the email as "<email>"
  And User enter the password as "<pass>" 
  When User click on the login button
  Then Login should be success 

  Examples: 
  |email                        |pass         |
  |yeniset357@bmixr.com         | Ingresar4.9 |