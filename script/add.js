'use strict'

let scrollHeight = window.innerWidth;

// alert('Высота с учётом прокрутки: ' + scrollHeight);


if (scrollHeight < 600) {
    let elements = document.getElementsByClassName("ob-col-3"); //либо document.getElementsByClassName
    let i = 0;
    while (elements.length > i) {
        let element = elements[i];
        element.className = element.className.replace("ob-col-3", "ob-col-6");

    }
}

else {
    let j = 0;
    let elements2 = document.getElementsByClassName("ob-col-6");
    while (elements2.length > j) {
        let element = elements2[j];
        element.className = element.className.replace("ob-col-6", "ob-col-3");

    }
}