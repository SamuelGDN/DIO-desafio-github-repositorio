var num1;
var num2;
var soma;

function comparacao(n1,n2){
    soma = n1 + n2
    if(n1 == n2){
        alert(`${n1} e ${n2} possuem valores iguais`)
    }else{
        alert(`${n1} e ${n2} possuem valores diferentes.`)
    }
    if(n1 === n2){
        alert(`${n1} e ${n2} possuem valores e tipos iguais`)
    } else if(n1 !== n2){
        alert(`${n1} e ${n2} possuem valores iguais ou tipos diferentes`)
    }

    if (soma < 20){
        alert(`A soma de ${n1} e ${n2} é maior que 10.`);
    }
    
    if (soma < 20){
        alert(`A soma de ${n1} e ${n2} é menor que 20.`);
    }
}

function operacao(){
    var num1 = Number(prompt("Informe um número: "));
    var num2 = Number(prompt("Informe mais um número: "));
    comparacao(num1,num2);
}

operacao();

console.log(num1)