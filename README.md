# playwright-typescript-saucedemo

This Project is using Playwright with TypeScript, to perform UI Test Automation on SauceDemo.com website:

1. Project demonstrates My ability to code UI Automation Test-Scenarios on web-pages, using Playwright with TypeScript.
2. I follow the Page Object Model (POM) Architecture - including:
    - Base Page
    - Page Classes
    - Data Source files
    - Test Cases

## Overview

The primary goal of this project is to perform a DEMO on Test-Capability, while testing: Login to SauceDemo & Add 2 Products to the Cart scenario - the relevant test is located in: `sd-4-DemoTests.spec.ts`.

## Project Structure

- `tests/`: This directory contains the test classes, with tested scenarios.
- `tests/sd-4-DemoTests.spec.ts`: This file contains the DEMO test scenario for the quick login and product addition.
- `pages/`: This directory contains the BasePage & Pages classes representing different pages on the website.
- `dataSources/`: This directory contains data sources, to be used during tests.
- `package.json`: The project dependencies and scripts are defined here.

##  Running Tests Locally

Installation, Setup and Run Test:

1. Pre-Condition - having Visual Stodio Code (or any other alternative equivalent)
2. Install relevant dependencies: node.js, typescript and playwright
3. Clone this repository to your local machine.
4. To run the tests locally using the 'Visual Studio Code' editor:
    - Open the project in Visual Studio Code.
    - clivk on the Testing icon in side-bar & Select the sd-4-DemoTests.spec.ts (under tests).
    - Run methods from test, by clicking the green v (on the left).
    - Running test via VSC-Terminal:
        - Open a terminal in Visual Studio Code and run → npx playwright test tests/sd-4-DemoTests.spec.ts
        - To generating html Test-Results report run → npx playwright show-report
5. Running Tests via 'Git Actions':
    - When installing Playwright using the VS Code extension or with npm init playwright@latest you are given the option to add a GitHub Actions. This creates a playwright.yml file inside a .github/workflows folder containing everything you need so that your tests run on each push and pull request into the main/master branch.
    - This project is configured to run tests automatically on Git Actions when you push changes to the repository. The workflow is defined in .github/workflows/main.yml.
    - Running on Demand from GIT:
        - Open Git Action tab, select latest test and click the 'Re-run single job' button.

Elad Luz

