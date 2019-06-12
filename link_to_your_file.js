var images = ['', '', '']
var index = 1
setInterval(function() {
    var img = document.querySelector('.')
    img.src = images[index]
    if(index === images.length - 1) {
        index = 0
    } else {
        index++
    }
}, 5000)