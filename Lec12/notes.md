# In React, Hooks are functions that allow you to use state and other React features in functional components without writing a class. They provide a more powerful and expressive way to organize logic, making it easier to reuse code and manage component life cycles.

# The Rules of Hooks:
# Before diving into the types, it is important to follow two fundamental rules:
# 1. Top-Level Only: Never call Hooks inside loops, conditions, or nested functions.
# 2. React Functions Only: Only call Hooks from React functional components or custom Hooks.

# Core Types of React Hooks:
# 1. State Hooks
# These allow a component to "remember" information between renders.

# useState: The most common Hook. It returns a stateful value and a function to update it.
# useReducer: An alternative to useState for complex state logic involving multiple sub-values or when the next state depends on the previous one.

# 2. Effect Hooks: These handle "side effects" that happen outside the return of the component.

# useEffect: Used for data fetching, subscriptions, or manually changing the DOM. It runs after the component renders and can be configured to run only when certain values change.

# useLayoutEffect: Similar to useEffect, but it fires synchronously after all DOM mutations. Use this if you need to measure the DOM before the browser paints.

# 3. Context Hooks: useContext: Lets you subscribe to a React context without nesting. It allows you to access global data (like themes or user profiles) directly from any component.

# 4. Ref Hooks : useRef: Returns a mutable "ref" object that persists for the lifetime of the component. It is primarily used to access a DOM element directly or to keep a variable that doesn't trigger a re-render when changed.

# 5. Performance Hooks: These help optimize the application by avoiding unnecessary re-computations or re-renders.
# useMemo: Recomputes a memoized value only when one of its dependencies changes. This is useful for expensive calculations.

# useCallback: Returns a memoized version of a callback function. This is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.

# 6. Other Specialized Hooks
# useImperativeHandle: Customizes the instance value that is exposed to parent components when using ref.

# useDebugValue: Can be used to display a label for custom hooks in React DevTools.

# useId: Generates unique IDs that are stable across the server and client.

# Custom Hooks: You can also create your own Custom Hooks. This is simply a JavaScript function whose name starts with "use" and calls other Hooks. Custom Hooks allow you to extract component logic into reusable functions so that multiple components can share the same functionality.

# useState:State ko manage karne ke liye
# useEffect:Side effect ko manage karne ke liye(Jaise API call,DOM Manipulation,event listener)
# useContext:Global state ko consome karne ke liye without prop drilling.
# useReducer:Complex state management ke liye (Redux jaise chota version).
# useRef:Mutable values hold karne ke liye jo re-render aur trigger na karein,ye DOM access karne ke liye
# useMemo & useCallback:Optimization ke liye, unnecessary re-renders avoid karne ke liye