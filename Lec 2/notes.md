#                                  ------Import & Export------

# In React (and modern JavaScript), Import and Export are the mechanisms used to share code between different files. This keeps your project organized by allowing you to break your UI into small, reusable components.

# There are two main ways to handle this: Named and Default.

# 1. Default Export / Import
# Use this when a file only exports one main thing (like a single React component).
# Exporting: You use the export default keywords.
# Importing: You can name the import whatever you want in the receiving file.

# 2. Named Export / Import
# Use this when you want to export multiple things from a single file (like a collection of icons, constants, or utility functions).
# Exporting: You put export before the variable or function.
# Importing: You must use curly braces { } and use the exact name of the export.

# 3. Special Use Cases
# Importing Styles and Images
# In React, you also "import" non-code files like CSS or images so that build tools (like Vite or Webpack) can process them.

# Ex:
# import './App.css'; // Just the side effect of loading CSS
# import logo from './logo.svg'; // Importing a file path as a variable

# function App() {
#  return <img src={logo} alt="Logo" />;
# }

# 4. Importing Everything as an Object
# If a file has many named exports and you want them all at once:

# import * as Utils from './utilities';
# //Usage: Utils.add(1, 2)

# A Common Gotcha
# If you try to import a Default export using curly braces, or a Named export without curly braces, your app will throw an error saying the component is undefined. Always check if the file you are importing from has the word default in it!

# When we export using default method , there is no bound to use the same name of that component in the time of export , we can use change the name.

# When we export one more things then we we can use comma inside the curly bracket to export at a time many components.