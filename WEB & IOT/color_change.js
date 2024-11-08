
function color_change() {
    
 let RED    = document.getElementById("red_range").value;
 let GREEN  = document.getElementById("green_range").value;
 let BLUE   = document.getElementById("blue_range").value;
 let color  ='rgb(' + RED +','+ GREEN +',' +BLUE +')';
 
 
 document.getElementById('btn').style.backgroundColor=color;
 
} 
 function change(){
    let RED    = document.getElementById("red_range").value;
    let GREEN  = document.getElementById("green_range").value;
    let BLUE   = document.getElementById("blue_range").value;
    let color  ='rgb(' + RED +','+ GREEN +',' +BLUE +')';
    document.getElementById('btn_change').style.backgroundColor=color;
    document.body.style.backgroundColor=color;
    
}
 document.getElementById("red_range").addEventListener('input',color_change);
 document.getElementById("green_range").addEventListener('input',color_change);
 document.getElementById("blue_range").addEventListener('input',color_change);

 function update_red(val){document.getElementById("red_txt").value=val;}
 function update_green(val){document.getElementById("green_txt").value=val;}
 function update_blue(val){document.getElementById("blue_txt").value=val;}