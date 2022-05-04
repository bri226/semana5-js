function getProduct(){
    value1 = parseInt(document.getElementById("valorA".value));
    value2 = parseInt(document.getElementById("valorB".value));
    document.getElementById("resultado").innerHTML = value1 * value2;
}