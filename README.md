# Getting started

```bash

# Clone this repository
$ git clone https://github.com/LucasDants/NodeJS-BusTicket.git

# Access the project folder cmd/terminal
$ cd NodeJS-BusTicket

# install the dependencies
$ npm install

# add env file with variables

# Run the application in development mode
$ npm run dev

# The application will open on the port: 3333 - go to http://localhost:3333

# Go to http://localhost:3333/api-docs to have a swagger documentation of the application 

```

# Explanation

**Routes:** Routes are responsible for receiving requests, passing them to other layers, and returning a response. They typically handle incoming HTTP requests (e.g., GET, POST, PUT, DELETE), analyze these requests, and direct them to the appropriate controller based on the URL and request method.

**Controller:** Controllers act as intermediaries between routes and use cases. They have knowledge of both sides and often handle error handling. Controllers receive data from the route, interact with the appropriate use cases to execute necessary business logic, and return a suitable response to the client.

**Use Cases:** Use cases represent the business logic layer of an application. They contain business rules, validations, calculations, and operations that the application must perform to meet functional requirements. Use cases are invoked by controllers and interact with repositories to access and modify data.

**Repository:** Repositories are responsible for abstracting data access in the application, such as databases, external services, or any other data source. They provide an interface for data access and manipulation, hiding implementation details. This separation allows business logic in use cases to be decoupled from the data storage layer.

**Model:** The model represents the data structure of the application, defining how data is organized and stored. Models often directly map to business entities and may include information about data validation.

**Singleton:** The Singleton Pattern is a design pattern that ensures a class has only one single instance throughout the application. It is useful in scenarios where you want to control access to a shared resource, such as a database connection, a connection pool, or global configuration. Ensuring only one instance exists helps prevent conflicts and concurrency issues.

These concepts are commonly used together to create an organized and scalable application architecture. They help separate concerns, make code more modular, and facilitate software maintenance and testing.

 <p>Made with :heart: by Lucas Dantas.
