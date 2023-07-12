window.onload = function() {
    date()
}

function date() {
    let date = new Date()
    let input = document.getElementById("date")

    let month = date.getMonth() + 1
    if(month < 10) {
        month = "0" + month
    }

    let day = date.getDate() + 1
    if(day < 10) {
        day = "0" + day
    }
    input.value = date.getFullYear() + "-" + month + "-" + day
}

function out(name) {
    let input = document.getElementById(name)
    input.style.borderWidth = "3px"
}

function inner(name) {
    let input = document.getElementById(name)
    input.style.borderWidth = "4px"
}
