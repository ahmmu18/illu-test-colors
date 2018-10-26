
// load illu btns
const btn404 = document.getElementById('404-btn')
const btnNoRetaurant = document.getElementById('no-retaurant-btn')
const btnOops = document.getElementById('oops-btn')
const compassBtn = document.getElementById('compass-btn')
const catCouchBtn = document.getElementById('cat-couch-btn')
const voucherBtn = document.getElementById('voucher-btn')

//brand colors btns
const pandoraColorsBtn = document.getElementById('pandora')
const opColorsBtn = document.getElementById('op')
const poColorsBtn = document.getElementById('po')

//cutom colors btn
const applyCustomColorBtn = document.getElementById('apply-custom-color')

//custom color inputs
const inputsFields = document.getElementsByTagName('input')
const inputBrandPrimary = document.getElementById('input-brand-color')
const inputBrandSecondary = document.getElementById('input-secondary-color')
const inputBrandSecondary5 = document.getElementById('input-secondary-color-5')
const inputBrandSecondary10 = document.getElementById('input-secondary-color-10')
const inputBrandSecondary20 = document.getElementById('input-secondary-color-20')
const inputBrandSecondary30 = document.getElementById('input-secondary-color-30')
const inputBrandSecondary40 = document.getElementById('input-secondary-color-40')
const inputBrandSecondary50 = document.getElementById('input-secondary-color-50')
const inputBrandSecondary60 = document.getElementById('input-secondary-color-60')
const inputBrandSecondary70 = document.getElementById('input-secondary-color-70')
const inputBrandSecondary80 = document.getElementById('input-secondary-color-80')
const inputDark = document.getElementById('input-dark-color')
const inputWhite = document.getElementById('input-white-color')

//svg output container
const svgOututputContainer = document.getElementById('svg-wrapper')

//svgs containers
const illu404 = document.getElementById('not-found')
const illuNoRestaurant = document.getElementById('no-restaurant')
const illuOops = document.getElementById('oops')
const illuCompass = document.getElementById('compass')
const illuCatCouch = document.getElementById('catCouch')
const illuVoucher = document.getElementById('voucher')

//fuckin different id path
const pathID = document.getElementById('SVGID_1_')
const circleID = document.getElementById('seven404')
const compassID = document.getElementById('compassEclipse')
const hatBottomID = document.getElementById('hatBottom')
const bellyButtonID = document.getElementById('bellybutton')


// colors vars
let pandoraDarkBlue = '#0b1238',
PandoraBrandPrimary = '#D70F64',
pandoraBrandSecondary = '#2C71BB',
pandoraBrandSecondary5 = '#F4F8FB',
pandoraBrandSecondary10 = '#E9F0F8',
pandoraBrandSecondary20 = '#D4E3F0',
pandoraBrandSecondary30 = '#BFD3EB',
pandoraBrandSecondary40 = '#ABC5E5',
pandoraBrandSecondary50 = '#95B9DD',
pandoraBrandSecondary60 = '#7FAAD5',
pandoraBrandSecondary70 = '#6C9BCF',
pandoraBrandSecondary80 = '#568CC8',
white = '#ffffff',
opDarkBlue = '#0b1238',
opBrandPrimary = '#FF3633',
opBrandSecondary = '#272CC0',
opBrandSecondary5 = '#F4F4FC',
opBrandSecondary10 = '#E9E9F8',
opBrandSecondary20 = '#D4D5F2',
opBrandSecondary30 = '#BEBFEC',
opBrandSecondary40 = '#A9ABE6',
opBrandSecondary50 = '#9395DF',
opBrandSecondary60 = '#7D80D9';
opBrandSecondary70 = '#676BD2',
opBrandSecondary80 = '#5256CD',
poDarkBlue = '#0b1238',
poBrandPrimary = '#00BD72',
poBrandSecondary = '#FF9100',
poBrandSecondary5 = '#FFF9F2',
poBrandSecondary10 = '#FFF4E5',
poBrandSecondary20 = '#FFE9CC',
poBrandSecondary30 = '#FFDEB2',
poBrandSecondary40 = '#FFD399',
poBrandSecondary50 = '#FFC87F',
poBrandSecondary60 = '#FFBD66';
poBrandSecondary70 = '#FFB24C',
poBrandSecondary80 = '#FFA733';


//show and hide illustrations
btn404.addEventListener('click', () => {
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illu404.classList.remove('hidden')
})
btnNoRetaurant.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'   
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuNoRestaurant.classList.remove('hidden')
})
btnOops.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuOops.classList.remove('hidden')
})
compassBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCompass.classList.remove('hidden')
})
catCouchBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCatCouch.classList.remove('hidden')
})
voucherBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList.remove('hidden')
})

