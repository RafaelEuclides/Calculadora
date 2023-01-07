function adi(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var res = parseFloat(n1) + parseFloat(n2);
    document.getElementById("txtRes").value = res;
    document.getElementById("txtRes").innerHTML = res;
}

function sub(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var res = parseFloat(n1) - parseFloat(n2);
    document.getElementById("txtRes").value = res;
    document.getElementById("txtRes").innerHTML = res;
}

function mult(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var res = parseFloat(n1) * parseFloat(n2);
    document.getElementById("txtRes").value = res;
    document.getElementById("txtRes").innerHTML = res;
}

function div(){
    var n1 = document.getElementById("txtN1").value;
    var n2 = document.getElementById("txtN2").value;
    var res = parseFloat(n1) / parseFloat(n2);
    document.getElementById("txtRes").value = res;
    document.getElementById("txtRes").innerHTML = res;
}