# UI + API Automation Assignment  
### Playwright (JavaScript)
This project contains automated tests for both UI (Book Store Application) and API (ReqRes API) using Playwright and JavaScript.

# UI Automation — Book Store Application
## Features Automated
1. Navigate to https://demoqa.com/
2. Manually create a new user (registration NOT automated)
3. Navigate to Book Store Application
4. Login with manually created user
5. Validate:Username is displayed
6. Logout button is visible
7. Click Book Store
8. Search for: "Learning JavaScript Design Patterns"
9. Validate the book appears in search results
10. Extract and save Title, Author, Publisher to a file
11. Logout

# API Automation — ReqRes.in
API Base URL: https://reqres.in/
## Automated API Scenarios
1. Create a user
   POST /api/users
   Validate HTTP 201
   Store returned userId
2. Get user details
   GET /api/users/{id}
   Validate response body matches created user
3. Update the user
   PUT /api/users/{id}
   Validate updated fields (name)

## Instructions: How to Run the Tests
1. Run: npm install
2. Run: npx playwright install
3. Run tests: npx playwright test
4. Run UI tests: npx playwright test tests/ui-tests.spec.js --headed
5. Run API tests: npx playwright test tests/api-tests.spec.js
