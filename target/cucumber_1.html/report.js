$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Tag_Demo.feature");
formatter.feature({
  "name": "ECommerce Application",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@FunctionalTest"
    }
  ]
});
formatter.scenario({
  "name": "Buy a product with cash payment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Buy a product with CC payment",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@SmokeTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "PaymentMethod"
      ]
    },
    {
      "cells": [
        "CC Card"
      ]
    },
    {
      "cells": [
        "DD Card"
      ]
    },
    {
      "cells": [
        "Bank Transfer"
      ]
    },
    {
      "cells": [
        "PayPal"
      ]
    },
    {
      "cells": [
        "Cash"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Payment declined",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@FunctionalTest"
    },
    {
      "name": "@End2End"
    }
  ]
});
formatter.step({
  "name": "This is a blank test",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});