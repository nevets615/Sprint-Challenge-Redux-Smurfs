1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

concat, map, filter, 

object.assign 

2.  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are payloads of information that sends data from your application to your store. Reducers specify how the application's state changes in response to actions sent to the store. The store is an object that holds  the application's state tree. its like the highlander. There can be only one.

3.  What is the difference between Application state and Component state? When would be a good time to use one over the other?
Your application state is global, and your component state is local. Redux uses store to hold the state. That means any component anywhere in the app can access it if its wired correctlly.

Component state lives within a specific component. to acess it, children have to use props.


4.  What is middleware?

it catches actions before they reach the reducer.

5.  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
 
 redux-thunk allows you to write action creators that return a function instead of an action.

6.  Which `react-redux` method links up our `components` with our `redux store`?

Connect().