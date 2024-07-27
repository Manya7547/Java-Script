// add an event listener to the start button
// setInterval - execute the code of changing bg color repeatedly 
// add an event listener to stop button - clearInterval 

// colors codes start with '#' and are of 6 digits where each digit is a hexadecimal number 0 to 9 and A to F.

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    // Runs 6 times to generate 6 hex digits.
    for(let i = 0 ; i<6 ; i++){
        color += hex[Math.floor(Math.random() * 16)];  // choose the index randomly to make a 6 digit code 
    }
    return color;
}

let ref;
document.getElementById('start').addEventListener('click',
    function(){
        if(!ref){
            ref = setInterval(function(){
                document.body.style.backgroundColor = randomColor();
               },1000); 
        }
    }, false
);

document.getElementById('stop').addEventListener('click',
    function(){
        console.log('stopped');
        clearInterval(ref);
        ref = null; // dereference it to free it from memory 
    }
)