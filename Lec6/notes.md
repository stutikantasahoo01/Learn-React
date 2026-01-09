#                                            -------Props-------
# In React, Props (short for "properties") are how you pass data from a parent component down to a child component.
# If you think of a React component as a JavaScript function, Props are the arguments you pass into that function. They make your components reusable and dynamic.
# 1. The Golden Rule of Props
# Props are Read-Only (Immutable). A child component can never change the props it receives. It can only "read" them. If you need to change data, you use State, which is a separate concept.

# 2. How to use Props:-
# Step 1: Pass the data in the Parent
# You pass props exactly like you write HTML attributes.
# Ex:-
// Parent Component (App.jsx)
import Card from './Card';
const App = () => {
  return (
    <div className="parent">
      <Card name="Stutikanta Sahoo" role="Developer" />
      <Card name="Amit Kumar" role="Designer" />
    </div>
  );
}

# Step 2: Receive the data in the Child
# The child component receives one single object (usually named props) as an argument.
// Child Component (Card.jsx)
const Card = (props) => {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <p>Position: {props.role}</p>
    </div>
  );
}
# What can you pass as Props:-
# You aren't limited to just strings. You can pass:
# Numbers: age={25}
# Booleans: isPremium={true}
# Arrays/Objects: data={['Apple', 'Banana']}
# Functions: Useful for allowing a child to talk back to a parent (like an onClick handler).