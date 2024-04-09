# NodeJS-ExpressValidation

This project is a Node.js backend application using Express.js. It implements user authentication, including login and registration functionalities, with comprehensive request validation and custom error handling. The system validates user input on authentication routes and provides detailed feedback on validation errors.

## Features

- **User Authentication**: Supports login and registration functionalities with input validation.
- **Express Validation**: Uses `express-validation` to validate request bodies against predefined Joi schemas, ensuring that received data meets the application's requirements.
- **Custom Error Handling**: Implements a custom error handling middleware to catch and format errors, including those from the validation process.
- **Validation Error Mapper**: Utilizes a custom function to map validation errors to a more readable and user-friendly format.

