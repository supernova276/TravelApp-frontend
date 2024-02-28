export const debounce=(callback,delay)=>{
    let timerId;

    return function(){
       timerId=setTimeout((...args) => {  

        callback(...args)

       }, delay);

    }
}