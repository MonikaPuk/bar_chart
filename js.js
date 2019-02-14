function randomIntBetween(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}
let i = 0;
let arr = [];
loop();
function loop(){
    let bar = document.createElement('div');
    document.querySelector(".bars").appendChild(bar);
    bar.classList.add('bar');
    bar.style.width = '30px';
    bar.style.height = randomIntBetween(0,35) + "px";
    console.log(randomIntBetween(0,35))
    i++;
    console.log(i);

     if(i > 15){
        //  find the firstbar
         const firstbar = document.querySelector(".bar")
        firstbar.remove();
     }
    setTimeout(loop, 600);
}