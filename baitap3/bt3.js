function baitap3() {
    var n =+document.getElementById("soNguyen-bt3").value
    var ketQua = 1
    var i = 1
    while (i<=n) {
        ketQua*=i;
        i++
    }
    var noti3Div = document.getElementById("noti-bt3")
    noti3Div.style.display="block"
    noti3Div.innerHTML = ketQua

}