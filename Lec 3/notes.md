#                                ------React DOM Vs Virtual DOM------
# 1. The Virtual DOM (The Designer)
# The Virtual DOM (VDOM) is a lightweight JavaScript object that lives in memory. It is a simplified "copy" of the real browser DOM.


# How it works: When your app’s state changes, React creates a brand new Virtual DOM tree. It then compares this new tree with the previous one (a process called Diffing).


# Why it exists: Changing the real browser DOM is "expensive" (slow) because the browser has to recalculate styles and layout for the whole page. Making changes to a JavaScript object (the VDOM) is nearly instantaneous.

# 2. ReactDOM (The Construction Crew)
# ReactDOM is the package (the "renderer") that actually talks to the browser. It takes the instructions from the Virtual DOM and applies them to the real screen.

# How it works: Once the Virtual DOM identifies exactly which small part of the UI needs to change, ReactDOM steps in to perform the Reconciliation. It tells the browser: "Don't rebuild the whole page; just change this one <span> tag."

# The Glue: It acts as the bridge between React's logic and the browser's physical structure.

#                                               ------JSX------
# JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows you to write HTML-like structures directly inside your JavaScript files.

# If React is the engine, JSX is the templating language that makes it much easier to visualize what your UI will look like.

# 1. What does JSX look like?
# Without JSX, writing UI in React is quite tedious. JSX allows you to write "HTML" that React then converts into JavaScript objects.

# With JSX:
# const element = <h1 className="title">Hello, world!</h1>;


# 2. Key Rules of JSX
# Because JSX is more powerful than HTML, it has a few strict rules you must follow:

# Return a Single Root Element: You cannot return two adjacent tags. You must wrap them in a parent div or a Fragment (<>...</>).

# CamelCase Property Names: Since JSX turns into JavaScript, you can't use attributes like class (which is a reserved word in JS). Instead, use className. Similarly, onclick becomes onClick.

# Close All Tags: Even "self-closing" tags like <img> or <br> must be closed: <img /> or <br />.

# JavaScript inside Curlies: You can embed any JavaScript expression (variables, functions, math) inside JSX by wrapping it in curly braces {}.

# 3. Why Use JSX?
# Readability: It looks like the UI you are building, making it easier for teams to understand the layout.

# Performance: JSX is optimized during the build step (using tools like Babel), making it faster than writing raw JavaScript.

# Security: It helps prevent Cross-Site Scripting (XSS) attacks because React escapes any values embedded in JSX before rendering them.