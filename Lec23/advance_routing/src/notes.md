# In React Router, the <Outlet /> component is a placeholder. It tells the parent route where to render its child components.

# If you think of a website as a house, the parent route is the foundation and walls (which stay the same), and the <Outlet /> is a modular room that changes its contents depending on which door (URL) you walk through.

# 1. The Core Concept: Nested Routing
# Most modern apps have a layout that doesn't change—like a Sidebar, Navbar, or Footer—while the middle section updates based on the page you are on. Instead of copying and pasting the Navbar into every single component, you use an <Outlet />.

# 2. How it looks in code
# You define your routes in a hierarchy. The component that contains the <Outlet /> is the "Parent."