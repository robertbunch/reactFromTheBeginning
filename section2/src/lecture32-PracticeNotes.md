# Make a new Component called StatePractice
- import react and Component
- make it a class, specifically a subclass of Component
- export the class as default
- add the constructor and super
- initialize state in the constructor with a property of message and a value of empty string
- add a render method
- return a sanity check

# Add StatePractice to app.js
- go to app.js and import the component (remove EventAndState)
- render the component in app.js

# Add event and state change to StatePractice
- remove sanity check and replace it with an input box and an h3
- in the h3, render the message piece of state
- use onFocus on the input box so that when the user clicks on the input, state updates
- setState on "message" to notify the user that they agree to the site terms of service by filling out the form

# Add another event
- add the onMouseEnter event to the h3 so that it clears the text when the user hovers over it

# Add another tag and event
- add an image tag (point at any URL)
- add another property to your state variable in the constructor called imageWidth and init to an empty string
- use the onLoad event to grab the image width
- if the image width is greater than 100px, then console.log("Your image is big!")