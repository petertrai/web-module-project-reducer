# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* The onClick on the button triggers the handleClick helperfunction in appJs.
*  the useReducer hook's dispatch is called inside of the handleClick and it invokes the addOne action 
* this returns that the action type is going to be the ADD_ONE 
* reducer function returns the updated state for the action type of ADD ONE 
* useReducer updates the state. and rerendsers
* TotalDisplay shows the total plus 1.
