# PayDo Automated Tests

This project includes automation tests for UI and API by writing Playwright and TypeScript


## Clone the repository

``https://github.com/ShutkaAndrew/PayDO.git``


## Project structure and approach
API test ate located in the `testt/API` folder.
These test:
- use TypeScript interfaces in(`interfaces/API`) to stricly  describe request and response structure.
-use data factories `Factories/API` to generate dynamic test data(random user id)

E2E tests are located in the `tests/E2E` folder
These tests:
-Use custom fixtures to i inject common commonly used POM
-Use factories`Factories/E2E` for generating dynamic UI data as auth credentials
-Composition `Pages/Composition` helps structure common form logic and selectors
-POM `Pages` encapsulate interactions with diffrent UI pages

## How to run tests


### 1.Install dependencies

```npm install```

2.Run all tests

```npx playwright test```

3.Run only E2E tests

```npm run test:e2e```



