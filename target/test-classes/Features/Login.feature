Feature: This feature will be used to test the login funtionality of simplilearn application

  Background: 
    Given I have launched the application
    And I have clicked on login link

  @WIP
  Scenario: validate the success scenario
    When I enter username
    And I enter password
    And I clicked on login button
    Then I should land on home page

  @Sanity
  Scenario: validate the failure scenario
    When I enter username
    And I enter password
    And I clicked on login button
    Then I should get the error message

  @Sanity
  Scenario: Validate the Login failure scenario using parameters
    When I enter username as "abc@xyz.com"
    And I enter password as "Abc@1234"
    And I clicked on login button
    Then I should get the error message as "The email or password you have entered is invalid."

  @Regression
  Scenario Outline: Validate the Login failure scenario using parameters
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And I clicked on login button
    Then I should get the error message as "The email or password you have entered is invalid."

    Examples: 
      | UserName    | Password |
      | pqr@xyz.com | Pqr@1234 |
      | xyz@abc.com | Xyz@1234 |
