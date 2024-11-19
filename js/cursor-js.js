const cursor = document.getElementById('cursor');
const cursorBorder = document.getElementById('cursor-border');

let cursorX = 0,
cursorY = 0,
borderX = 0,
borderY = 0
let deviceType = "";
// if it is touch the device
const isTouchDevice = ()=>{
     try{
          document.createEvent('TouchEvent');
          deviceType = 'touch';
          return true;
     }catch(e){
          deviceType = 'mouse';
          return false;
     }
};
// move
const move = (e)=>{
     cursorX= e.clientX;
     cursorY = e.clientY;
     cursor.style.left = `${cursorX}px`;
     cursor.style.top = `${cursorY}px`;
}
document.addEventListener('mousemove',(e)=>{
     move(e);
});
// document.addEventListener('touchmove',(e)=>{
//      move(e);
// })
// document.addEventListener('touchend',(e)=>{
//      e.preventDefault();
// })

// border animation
const borderAnim = () =>{
     const gapV = 5;
     borderX += (cursorX - borderX) / gapV;
     borderY += (cursorY - borderY) /gapV;

     cursorBorder.style.left = `${borderX}px`;
     cursorBorder.style.top = `${borderY}px`;

     requestAnimationFrame(borderAnim);
}

requestAnimationFrame(borderAnim);