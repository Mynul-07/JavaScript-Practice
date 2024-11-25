// Immediately Invoked Function Expression (IIFE)

(function chai() {
    //named IIFE
    console.log('DB connected')
})();

(function aurCode() {
    console.log('DB connected Two')
})();


/*argument*/ ((name) => {
    console.log(`DB connected Three ${name}`)
})('MySQL')//parameter