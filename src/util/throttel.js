const throttled = {};

// export default ({ getState, dispatch }) => next => action => {
//    let timer; 
//    if (!time)
//       return next(action);
//    if (throttled[action.type]) {
//       return;
//    }
//    throttled[action.type] = true;
//    setTimeout(() => {
//       throttled[action.type] = false;
//    }, time);
//    next(action);
// }

export default (func) => {
  let timer;
  return function (...args){
    const context = this;
    if(timer) clearTimeout()
    timer = setTimeout(() =>{
      timer = null
      func.apply(context, args)
    }, 500)
  }
}