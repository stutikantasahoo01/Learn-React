# React Router DOM is the standard library for routing in React web applications. It allows you to create a Single Page Application (SPA) with navigation that feels like a multi-page website, but without the full-page reloads. To install :npm i react-router-dom

# There are 5 components in React-Router-Dom:

# 1: BrowserRouter: The parent wrapper that stores the navigation history and keeps your UI in sync with the URL.

# 2: Routes: A container that looks through all its child routes to find the best match for the current URL.

# 3: Route: Defines a path and the specific component that should render when the path matches.

# 4: Link: The equivalent of an <a> tag, but it prevents a page refresh and handles the routing internally.

# 5: NavLink: A special version of Link that knows if it is "active" (useful for styling navigation bars).

# Types Of React-Router-Dom:-

# Router Type,Use Case,URL Appearance

# BrowserRouter => Standard web apps with a dedicated server => example.com/about

# HashRouter => Legacy browsers or static hosting (like GitHub Pages) => example.com/#/about

# MemoryRouter => Testing environments or non-browser apps (like React Native) => No URL change

# StaticRouter => Server-Side Rendering (SSR) => No URL change

# In React Router, the <Link> tag is the backbone of navigation. While it renders a standard <a> tag in the HTML, it works very differently under the hood.

# Why not just use <a>?
# If you use a standard <a href="/about">, the browser will perform a full page reload. This wipes out your application state, restarts your React app, and creates a noticeable "flash" of white screen.

# The <Link> component intercepts that click, prevents the reload, and simply updates the URL and the components on the screen. This is what makes a site feel like a "Single Page Application."