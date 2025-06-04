// Thay đổi nội dung búc thư ở đây
var letterContent =" Gửi em,

Vậy là mình đã bên nhau 200 ngày rồi. Anh biết con số này không nói lên tất cả, nhưng với anh, đó là quãng thời gian đủ để hiểu rằng: em rất quan trọng trong cuộc sống của anh.

Cảm ơn em vì đã luôn ở bên, vì những lúc kiên nhẫn lắng nghe, vì đã chấp nhận cả những phần chưa hoàn hảo của anh. Anh biết mình đôi khi còn vụng về, chưa nói được hết những điều em xứng đáng được nghe – nhưng thật lòng, anh trân trọng em và những gì cả hai đang có.

Mong rằng những ngày tiếp theo, mình vẫn sẽ cùng nhau cố gắng, cùng trưởng thành và cùng giữ gìn tình cảm này thật lâu.

Thương em.
An
Anh yêu của bé

"

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
durationWrite = 50 

// Hiệu ứng gõ chữ

function effectWrite () {
    var boxLetter = document.querySelector(".letterContent")
    letterContentSplited = letterContent.split("")
    
    letterContentSplited.forEach((val, index) => {
        setTimeout(() => {
            boxLetter.innerHTML += val    
        }, durationWrite* index)
    })
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".container").classList.add("active")
    }, 500)
})

var openBtn = document.querySelector(".openBtn")
openBtn.addEventListener("click", () => {
    document.querySelector(".cardValentine").classList.add("active")
    document.querySelector(".container").classList.add("close")
})

var cardValentine = document.querySelector(".cardValentine")

cardValentine.addEventListener("click", () => {
    cardValentine.classList.toggle("open")

    if(cardValentine.className.indexOf("open") != -1) {
        setTimeout(effectWrite, 500)
    } else {
        setTimeout(() => {
            document.querySelector(".letterContent").innerHTML = ""
        }, 1000)
    }
})
