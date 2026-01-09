#                                             ------Vite------
# Vite is a bundler or tools which allows to make different types of folders.


#                                    ------React Fragment-------
# In React, a Fragment is a specialized component that allows you to group a list of children without adding extra nodes to the DOM.

# 1. The Problem: The "Div Soup"
# React components must return a single root element. Because of this rule, developers often wrap multiple elements in a <div> just to satisfy the requirement.

# The Issue:
# It clutters the DOM with unnecessary <div> tags.
# It can break layouts that rely on specific parent-child relationships (like CSS Flexbox or Grid).
# It creates a "nesting nightmare" that makes debugging harder.

# 2. The Solution: <React.Fragment>
# A Fragment tells React: "Treat these elements as a group, but when you render to the browser, act as if this wrapper doesn't exist."
# Short Syntax (The "Ghost" Tag)
# Most developers use this shorthand. It’s cleaner, though it doesn't support keys or attributes.
# Ex-
# function List() {
#   return (
#     <>
#       <li>Item 1</li>
#       <li>Item 2</li>
#     </>
#   );
# }

# Key Benefits:-
# Cleaner DOM: Keeps the HTML output lean and semantically correct.
# Performance: Slightly less memory usage because no extra DOM node is created.
# CSS Stability: Avoids styling issues where an extra div might accidentally inherit styles or disrupt a grid/flex layout.