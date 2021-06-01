let dodger = document.querySelector('#dodger')
dodger.style.backgroundColor = 'green'

document.addEventListener('keydown', function(e){
    if (e.key == "ArrowLeft") {
        moveDodgerLeft();
    } else if (e.key == "ArrowRight") {
        moveDodgerRight();
    }
})

function moveDodgerLeft(){
    let leftNum = dodger.style.left.replace("px","")
    let left = parseInt(leftNum, 10)
    if (left > 0) {
        dodger.style.left = `${left - 1}px`
    }
}

function moveDodgerRight(){
    let rightNum = dodger.style.left.replace("px","")
    let right = parseInt(rightNum, 10)
    if (right < 360) {
        dodger.style.left = `${right + 1}px`
    }
}