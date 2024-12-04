# cse210-fa24-group4

This is a simple yet efficient browser based developer tool-kit that provides developers access to the most commonly used developer tools for whatever project the user is working on. The web-app is written in vanilla JS, HTML, and CSS, providing smooth, fast responses, without a backend for security, and speed. Each component is modular, and is not dependent on any other tool available in the tool-kit.

## Project Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/cse210-fa24-group4.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cse210-fa24-group4
   ```
3. Install the required dependencies:
   ```sh
   npm install
   ```

## Available Commands

### Start the Development Server

```sh
npm start
```

This command will start the development server and you can view the project in your browser at `http://localhost:3000`.

<!-- ### Build the Project

```sh
npm run build
```

This command will create a production-ready build of the project in the `build` directory. -->

### Run Tests

```sh
npm run test
```

This command will run the test suite for the project.

### Lint the Code

```sh
npm run lint
```

This command will lint the codebase using the defined linting rules.

<!-- ### Format the Code

```sh
npm run format
```

This command will format the codebase using the defined formatting rules. -->

## Running End-to-End Tests

To run the end-to-end tests, use the following commands:

1. For a headless run:

   ```sh
   npx playwright test

   ```

2. For a user-rich version of the run:

   ```sh
      npx playwright test --ui
   ```

## Contributing

1. Fork the repository.
2. Create a new branch:
   ```sh
   git checkout -b feature-branch
   ```

````

3. Make your changes and commit them:
   ```sh
   git commit -m "Description of changes"
   ```
4. Push to the branch:
   ```sh
   git push origin feature-branch
   ```
5. Open a pull request.

## License

This project is licensed under the MIT License.
````
