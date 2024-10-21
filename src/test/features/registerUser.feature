Feature: Register User

@smoke
Scenario: Register new User
 Given I navigate to the register page
 When I created a new user
 Then I confirm user registration is success

 Examples: 
 |firstName|lastName|userName         |password |confirmPassword|
 |Koushik  |C       |user1681194350360|Pass123$ |Pass123$       |