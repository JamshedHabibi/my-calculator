function AC() {document.getElementById('display').innerHTML = "0";}
function input_divide() {document.getElementById('display').innerHTML += "/";}
function input_multiply() {document.getElementById('display').innerHTML += "*";}

function input_sqrt() {
    var sum = Math.sqrt(eval(document.getElementById('display').innerHTML));
    document.getElementById('display').innerHTML = sum;
}

function input_minus() {document.getElementById('display').innerHTML += "-"}
function input_plus() {document.getElementById('display').innerHTML += "+"}

function sum() {
    document.getElementById('display').innerHTML = eval(document.getElementById('display').innerHTML);
}

function backspace() {
    var str = document.getElementById('display').innerHTML;
    document.getElementById('display').innerHTML = str.substring(0, str.length-1);
}

function input1() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '1';
}

function input2() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '2';
}

function input3() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '3';
}

function input4() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '4';
}

function input5() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '5';
}
function input6() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '6';
}
function input7() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '7';
}
function input8() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '8';
}
function input9() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '9';
}

function input_decimal() {document.getElementById('display').innerHTML += '.';}

function input0() {
    if (document.getElementById('display').innerHTML == '0' ) {
        document.getElementById('display').innerHTML = '';
}
document.getElementById('display').innerHTML += '0';
}