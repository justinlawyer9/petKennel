## Pet Kennel React App
A simple, interactive React application demonstrating unidirectional data flow and state management in class components. The app allows users to toggle the emotional state and images of various pets housed in a virtual kennel.

## Features
Dynamic Rendering: Iterates through a dataset to generate pet profiles.

Toggle Logic: Flips between two states (e.g., Happy/Sad) including image and status changes.

Responsive Flexbox UI: A centered, wrap-around layout with a vibrant blue theme.

## Installation & Setup
To get this kennel up and running locally:

Clone the repository:

git clone <your-repo-url>

Install dependencies:

npm install

Start the development server:

npm start


## Structure of App

Layout: Flexbox with flexWrap: 'wrap' to ensure the kennel looks good on both mobile and desktop screens.

State: In App.jsx (Class Component), initialize your state using the data from data.js.

Mapping: Use .map() to render at least two ChildComponent cards.

Events: Implement a method in the Parent to change a child's image/status. Pass this method to the Child via props.

Child Logic: Complete ChildComponent.jsx to display the props and trigger the parent's method on button click.

