# playwright-ts-saucedemo

This Project uses Playwright with TypeScript to perform UI Automation on SauceDemo.com website.

Project demonstrates the ability to make UI automation on web using Playwright with TypeScript.
It follows the Page Object Model (POM) Architecture - including Base Page, Page Class, Data Source files, and Test Cases.

## Overview

The primary goal of this project is to perform a DEMO on Test-Capeability.
Testing: Login to SauceDemo & Add 2 Products to the Cart scenario.
The relevant test is located in: `sd-4-DemoTests.spec.ts`.

## Project Structure

- `tests/`: This directory contains the test classes, with tested scenarios.
- `tests/sd-4-DemoTests.spec.ts`: This file contains the DEMO test scenario for the quick login and product addition.
- `pages/`: This directory contains the BasePage & Pages classes representing different pages on the website.
- `dataSources/`: This directory contains data sources, to be used during tests.
- `package.json`: The project dependencies and scripts are defined here.

##  Running Tests Locally

Installation, Setup and Run Test:

1. Clone the repository to your local machine.
2. Pre-Condition - having Visual Stodio Code (or any other alternative equivalent)
3. Install dependencies: nodejs, typescript and playwright
4. To run the tests locally using Visual Studio Code:
    - Open the project in Visual Studio Code.
    - Select sd-4-DemoTests.spec.ts (under tests).
    - Run in from test itsel by clicking the green v (on the left).
    - Run via Terminal: Open a terminal in Visual Studio Code and run: 
        npx playwright test tests/sd-4-DemoTests.spec.ts
    - Running Tests via 'Git Actions':
        When installing Playwright using the VS Code extension or with npm init playwright@latest you are given the option to add a GitHub Actions. This creates a playwright.yml file inside a .github/workflows folder containing everything you need so that your tests run on each push and pull request into the main/master branch.
        This project is configured to run tests automatically on Git Actions when you push changes to the repository.
        The workflow is defined in .github/workflows/main.yml.
        RUNNING on Demand:
            Open Git Action tab, select latest test and click the 'Re-run single job' button.

Elad Luz

