function baitap4() {
    var noti4Div = document.getElementById("noti-bt4")
    noti4Div.style.display="block"
    for(var i=1; i<=10; i++) {
        if (i%2===0) {
            noti4Div.innerHTML+=`<div style="background : red; color:white"> DIV chẳn ${i} </div> `
        

        }
        else {
            noti4Div.innerHTML+=`<div style="background : blue; color:white" > DIV lẻ ${i} </div> `
           
        }
    }
    
    
}