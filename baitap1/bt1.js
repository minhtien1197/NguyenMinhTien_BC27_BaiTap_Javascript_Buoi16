function baitap1() {
    var noti1Div = document.getElementById("noti-bt1")
        noti1Div.style.display="block"
    var sum = 0
    var n=1
    do{sum += n
        n++
    }while(sum<10000)
    noti1Div.innerHTML += `  số dương nhỏ nhất : ${n-1} tổng sô nguyên là : ${sum}`
}