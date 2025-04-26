import { array } from "./data.js";

let category = document.getElementById('category')
let from = document.getElementById('from')
let to = document.getElementById('to')
let search = document.getElementById('search')
let result = document.getElementById('result')
let productsC = document.getElementById('products')


let categories = [...new Set(array.map(item => item.category))]
categories.forEach(c => {
    let option = document.createElement('option')
    option.value = c
    option.textContent = c
    category.appendChild(option)
})

function dis (products) {
    productsC.innerHTML = ''
    result.textContent = `Найдено: ${products.length} товаров`

    products.forEach(product => {
        let div = document.createElement('div')
        div.className = 'product'

        let image = '5.jpg'

        div.innerHTML = `<img src="${image}" alt="${product.name}">
                        <h3>${product.name}</h3>
                         <h4>${product.description}</h4>
                         <h5>${product.price}</h5>`
    productsC.appendChild(div)
    })
}

search.addEventListener('click', () => {
    let select = category.value
    let min = parseInt(from.value) || 0
    let max = parseInt(to.value) || Infinity

    let filtered = array.filter(item => {
        let price = parseInt(item.price)
        let m = select ? item.category === select : true
        return m && price >= min && price <= max
    })
    dis(filtered)
})