
function sumar(){ 
    let a = 0;
    let b = 0;
    if(document.getElementById("a").value != ''){
        a = parseInt(document.getElementById("a").value);
    }   
    if(document.getElementById("b").value != ''){
        b = parseInt(document.getElementById("b").value);    
    }    
    let c = a + b;    
    alert("El valor de a +b es: "+ c);
}