// change to pandora colors
pandoraColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')
    let ellipse = document.getElementsByTagName('ellipse')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = pandoraDarkBlue
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = PandoraBrandPrimary
        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = pandoraBrandSecondary
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = pandoraBrandSecondary5
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = pandoraBrandSecondary10
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = pandoraBrandSecondary20
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = pandoraBrandSecondary30
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = pandoraBrandSecondary40
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = pandoraBrandSecondary50
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = pandoraBrandSecondary60
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = pandoraBrandSecondary70
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = pandoraBrandSecondary80
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
        }

        pathID.style.fill = pandoraBrandSecondary30
        circleID.style.fill = pandoraBrandSecondary40
        compassID.style.fill = pandoraBrandSecondary
        hatBottomID.style.fill = pandoraDarkBlue
        bellyButtonID.style.fill = pandoraBrandSecondary40

        // console.log(paths[i].classList)
    }


    // ellipse
    for(i=0; i<ellipse.length; i++) {
    if(ellipse[i].classList == 'one404' || ellipse[i].classList == 'no-res-1' || ellipse[i].classList == 'oops-7') {
        ellipse[i].style.fill = pandoraDarkBlue
    }
    if(ellipse[i].classList == 'four404' || ellipse[i].classList == 'no-res-5' || ellipse[i].classList == 'oops-8') {
        ellipse[i].style.fill = PandoraBrandPrimary
    }
    if(ellipse[i].classList == 'five404' || ellipse[i].classList == 'no-res-2' || ellipse[i].classList == 'oops-4') {
        ellipse[i].style.fill = pandoraBrandSecondary
    }
    if(ellipse[i].classList == 'two404' || ellipse[i].classList == 'oops-1') {
        ellipse[i].style.fill = pandoraBrandSecondary5
    }
    if(ellipse[i].classList == 'three404' || ellipse[i].classList == 'noResBG') {
        ellipse[i].style.fill = pandoraBrandSecondary10
    }
    if(ellipse[i].classList == 'no-res-4' || ellipse[i].classList == 'oops-5') {
        ellipse[i].style.fill = pandoraBrandSecondary20
    }
    if(ellipse[i].classList == 'color-secondary-30') {
        ellipse[i].style.fill = pandoraBrandSecondary30
    }
    if(ellipse[i].classList == 'no-res-3' || ellipse[i].classList == 'oops-2' || ellipse[i].classList == 'eight404') {
        ellipse[i].style.fill = pandoraBrandSecondary40
    }
    if(ellipse[i].classList == 'oops-6') {
        ellipse[i].style.fill = pandoraBrandSecondary50
    }
    if(ellipse[i].classList == 'no-res-6') {
        ellipse[i].style.fill = pandoraBrandSecondary60
    }
    if(ellipse[i].classList == 'bearToy' || ellipse[i].classList == 'color-secondary-70') {
        ellipse[i].style.fill = pandoraBrandSecondary70
    }
    if(ellipse[i].classList == 'color-secondary-80') {
        ellipse[i].style.fill = pandoraBrandSecondary80
    }
    if(ellipse[i].classList == 'six404' || ellipse[i].classList == 'no-res' || ellipse[i].classList == 'oops-3') {
        ellipse[i].style.fill = white
    }
}
})





opColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = opDarkBlue
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = opBrandPrimary
        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = opBrandSecondary
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = opBrandSecondary5
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = opBrandSecondary10
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = opBrandSecondary20
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = opBrandSecondary30
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = opBrandSecondary40
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = opBrandSecondary50
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = opBrandSecondary60
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = opBrandSecondary70
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = opBrandSecondary80
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
        }

        pathID.style.fill = opBrandSecondary30
        circleID.style.fill = opBrandSecondary40
        compassID.style.fill = opBrandSecondary
        hatBottomID.style.fill = opDarkBlue
        bellyButtonID.style.fill = opBrandSecondary40


        // console.log(paths[i].classList)
    }

    // ellipse
    let ellipse = document.getElementsByTagName('ellipse')

    for(i=0; i<ellipse.length; i++) {
        if(ellipse[i].classList == 'one404' || ellipse[i].classList == 'no-res-1' || ellipse[i].classList == 'oops-7') {
            ellipse[i].style.fill = pandoraDarkBlue
        }
        if(ellipse[i].classList == 'four404' || ellipse[i].classList == 'no-res-5' || ellipse[i].classList == 'oops-8') {
            ellipse[i].style.fill = opBrandPrimary
        }
        if(ellipse[i].classList == 'five404' || ellipse[i].classList == 'no-res-2' || ellipse[i].classList == 'oops-4') {
            ellipse[i].style.fill = opBrandSecondary
        }
        if(ellipse[i].classList == 'two404' || ellipse[i].classList == 'oops-1') {
            ellipse[i].style.fill = opBrandSecondary5
        }
        if(ellipse[i].classList == 'three404' || ellipse[i].classList == 'noResBG') {
            ellipse[i].style.fill = opBrandSecondary10
        }
        if(ellipse[i].classList == 'no-res-4' || ellipse[i].classList == 'oops-5') {
            ellipse[i].style.fill = opBrandSecondary20
        }
        if(ellipse[i].classList == 'color-secondary-30') {
            ellipse[i].style.fill = opBrandSecondary30
        }
        if(ellipse[i].classList == 'no-res-3' || ellipse[i].classList == 'oops-2' || ellipse[i].classList == 'eight404') {
            ellipse[i].style.fill = poBrandSecondary40
        }
        if(ellipse[i].classList == 'oops-6') {
            ellipse[i].style.fill = opBrandSecondary50
        }
        if(ellipse[i].classList == 'no-res-6') {
            ellipse[i].style.fill = opBrandSecondary60
        }
        if(ellipse[i].classList == 'bearToy' || ellipse[i].classList == 'color-secondary-70') {
            ellipse[i].style.fill = opBrandSecondary70
        }
        if(ellipse[i].classList == 'color-secondary-80') {
            ellipse[i].style.fill = opBrandSecondary80
        }
        if(ellipse[i].classList == 'six404' || ellipse[i].classList == 'no-res' || ellipse[i].classList == 'oops-3') {
            ellipse[i].style.fill = white
        }
    }


})


poColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = poDarkBlue
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = poBrandPrimary
        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = poBrandSecondary
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = poBrandSecondary5
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = poBrandSecondary10
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = poBrandSecondary20
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = poBrandSecondary30
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = poBrandSecondary40
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = poBrandSecondary50
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = poBrandSecondary60
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = poBrandSecondary70
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = poBrandSecondary80
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
        }

        pathID.style.fill = poBrandSecondary30
        circleID.style.fill = poBrandSecondary40
        compassID.style.fill = poBrandSecondary
        hatBottomID.style.fill = poDarkBlue
        bellyButtonID.style.fill = poBrandSecondary40


        // console.log(paths[i].classList)
    }


    // ellipse
    let ellipse = document.getElementsByTagName('ellipse')

    for(i=0; i<ellipse.length; i++) {
        if(ellipse[i].classList == 'one404' || ellipse[i].classList == 'no-res-1' || ellipse[i].classList == 'oops-7') {
            ellipse[i].style.fill = poDarkBlue
        }
        if(ellipse[i].classList == 'four404' || ellipse[i].classList == 'no-res-5' || ellipse[i].classList == 'oops-8') {
            ellipse[i].style.fill = poBrandPrimary
        }
        if(ellipse[i].classList == 'five404' || ellipse[i].classList == 'no-res-2' || ellipse[i].classList == 'oops-4') {
            ellipse[i].style.fill = poBrandSecondary
        }
        if(ellipse[i].classList == 'two404' || ellipse[i].classList == 'oops-1') {
            ellipse[i].style.fill = poBrandSecondary5
        }
        if(ellipse[i].classList == 'three404' || ellipse[i].classList == 'noResBG') {
            ellipse[i].style.fill = poBrandSecondary10
        }
        if(ellipse[i].classList == 'no-res-4' || ellipse[i].classList == 'oops-5') {
            ellipse[i].style.fill = poBrandSecondary20
        }
        if(ellipse[i].classList == 'color-secondary-30') {
            ellipse[i].style.fill = poBrandSecondary30
        }
        if(ellipse[i].classList == 'no-res-3' || ellipse[i].classList == 'oops-2' || ellipse[i].classList == 'eight404') {
            ellipse[i].style.fill = poBrandSecondary40
        }
        if(ellipse[i].classList == 'oops-6') {
            ellipse[i].style.fill = poBrandSecondary50
        }
        if(ellipse[i].classList == 'no-res-6') {
            ellipse[i].style.fill = poBrandSecondary60
        }
        if(ellipse[i].classList == 'bearToy' || ellipse[i].classList == 'color-secondary-70') {
            ellipse[i].style.fill = poBrandSecondary70
        }
        if(ellipse[i].classList == 'color-secondary-80') {
            ellipse[i].style.fill = poBrandSecondary80
        }
        if(ellipse[i].classList == 'six404' || ellipse[i].classList == 'no-res' || ellipse[i].classList == 'oops-3') {
            ellipse[i].style.fill = white
        }
    }
})


