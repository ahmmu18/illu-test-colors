

//show & hide illustration on btn click
const illuButtonsWrapper = document.getElementById('illu-btns')
const illuButtons = document.getElementById('illu-btns').children
const svgsDivs = document.getElementById('svg-wrapper').children

illuButtonsWrapper.addEventListener('click', (e) => {
    let clickedBtnID = e.target.id
    let cleanBtnID = clickedBtnID.replace('-btn', '')


    //add & remove active class to the btn
    for(c=0; c < illuButtons.length; c++) {
        illuButtons[c].classList.remove('active')

        if(illuButtons[c].id == clickedBtnID) {
            illuButtons[c].classList += ' active'
        }
    }


    
    for (i=0; i<svgsDivs.length; i++) {
        if(clickedBtnID != 'illu-btns' && e.target.nodeName == 'BUTTON') {
            // console.log(e)
            clickedBtnID.classList += ' active'
            svgsDivs[i].classList += ' hidden'
            if(svgsDivs[i].id == cleanBtnID) {
                svgsDivs[i].classList.remove('hidden')
            }
        }
    }
})

// get all svg children elements
let svgElements = document.getElementsByTagName('svg')


// function to check element class name and apply fill to it
function applyFill(elementClassName, cssClassName, fillValue, inputField) {
    if(String(elementClassName.classList).includes(cssClassName)) {
        elementClassName.style.fill = fillValue
    }
    if(inputField) {
        inputField.style.color = 'white'
        inputField.style.background = `#${fillValue}`
        inputField.value = fillValue
    } else {
        return
    }
}


//colors values

// PANDORA
const pandoraColors = ['D70F64', '2C71BB', '427FC0', '568CC8', '6C9BCF', '7FAAD5', '95B9DD', 'ABC5E5', 'BFD3EB', 'D4E3F0', 'E9F0F8', 'F4F8FB', '0B1238', 'FFFFFF']

// ONLINEPIZZ
const onlinePizzaColors = ['FF3633', '272CC0', '3C41C6', '5256CD', '676BD2', '7D80D9', '9395DF', 'A9ABE6', 'BEBFEC', 'D4D5F2', 'E9E9F8', 'F4F4FC', '0B1238', 'FFFFFF']

// PIZZAONLINE
const pizzaOnlineColors = ['00BD72', 'FF9100', 'FF9C19', 'FFA733', 'FFB24C', 'FFBD66', 'FFC87F', 'FFD399', 'FFDEB2', 'FFE9CC', 'FFF4E5', 'FFF9F2', '0B1238', 'FFFFFF']

// brand colors buttons
const pandoraColorsBtn = document.getElementById('pandora')
const onlinePizzaColorsBtn = document.getElementById('op')
const pizzaOnlineColorsBtn = document.getElementById('po')

// pandora btn click
pandoraColorsBtn.addEventListener('click', () => {
    for (i=0; i<svgElements.length; i++) {
        
        let svgElementClassName = svgElements[i].children
        
        for(c=0; c<svgElementClassName.length; c++) {
            applyFill(svgElementClassName[c], 'brand-primary', pandoraColors[0], customColorsInputs[0])
            applyFill(svgElementClassName[c], 'brand-secondary', pandoraColors[1], customColorsInputs[1])
            applyFill(svgElementClassName[c], 'brand-secondary-90', pandoraColors[2], customColorsInputs[2])
            applyFill(svgElementClassName[c], 'brand-secondary-80', pandoraColors[3], customColorsInputs[3])
            applyFill(svgElementClassName[c], 'brand-secondary-70', pandoraColors[4], customColorsInputs[4])
            applyFill(svgElementClassName[c], 'brand-secondary-60', pandoraColors[5], customColorsInputs[5])
            applyFill(svgElementClassName[c], 'brand-secondary-50', pandoraColors[6], customColorsInputs[6])
            applyFill(svgElementClassName[c], 'brand-secondary-40', pandoraColors[7], customColorsInputs[7])
            applyFill(svgElementClassName[c], 'brand-secondary-30', pandoraColors[8], customColorsInputs[8])
            applyFill(svgElementClassName[c], 'brand-secondary-20', pandoraColors[9], customColorsInputs[9])
            applyFill(svgElementClassName[c], 'brand-secondary-10', pandoraColors[10], customColorsInputs[10])
            applyFill(svgElementClassName[c], 'brand-secondary-five', pandoraColors[11], customColorsInputs[11])
            applyFill(svgElementClassName[c], 'brand-dark', pandoraColors[12], customColorsInputs[12])
            applyFill(svgElementClassName[c], 'brand-white', pandoraColors[13], customColorsInputs[13])
        }
    }  
})


