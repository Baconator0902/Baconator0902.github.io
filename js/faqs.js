var timesRan = {"FAQ1":0, "FAQ2":0, "FAQ3":0, "FAQ4":0, "FAQ5":0, "FAQ6":0,"FAQ7":0, "FAQ8":0,"FAQ9":0,"FAQ10":0};

function showAnswer(num) {
    divid = 'div' + num;
    plusId = 'plusImg' + num;
    minusId = 'minusImg' + num;
    var timesRanVar = "FAQ" + num;
    var x = document.getElementById(divid);
    var plusImg = document.getElementById(plusId);
    var minusImg = document.getElementById(minusId);
    if (x.style.display == "none" || timesRan[timesRanVar] == 0) {
        x.style.display = 'block';
        minusImg.style.display = 'inherit';
        plusImg.style.display = 'none';
        x.animate([{ opacity: "0" },{ opacity: "1" }], {duration: 300});
    } else {
        x.style.display = 'none';
        minusImg.style.display = 'none';
        plusImg.style.display = 'inherit';
    }
    timesRan[timesRanVar]++;
    console.log(timesRan[timesRanVar]);
}

function askAQuestion() {
    window.location.href = "askAQuestion.html";
}