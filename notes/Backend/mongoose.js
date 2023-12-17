const mongoose = require("mongoose");

// Define a schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number },
});

// Create a model based on the schema
const User = mongoose.model("User", userSchema);

// Example usage
const newUser = new User({
  name: "John Doe",
  email: "john.doe@example.com",
  age: 25,
});

newUser
  .save()
  .then(() => console.log("User saved successfully"))
  .catch((err) => console.error("Error saving user:", err));
// Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js.
// It provides a higher-level, schema-based abstraction over the MongoDB Node.js driver,
//  making it easier to interact with MongoDB databases in a Node.js environment.

// Key features and concepts of Mongoose include:

// Object Data Modeling:

// Mongoose allows you to define a schema for your data models.
// A schema defines the structure of documents within a collection and enforces the data types of each field.

// Schema and Model:
// A Mongoose schema defines the shape of documents within a collection, including the fields and their data types.
//  A model is a compiled version of the schema that provides an interface for interacting with the database.

// Connection Management:

// Mongoose provides a connection management system that helps you connect to MongoDB databases easily.
// You can define connections, reuse them across your application, and handle events like connection errors.

// Middleware Support:
// Mongoose supports middleware, which are functions that can be executed at various points during the lifecycle of a document or query.
// This allows you to add custom logic before or after certain operations.

// Validation:
// Mongoose allows you to define validation rules for your data models.
// This helps ensure that the data stored in the database adheres to the specified schema.

// Query Building:
// Mongoose provides a powerful and flexible query API for interacting with MongoDB.
//  You can use methods like find, findOne, update, and more to perform CRUD operations.

// Population:
// Mongoose supports the concept of population, which allows you to reference documents in other collections and pull in the referenced data when querying.

// Middleware Hooks:
// Mongoose supports middleware hooks that allow you to execute functions before or after certain events,
//  such as saving a document or updating it.
