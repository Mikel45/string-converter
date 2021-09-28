let upperCase = document.querySelector("#upper-case");
let lowerCase = document.querySelector("#lower-case");
let properCase = document.querySelector("#proper-case");
let sentenceCase = document.querySelector("#sentence-case");
let downloadButton = document.querySelector("#save-text-file");
let textArea = document.querySelector("textarea");

upperCase.addEventListener("click", function() {
    textArea.value = textArea.value.toUpperCase();
});
lowerCase.addEventListener("click", function() {
    textArea.value = textArea.value.toLowerCase();
});
properCase.addEventListener("click", function() {
    let strArr = textArea.value.split(" ");
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
    }
    textArea.value = strArr.join(" ");
});
sentenceCase.addEventListener("click", function() {
    let strArr = textArea.value.split(". ");
    for (let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1).toLowerCase();
    }
    textArea.value = strArr.join(". ");
});
downloadButton.addEventListener("click", function() {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textArea.value));
    element.setAttribute('download', "text.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});


