
//declare reducers
const counterReducers = (state = 0, action) => {
    switch (action.type) {
      case "INCREMENT":
        return state + 1;
  
      case "DECREMENT":
        return state - 1;
  
      default:
        console.log("invalid operations");
        return state;
    }
  };


  export default counterReducers;