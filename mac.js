let lBtn = document.querySelector('.lBtn')
let rBtn = document.querySelector('.rBtn')
let p = document.querySelector('.p')

let price = 1999 


lBtn.onclick = () => {
    rBtn.classList.remove('blue')
    price = 1999
    if (!lBtn.classList.contains('blue')) {
        lBtn.classList.add('blue')
        p.innerHTML = price + '.00$'
    }
}

rBtn.onclick = () => {
    lBtn.classList.remove('blue')
    price = 1999
    if (!rBtn.classList.contains('blue')) {
        rBtn.classList.add('blue')
        price += 600
        p.innerHTML = price + '.00$'
    }
}


let sec = document.querySelector('.section')
document.onscroll = () => { document.querySelector('.price_block').style.display = "flex" }



color = ''
let macbook = document.querySelector('.macbook')
let macbook_color = document.querySelector('.macbook_color span')
let SpaceBlack = document.querySelector('.SpaceBlack')
let Silver = document.querySelector('.Silver')

Silver.onclick = () => {
    macbook.src = './macImg/mbp14-silver-gallery1-202310.jfif'
    color = "Silver"
    macbook_color.innerHTML = color
}

Silver.onmouseenter = () => {
    macbook_color.innerHTML = "Silver"
}
Silver.onmouseleave = () => {
    macbook_color.innerHTML = color
}


SpaceBlack.onclick = () => {
    macbook.src = './macImg/mbp14-m3-max-pro-spaceblack-gallery1-202310 (1).jfif'
    color = "Space Black"
    macbook_color.innerHTML = color
}

SpaceBlack.onmouseenter = () => {
    macbook_color.innerHTML = "Space Black"
}
SpaceBlack.onmouseleave = () => {
    macbook_color.innerHTML = color
}



let storage = document.querySelectorAll('.storage')
let priceForStorage = document.querySelectorAll('.priceForStorage')

storage.forEach((block, idx) => {
    block.onclick = () => { 
        storage.forEach(i => {
            i.classList.remove('blue')
        })
        storage[idx].classList.add('blue')

        price = 1999
        
        if (storage[idx].id === '1') {
            
            price += 200
            p.innerHTML = price + '.00$'
            
        } else if (storage[idx].id === '2') {
            
            price += 600
            p.innerHTML = price + '.00$'
        } else if (storage[idx].id === '3') {
            
            price += 1200
            p.innerHTML = price + '.00$'
        } else if (storage[idx].id === '4') {
            
            price += 2400
            p.innerHTML = price + '.00$'
        }

    }
})