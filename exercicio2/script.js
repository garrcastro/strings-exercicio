/* # Exercício 2

Observe a string abaixo.

```jsx
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";
``` */
const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

//a) Remova o excesso de espaços no final da string;
//b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;
console.log(`A string possuia ${minhaString.length} caracteres. Depois do 'trim' ficou com ${minhaString.trim().length} caracteres.`)

//c) Substitua os traços `________` por “sticioso”.
console.log(minhaString.replace("________" , "sticioso"))