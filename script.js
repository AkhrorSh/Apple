let back = document.querySelector('.back_arrow')
let forward = document.querySelector('.forward_arrow')
let iphone = document.querySelector('.iphone')

let NaturalTitaniume = document.querySelector('#NaturalTitaniume')
let BlueTitanium = document.querySelector('#BlueTitanium')
let WhiteTitanium = document.querySelector('#WhiteTitanium')
let BlackTitanium = document.querySelector('#BlackTitanium')

let iphone_color = document.querySelector('.iphone_color')

let sources = {
    first: "imgs/iphone-15-pro-model-unselect-gallery-1-202309.jfif",
    second: "imgs/iphone-15-pro-model-unselect-gallery-2-202309_GEO_US.jfif",
    NaturalTitaniume: [
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV1_GEO_US.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV2.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-naturaltitanium_AV3.jnatblue"
    ],
    BlueTitanium: [
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV1_GEO_US.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV2.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-bluetitanium_AV3.jblack"
    ],
    WhiteTitanium: [
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV1_GEO_US.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV2.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-whitetitanium_AV3.jfif" 
    ],
    BlackTitanium: [
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV1_GEO_US.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV2.jfif",
        "imgs/iphone-15-pro-finish-select-202309-6-7inch-blacktitanium_AV3.jfif" 
    ]
}
let color = ''
let idx = 0

NaturalTitaniume.onclick = () => {
    iphone.src = sources.NaturalTitaniume[0]
    color = "Natural Titanium"
    iphone_color.innerHTML = color
}
NaturalTitaniume.onmouseenter = () => {
    iphone_color.innerHTML = "Natural Titanium"
}
NaturalTitaniume.onmouseleave = () => {
    iphone_color.innerHTML = color
}


BlueTitanium.onclick = () => {
    iphone.src = sources.BlueTitanium[0]
    color = "Blue Titanium"
    iphone_color.innerHTML = color
}
BlueTitanium.onmouseenter = () => {  
    iphone_color.innerHTML = "Blue Titanium"
}
BlueTitanium.onmouseleave = () => {  
    iphone_color.innerHTML = color
}


WhiteTitanium.onclick = () => {
    iphone.src = sources.WhiteTitanium[0]
    color = "White Titanium"
    iphone_color.innerHTML = color
}
WhiteTitanium.onmouseenter = () => {  
    iphone_color.innerHTML = "White Titanium"
}
WhiteTitanium.onmouseleave = () => {  
    iphone_color.innerHTML = color
}


BlackTitanium.onclick = () => {
    iphone.src = sources.BlackTitanium[0]
    color = "Black Titanium"
    iphone_color.innerHTML = color
}
BlackTitanium.onmouseenter = () => {  
    iphone_color.innerHTML = "Black Titanium"
}
BlackTitanium.onmouseleave = () => {  
    iphone_color.innerHTML = color
}

//чуть чуть хардкод получился
back.onclick = () => {
    if (color == "Natural Titanium") {
        idx != -3 && idx < 2 ? idx-- : idx = 0
        let newIdx = idx != 0 ? idx+4 : idx = 0
        
        iphone.src = sources.NaturalTitaniume[newIdx]
    } else if (color == "Blue Titanium") {
        idx != -3 && idx < 2 ? idx-- : idx = 0
        let newIdx = idx != 0 ? idx+4 : idx = 0
        iphone.src = sources.BlueTitanium[newIdx]
    } else if (color == "White Titanium") {
        idx != -3 && idx < 2 ? idx-- : idx = 0
        let newIdx = idx != 0 ? idx+4 : idx = 0
        iphone.src = sources.WhiteTitanium[newIdx]
    } else if (color == "Black Titanium") {
        idx != -3 && idx < 2 ? idx-- : idx = 0
        let newIdx = idx != 0 ? idx+4 : idx = 0
        iphone.src = sources.BlackTitanium[newIdx]
    } else {
        iphone.src = sources.first
    }
}

forward.onclick = () => {
    if (color == "Natural Titanium") {
        idx != 3 && idx > -2 ? idx++ : idx = 0
        iphone.src = sources.NaturalTitaniume[idx]
        
    } else if (color == "Blue Titanium") {
        idx != 3 && idx > -2 ? idx++ : idx = 0
        iphone.src = sources.BlueTitanium[idx]
    } else if (color == "White Titanium") {
        idx != 3 && idx > -2 ? idx++ : idx = 0
        iphone.src = sources.WhiteTitanium[idx]
    } else if (color == "Black Titanium") {
        idx != 3 && idx > -2 ? idx++ : idx = 0
        iphone.src = sources.BlackTitanium[idx]
    } else {
        iphone.src = sources.second
    }
}










