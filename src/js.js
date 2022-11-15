window.onload = () => {
    pen = () => {
        if (canvas.getContext) {
            
            
            let painting = false;
    
            var isTouchDevice = 'ontouchstart' in 
            document.documentElement;
            if(isTouchDevice){
                canvas.ontouchmove = (a) => {
                    ctx.beginPath();
                    ctx.arc(a.touches[0].clientX, a.touches[0].clientY, 10, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fill();
                }
            }else{
                canvas.onmousedown = (e) => {
                    ctx.beginPath();
                    ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.fill();
                    painting = true;
                }
                canvas.onmouseup = () => {
                        painting = false;
                }
                canvas.onmousemove = (e) => {
                    if(painting === true){
                        ctx.beginPath();
                        ctx.arc(e.clientX, e.clientY, 10, 0, 2 * Math.PI);
                        ctx.stroke();
                        ctx.fill();
                    }
                }
            } 
          }
    }
line = () => {

    }
}
