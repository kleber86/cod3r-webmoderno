const escola = "cod3r"

console.log(escola.charAt(4)) // r
console.log(escola.charAt(5)) // Não apresenta nada
console.log(escola.charCodeAt(3)) // 51 - Valor da tabela unicode
console.log(escola.indexOf(3)) // 3
console.log(escola.substring(1)) // od3r
console.log(escola.substring(0, 3)) // cod
console.log("Escola ".concat(escola).concat("!")) // Escola cod3r!
console.log(escola.replace(3, 'e')) // coder
console.log("Ana,Maria,Pedro".split(',')) // [ 'Ana', 'Maria', 'Pedro' ]
console.table("Ana,Maria,Pedro".split(',')) 
/*
┌─────────┬─────────┐
│ (index) │ Values  │
├─────────┼─────────┤
│    0    │  'Ana'  │
│    1    │ 'Maria' │
│    2    │ 'Pedro' │
└─────────┴─────────┘
*/