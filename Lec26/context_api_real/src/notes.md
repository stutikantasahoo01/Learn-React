# To use Context API

# 1-Create Context:- To create context we have to import create context in Context file ( write CreateContext then enter outside the function)
# Ex- import { createContext } from "react"; .Then store that context in a variable Ex:-Const ThemeDataContext=createContext(). Then we have to export manually like this ,Ex:-export Const ThemeDataContext=createContext()



# 2-Provide Data:-To provide data at first we have the provide data using the variable(we have already stored context) with .provider .
# Ex-<ThemeDataContext.Provider value="Lipu">
# {props.children}
# </ThemeDataContext.Provider>


# 3-Use Data:To use context data we have to import useContext.
# Steps: 1-At first we have to import both Context file and useConetext in that file where we want to use the context data .
# 2: const data = useContext(ThemeDataContext); Then we store the data in a varibale.
# 3: Then we can use the data 