// onlinepizza btn click
onlinePizzaColorsBtn.addEventListener('click', () => {
    for (i=0; i<svgElements.length; i++) {
        
        let svgElementClassName = svgElements[i].children
        
        for(c=0; c<svgElementClassName.length; c++) {
            applyFill(svgElementClassName[c], 'brand-primary', onlinePizzaColors[0], customColorsInputs[0])
            applyFill(svgElementClassName[c], 'brand-secondary', onlinePizzaColors[1], customColorsInputs[1])
            applyFill(svgElementClassName[c], 'brand-secondary-90', onlinePizzaColors[2], customColorsInputs[2])
            applyFill(svgElementClassName[c], 'brand-secondary-80', onlinePizzaColors[3], customColorsInputs[3])
            applyFill(svgElementClassName[c], 'brand-secondary-70', onlinePizzaColors[4], customColorsInputs[4])
            applyFill(svgElementClassName[c], 'brand-secondary-60', onlinePizzaColors[5], customColorsInputs[5])
            applyFill(svgElementClassName[c], 'brand-secondary-50', onlinePizzaColors[6], customColorsInputs[6])
            applyFill(svgElementClassName[c], 'brand-secondary-40', onlinePizzaColors[7], customColorsInputs[7])
            applyFill(svgElementClassName[c], 'brand-secondary-30', onlinePizzaColors[8], customColorsInputs[8])
            applyFill(svgElementClassName[c], 'brand-secondary-20', onlinePizzaColors[9], customColorsInputs[9])
            applyFill(svgElementClassName[c], 'brand-secondary-10', onlinePizzaColors[10], customColorsInputs[10])
            applyFill(svgElementClassName[c], 'brand-secondary-five', onlinePizzaColors[11], customColorsInputs[11])
            applyFill(svgElementClassName[c], 'brand-dark', onlinePizzaColors[12], customColorsInputs[12])
            applyFill(svgElementClassName[c], 'brand-white', onlinePizzaColors[13], customColorsInputs[13])
        }
    }  
})


// pizzaonline btn click
pizzaOnlineColorsBtn.addEventListener('click', () => {
    for (i=0; i<svgElements.length; i++) {
        
        let svgElementClassName = svgElements[i].children //REMINDER: move this as global
        
        for(c=0; c<svgElementClassName.length; c++) {
            applyFill(svgElementClassName[c], 'brand-primary', pizzaOnlineColors[0], customColorsInputs[0])
            applyFill(svgElementClassName[c], 'brand-secondary', pizzaOnlineColors[1], customColorsInputs[1])
            applyFill(svgElementClassName[c], 'brand-secondary-90', pizzaOnlineColors[2], customColorsInputs[2])
            applyFill(svgElementClassName[c], 'brand-secondary-80', pizzaOnlineColors[3], customColorsInputs[3])
            applyFill(svgElementClassName[c], 'brand-secondary-70', pizzaOnlineColors[4], customColorsInputs[4])
            applyFill(svgElementClassName[c], 'brand-secondary-60', pizzaOnlineColors[5], customColorsInputs[5])
            applyFill(svgElementClassName[c], 'brand-secondary-50', pizzaOnlineColors[6], customColorsInputs[6])
            applyFill(svgElementClassName[c], 'brand-secondary-40', pizzaOnlineColors[7], customColorsInputs[7])
            applyFill(svgElementClassName[c], 'brand-secondary-30', pizzaOnlineColors[8], customColorsInputs[8])
            applyFill(svgElementClassName[c], 'brand-secondary-20', pizzaOnlineColors[9], customColorsInputs[9])
            applyFill(svgElementClassName[c], 'brand-secondary-10', pizzaOnlineColors[10], customColorsInputs[10])
            applyFill(svgElementClassName[c], 'brand-secondary-five', pizzaOnlineColors[11], customColorsInputs[11])
            applyFill(svgElementClassName[c], 'brand-dark', pizzaOnlineColors[12], customColorsInputs[12])
            applyFill(svgElementClassName[c], 'brand-white', pizzaOnlineColors[13], customColorsInputs[13])
        }
    }  
})



// apply custom colors
const customColorsInputs = document.getElementsByTagName('input')
const applyCustomColorBtn = document.getElementById('apply-custom-color')

