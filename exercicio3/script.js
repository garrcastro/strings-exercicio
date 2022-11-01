/* # Exercício 3

A partir da frase a seguir, faça o que se pede

```
Jorge tem uma casa verde e com portão azul, com os dizeres: "BOAS VINDAS, mas não deixe o gato sair"
```

a) Crie uma `const` no seu código para guardar a frase (com aspas e tudo); */

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres \"BOAS VINDAS, mas não deixe o gato sair.\""

//b) Crie uma nova string a partir da primeira, trocando **verde** por **rosa**, e **azul** por **laranja**;
//**EXTRA:** tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”
const novaFrase = frase.replace("verde", "rosa").replace("azul", "laranja").replace("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR")

//c) Verifique se a nova string inclui **verde**, e se inclui **laranja**.
console.log(`${frase} \n${novaFrase} \nA nova frase possui a palavra verde? ${novaFrase.includes("verde")} \nA nova frase possui a palavra laranja? ${novaFrase.includes("laranja")} `);
