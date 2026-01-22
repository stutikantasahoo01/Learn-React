# localStorage.clear() 
# Used to clear the localstorage data.

# To clear the session storage
# sessionStorage.clear()

# T0 set the data in localStorage & sessionStorage
# localStorage.setItem('','')
# sessionStorage.setItem('','')

# To get item from localStorage & sessionStorage
#  const user=localStorage.getItem('user')
#  const username=localStorage.getItem('Lipu)

# To remove item from localStorage
# localStorage.remove('User')

# If we want to store data in localStorage in object or array format then we have to conver that into string during the pass 
# Ex:-// const user = {
  //   name: "Stutikanta Sahoo",
  //   age: 20,
  //   mail: "Stutikantasahoo@gmail.com",
  // };
  // localStorage.setItem("User", JSON.stringify(user));
 
# And when we retrieve the data to convert into previous type we use JSON.parse
# Ex:-const user=JSON.parse(localStorage.getItem('User'))
# console.log(user);
