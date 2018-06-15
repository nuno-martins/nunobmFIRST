console.log("Hello World!");

var pessoa{
    nome= "Nuno";
    idade= 20;
}


console.log("olá" + pessoa.nome + "! Como estas?");

console.log(`olá ${pessoa.nome} ! Como te sentes hoje com a idade de ${pessoa.idade}`);

//duas variaveis iguais, usar qq um dos dois
function somar (a,b){
    return a+b;
}

var somar2 = function(a,b){
    return a+b;
}

console.log (somar(3,4));
console.log(somar2(3,4));
//arrow function
var somar3 = (a,b)=> {
    return a+b;
}
var somar4 = (a,b) => a+b;

var a =5;
var b = 5;

if (a==b){
//== iguais
// === igual e do mesmo tipo
    console.log("Equal");
} else {
    console.log("Not Equal");
}

var ao_quadrado = function (x){
    return X*X;
}

var ao_quadrado2 = (x) => { return x*x};

var ao_quadrado3=(x)=> x*x;

