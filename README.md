# BELITSOFT_TEST

Test task project for Belitsoft using Playwright + TypeScript.
Task: 3 test cases, validate fields on https://demoqa.com/text-box, assert elements selection by checkbox on https://demoqa.com/checkbox, 1 negative case - invalid email data for https://demoqa.com/text-box

Architecture - the framework is based on the Page Object Model (POM) pattern using Page Factory and custom fixture initialization.

Structure:
- pages/ — BasePage, child pages, and PageFactory
- test-data/ — all test data stored in JSON files
- tests/ — test specs: checkbox_page.spec, textbox_page.spec.ts
- utils/ — helper utilities:
  - step decorator wrapper
  - custom types
  - fixture initialization, we use 'pages' entry point for PageFactory instance

Execution:
npm run test - execution based on default playwright.config.ts state, uysing 2 workers 
npm run parallel - using the PARALLEL=true environment variable via cross-env for fullyParallel: true execution

Reporter - built-in HTML 