applyCustomColorBtn.addEventListener('click', () => {

    // console.log(inputBrandPrimary.id)

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-brand-color' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
                        paths[i].style.fill = inputBrandPrimary.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'four404' || ellipse[i].classList == 'no-res-5' || ellipse[i].classList == 'oops-8') {
                        ellipse[i].style.fill = inputBrandPrimary.value
                    }
                }

            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
                        paths[i].style.fill = inputBrandSecondary.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'five404' || ellipse[i].classList == 'no-res-2' || ellipse[i].classList == 'oops-4') {
                        ellipse[i].style.fill = inputBrandSecondary.value
                    }
                }
            } 

        compassID.style.fill = inputBrandSecondary.value
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-5' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
                        paths[i].style.fill = inputBrandSecondary5.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'two404' || ellipse[i].classList == 'oops-1') {
                        ellipse[i].style.fill = inputBrandSecondary5.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-10' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
                        paths[i].style.fill = inputBrandSecondary10.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'three404' || ellipse[i].classList == 'noResBG') {
                        ellipse[i].style.fill = inputBrandSecondary10.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-20' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
                        paths[i].style.fill = inputBrandSecondary20.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'no-res-4' || ellipse[i].classList == 'oops-5') {
                        ellipse[i].style.fill = inputBrandSecondary20.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-30' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'

                let paths = document.getElementsByTagName('path')

                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'color-secondary-30') {
                        paths[i].style.fill = inputBrandSecondary30.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'color-secondary-30') {
                        ellipse[i].style.fill = inputBrandSecondary30.value
                    }
                }
    
                pathID.style.fill = inputBrandSecondary30.value
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-40' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
                        paths[i].style.fill = inputBrandSecondary40.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'no-res-3' || ellipse[i].classList == 'oops-2' || ellipse[i].classList == 'eight404') {
                        ellipse[i].style.fill = inputBrandSecondary40.value
                    }
                }

                circleID.style.fill = inputBrandSecondary40.value
                bellyButtonID.style.fill = inputBrandSecondary40.value
            } 
    }


    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-50' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'oops-6') {
                        paths[i].style.fill = inputBrandSecondary50.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'oops-6') {
                        ellipse[i].style.fill = inputBrandSecondary50.value
                    }
                }
            } 
    }
    

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-60' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'no-res-6') {
                        paths[i].style.fill = inputBrandSecondary60.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'no-res-6') {
                        ellipse[i].style.fill = inputBrandSecondary60.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-70' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
                        paths[i].style.fill = inputBrandSecondary70.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'bearToy' || ellipse[i].classList == 'color-secondary-70') {
                        ellipse[i].style.fill = inputBrandSecondary70.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-secondary-color-80' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'color-secondary-80') {
                        paths[i].style.fill = inputBrandSecondary80.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'color-secondary-80') {
                        ellipse[i].style.fill = inputBrandSecondary80.value
                    }
                }
            } 
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-dark-color' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
                        paths[i].style.fill = inputDark.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'one404' || ellipse[i].classList == 'no-res-1' || ellipse[i].classList == 'oops-7') {
                        ellipse[i].style.fill = inputDark.value
                    }
                }
            } 

        hatBottomID.style.fill = inputDark.value
    }

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value == '') {
            inputsFields[i].style.borderColor = 'red'
        } 
            
            if(inputsFields[i].id == 'input-white-color' && inputsFields[i].value != '') {
                inputsFields[i].style.borderColor = 'grey'
                let paths = document.getElementsByTagName('path')
    
                for(i=0; i<paths.length; i++) {
    
                    if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
                        paths[i].style.fill = inputWhite.value
                    }
                }

                // ellipse
                let ellipse = document.getElementsByTagName('ellipse')
                for(i=0; i<ellipse.length; i++) {
                    if(ellipse[i].classList == 'six404' || ellipse[i].classList == 'no-res' || ellipse[i].classList == 'oops-3') {
                        ellipse[i].style.fill = inputWhite.value
                    }
                }
            } 
    }


})






let dummyFill = document.getElementById('dummyfillers')
let cleardummyFill = document.getElementById('cleardummyfillers')

dummyFill.addEventListener('click', () => {

    // let inputs = document.getElementsByTagName('input')

    for(i=0; i<inputsFields.length; i++) {
        inputsFields[i].value = 'yellow'
    }
})

cleardummyFill.addEventListener('click', () => {

    // let inputs = document.getElementsByTagName('input')

    for(i=0; i<inputsFields.length; i++) {
        inputsFields[i].value = ''
    }
})




