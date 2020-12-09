function compras(trabalho1, trabalho2){
    const comprarSoverte = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSoverte

    return { comprarSoverte, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))

/*
{
  comprarSoverte: true,
  comprarTv50: true,
  comprarTv32: false,
  manterSaudavel: false
}
{
  comprarSoverte: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
{
  comprarSoverte: true,
  comprarTv50: false,
  comprarTv32: true,
  manterSaudavel: false
}
{
  comprarSoverte: false,
  comprarTv50: false,
  comprarTv32: false,
  manterSaudavel: true
}
*/