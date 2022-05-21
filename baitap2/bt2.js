function baitap2() {
    var x =+ document.getElementById("soNguyen").value
    var n =+ document.getElementById("soMu").value
    var ketQua = 0
    var i=1
    while (i<=n) {
        ketQua += x ** i
        i ++
    }
    var noti2Div = document.getElementById("noti-bt2")
    noti2Div.style.display="block"
    noti2Div.innerHTML = ketQua
}