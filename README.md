# Name of My Project.

Dev Stack.

# A Little description about my project.

🚀 Dev Stack

Dev Stack is a responsive technology discovery and stack-building web application built with React, TypeScript, and Tailwind CSS. It allows developers to explore popular technologies, view their category, difficulty level, rating, and description, and add their preferred technologies to a personalized Your Stack section.

The project uses a local JSON file as its technology data source and includes interactive features such as Add to Stack, Remove, Remove All, duplicate prevention, loading and error states, and React-Toastify notifications. It also includes a responsive navbar with a mobile menu, a hero section, technology cards, and a responsive footer.

🎯 Main Goal
The main goal of Dev Stack is to provide developers with a simple way to discover technologies and build their own development stack, while demonstrating practical React concepts such as components, props, state management, event handling, conditional rendering, array methods, API/data fetching, and responsive design.

# Technologies Used

React.js — UI and component-based architecture
TypeScript — Type safety and structured data
Tailwind CSS — Responsive styling and UI design
React Toastify — User notifications
Vite — Development and build tool
JSON — Technology data source


# 3 Key Features of Dev Stack

1. Explore Technologies — Browse technologies with their category, difficulty level, description, rating, and icon.

2. Build Your Tech Stack — Add technologies to your personal stack, remove individual items, or remove them all at once.

3. Responsive & Interactive UI — Fully responsive design with mobile navigation, loading/error states, and toast notifications for user actions.


# Some Questions Answers

# What is JSX, and why is it used in React?

JSX is a JavaScript syntax extension that lets us write HTML-like UI code inside JavaScript. React uses JSX because it makes building and managing user interfaces simpler and more readable.

# What is the difference between props and state?

Difference Between Props and State
Props = data coming into a component.
State = data managed inside a component.

# What does the useState hook do, and where did I use it in this project?

The useState hook is used to create and manage changing data in a React component. In this project, I used useState in the Technologies component to manage the fetched technologies and the user's selected technology stack.


# What does the useEffect hook do, and why did you need it to load the JSON data?

The useEffect hook is used to perform side effects in a React component. In this project, I used it to fetch and load the technology data from the JSON/API when the Technologies component was mounted.


# Why does every item in a .map() list need a unique key prop?

Every item in a .map() list needs a unique key so React can identify each item and efficiently update the UI when the list changes.

# What is conditional rendering? One place I used it (example: the empty stack message).

Conditional rendering means displaying different UI elements based on a condition. In this project, I used it to show an empty stack message when the user has not selected any technology.

* Example

{stack.length === 0 ? (
  <p>Your stack is empty</p>
) : (
  stack.map((technology) => (
    <div key={technology.id}>
      {technology.name}
    </div>
  ))
)}



# How do I pass data from a parent component to a child component, and how does a child send something back to the parent?

Data is passed from a parent to a child component through props. To send data back, the parent passes a callback function as a prop, and the child calls that function with the required data.

