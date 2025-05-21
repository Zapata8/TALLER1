/* let valor = parseInt(prompt("Digite un valor")) */

/* if(valor == 0 ){
    alert("el valor es 0")
}else if(valor < 0){
    alert("el numero es negativo")
}else{
    alert("el numero es positivo")
} */

/* if(valor == 0 ){
    alert("el valor es 0")
}else if(valor < 0 ){
    alert("el valor es negativo")
}else{
    alert("el valor es positivo")
} */

 /*    let edad = parseInt(prompt("digite la edad"))
    if(edad == 18){
        alert("entra al equipo de mayores de edad")}
        else if (edad < 18){
            alert("entra a liga de menores")
        }else if(edad > 18 ){
            alert("entra a la liga de mayores")
        }else if(edad<=0){
            alert("edad no valida")
        }



         */

        let sexo = prompt("digite su sexo (M/F):")
        let  edad = parseInt ( prompt("digite la edad"))
        if(sexo== "M" && edad >= 18){
            document.writeln("puede ingresar al equipo de futbol masculino")
        }else{
            document.writeln("no pueden ingresar al equipo de futbol mascuino")
        }