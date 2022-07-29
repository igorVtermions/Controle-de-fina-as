
const pay = document.querySelector('#salary')
const energy = document.querySelector('#light')
const superMarket = document.querySelector('#supermarket')
const rent = document.querySelector('#rent')
const credit = document.querySelector('#card')
const internet = document.querySelector('#net')
const others = document.querySelector('#others')
const view = document.querySelector('#vision')

function sum(){
    let salary = Number(pay.value)
    let light = Number(energy.value)
    let market = Number(superMarket.value)
    let home = Number(rent.value)
    let card = Number(credit.value)
    let net = Number(internet.value)
    let another = Number(others.value)

     



    return view.innerText =` R$ ${salary- ( light + market + home + card + net + another)}`

}