$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Features/NewCalculator.feature");
formatter.feature({
  "name": "This feature will allow you do to all the calculator operations using parameters",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.scenarioOutline({
  "name": "To add two numbers and validate the results are coming fine using parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I have two numbers \u003cnum1\u003e and \u003cnum2\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "I add those two numbers",
  "keyword": "When "
});
formatter.step({
  "name": "I should get the result as \u003cresult\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "num1",
        "num2",
        "result"
      ]
    },
    {
      "cells": [
        "5",
        "7",
        "12"
      ]
    },
    {
      "cells": [
        "4",
        "4",
        "8"
      ]
    },
    {
      "cells": [
        "15",
        "12",
        "27"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To add two numbers and validate the results are coming fine using parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have two numbers 5 and 7",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_have_two_numbers_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add those two numbers",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_add_those_two_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 12",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To add two numbers and validate the results are coming fine using parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have two numbers 4 and 4",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_have_two_numbers_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add those two numbers",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_add_those_two_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 8",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To add two numbers and validate the results are coming fine using parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have two numbers 15 and 12",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_have_two_numbers_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add those two numbers",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_add_those_two_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 27",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario will validate addition of multiple numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have below numbers",
  "rows": [
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_have_below_numbers(java.util.List\u003cjava.lang.Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add those numbers",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_add_those_numbers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 24",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.CalculatorStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To calculate the total bill amount",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to buy below items",
  "rows": [
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.NewCalculatorStepDef.i_want_to_buy_below_items(java.util.Map\u003cjava.lang.String, java.lang.Integer\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I purchase them",
  "keyword": "When "
});
formatter.match({
  "location": "stepdef.NewCalculatorStepDef.i_purchase_them()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the bill amount as 70",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.NewCalculatorStepDef.i_should_get_the_bill_amount_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To calculate the total bill amount using quantity",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Calculator"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I want to buy below items in given quantity",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "Given "
});
formatter.match({
  "location": "stepdef.NewCalculatorStepDef.i_want_to_buy_below_items_in_given_quantity(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the bill amount as 260",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdef.NewCalculatorStepDef.i_should_get_the_bill_amount_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});