applyCustomColorBtn.addEventListener('click', () => {
    for (i=0; i<svgElements.length; i++) {
        let svgElementClassName = svgElements[i].children
        for(c=0; c<svgElementClassName.length; c++) {
                applyFill(svgElementClassName[c], 'brand-primary', customColorsInputs[0].value, customColorsInputs[0])
                applyFill(svgElementClassName[c], 'brand-secondary', customColorsInputs[1].value, customColorsInputs[1])
                applyFill(svgElementClassName[c], 'brand-secondary-90', customColorsInputs[2].value, customColorsInputs[2])
                applyFill(svgElementClassName[c], 'brand-secondary-80', customColorsInputs[3].value, customColorsInputs[3])
                applyFill(svgElementClassName[c], 'brand-secondary-70', customColorsInputs[4].value, customColorsInputs[4])
                applyFill(svgElementClassName[c], 'brand-secondary-60', customColorsInputs[5].value, customColorsInputs[5])
                applyFill(svgElementClassName[c], 'brand-secondary-50', customColorsInputs[6].value, customColorsInputs[6])
                applyFill(svgElementClassName[c], 'brand-secondary-40', customColorsInputs[7].value, customColorsInputs[7])
                applyFill(svgElementClassName[c], 'brand-secondary-30', customColorsInputs[8].value, customColorsInputs[8])
                applyFill(svgElementClassName[c], 'brand-secondary-20', customColorsInputs[9].value, customColorsInputs[9])
                applyFill(svgElementClassName[c], 'brand-secondary-10', customColorsInputs[10].value, customColorsInputs[10])
                applyFill(svgElementClassName[c], 'brand-secondary-five', customColorsInputs[11].value, customColorsInputs[11])
                applyFill(svgElementClassName[c], 'brand-dark', customColorsInputs[12].value, customColorsInputs[12])
                applyFill(svgElementClassName[c], 'brand-white', customColorsInputs[13].value, customColorsInputs[13])
        }
    }
})


// apply custom color on enter keydown
document.addEventListener('keydown', (e) => {
    if(e.keyCode == 13) {
        for (i=0; i<svgElements.length; i++) {
            let svgElementClassName = svgElements[i].children
            for(c=0; c<svgElementClassName.length; c++) {
                applyFill(svgElementClassName[c], 'brand-primary', customColorsInputs[0].value, customColorsInputs[0])
                applyFill(svgElementClassName[c], 'brand-secondary', customColorsInputs[1].value, customColorsInputs[1])
                applyFill(svgElementClassName[c], 'brand-secondary-90', customColorsInputs[2].value, customColorsInputs[2])
                applyFill(svgElementClassName[c], 'brand-secondary-80', customColorsInputs[3].value, customColorsInputs[3])
                applyFill(svgElementClassName[c], 'brand-secondary-70', customColorsInputs[4].value, customColorsInputs[4])
                applyFill(svgElementClassName[c], 'brand-secondary-60', customColorsInputs[5].value, customColorsInputs[5])
                applyFill(svgElementClassName[c], 'brand-secondary-50', customColorsInputs[6].value, customColorsInputs[6])
                applyFill(svgElementClassName[c], 'brand-secondary-40', customColorsInputs[7].value, customColorsInputs[7])
                applyFill(svgElementClassName[c], 'brand-secondary-30', customColorsInputs[8].value, customColorsInputs[8])
                applyFill(svgElementClassName[c], 'brand-secondary-20', customColorsInputs[9].value, customColorsInputs[9])
                applyFill(svgElementClassName[c], 'brand-secondary-10', customColorsInputs[10].value, customColorsInputs[10])
                applyFill(svgElementClassName[c], 'brand-secondary-five', customColorsInputs[11].value, customColorsInputs[11])
                applyFill(svgElementClassName[c], 'brand-dark', customColorsInputs[12].value, customColorsInputs[12])
                applyFill(svgElementClassName[c], 'brand-white', customColorsInputs[13].value, customColorsInputs[13])
            }
        }
    }
})

// generate color pallate
const generateColorsBtn = document.getElementById('genrate-color-palette')
const generatedColorsContainer = document.getElementById('color-palette-wrapper')

generateColorsBtn.addEventListener('click', () => {

    for(i=0; i<customColorsInputs.length; i++) {

        if(customColorsInputs[i].value != '') {
            generatedColorsContainer.innerHTML += `
                <li>
                    <span style='background: #${customColorsInputs[i].value}'></span>
                    #${customColorsInputs[i].value}
                </li>  `
        } else {
            return
        }
    }
    generatedColorsContainer.innerHTML += `<div></div>`

})