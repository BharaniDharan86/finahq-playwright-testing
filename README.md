# FinaHq

## Install Dependencies

cd <project_directory>
npm install

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

- EMAIL
- PASSWORD


## Running Tests

Once you've set up the environment variables, you can run the test. Use the following command:

 npx playwright test --project=chromium --headed

to run all the test 

or use below command to run the specific test

npx playwright test `testname` --project=chromium --headed 

