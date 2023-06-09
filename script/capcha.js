var code;
function createCaptcha() {
    document.getElementById('captcha').innerHTML = "";
    var charsArray =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
    var lengthOtp = 6;
    var captcha = [];
    for (var i = 0; i < lengthOtp; i++) {
        //below code will not allow Repetition of Characters
        var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
        if (captcha.indexOf(charsArray[index]) == -1)
            captcha.push(charsArray[index]);
        else i--;
    }
    var canvas = document.createElement("canvas");
    canvas.id = "captcha";
    canvas.width = 200;
    canvas.height = 50;
    var ctx = canvas.getContext("2d");
    ctx.font = "35px Georgia";
    ctx.padding ="12px"
    ctx.strokeText(captcha.join(""), 0, 30);
    canvas.style.letterSpacing = 5 + 'px';
    //storing captcha so that can validate you can save it somewhere else according to your specific requirements
    code = captcha.join("");
    document.getElementById("captcha").appendChild(canvas);
}

function validateCaptcha(e) {
    if (document.getElementById("captchaText").value == code) {
        alert("Valid Captcha")
        document.getElementById("captchaText").value =""
    } else {
        alert("Invalid Captcha. try Again");
        createCaptcha();
    }
}