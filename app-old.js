
// load illu btns
const btn404 = document.getElementById('404-btn')
const btnNoRetaurant = document.getElementById('no-retaurant-btn')
const btnOops = document.getElementById('oops-btn')
const compassBtn = document.getElementById('compass-btn')
const catCouchBtn = document.getElementById('cat-couch-btn')
const voucherBtn = document.getElementById('voucher-btn')
const creditCardBtn = document.getElementById('credit-card-btn')
const noAddressBtn = document.getElementById('no-address-btn')
const searchBtn = document.getElementById('search-btn')
const spaceBtn = document.getElementById('space-man-btn')
const callingBtn = document.getElementById('calling-btn')
const celebratingBtn = document.getElementById('celebrating-btn')
const riderBtn = document.getElementById('rider-btn')
const poolBtn = document.getElementById('pool-btn')
const chessBtn = document.getElementById('chess-btn')
const pumpingBtn = document.getElementById('pumping-btn')
const iceCreamBtn = document.getElementById('ice-cream-btn')
const giftBtn = document.getElementById('gift-btn')
const motorBtn = document.getElementById('motor-btn')
const netBtn = document.getElementById('net-btn')
const dliverBtn = document.getElementById('delivery-btn')
const emptyOrderBtn = document.getElementById('empty-order-btn')

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
const illuCreditCard = document.getElementById('credit-card')
const illuNoAddress = document.getElementById('no-address')
const illuSearch = document.getElementById('search-field')
const illuManSpace = document.getElementById('man-in-space')
const illuCalling = document.getElementById('calling')
const illuCelebrating = document.getElementById('celebrating')
const illuRider = document.getElementById('rider')
const illuPool = document.getElementById('pool')
const illuChess = document.getElementById('chess')
const illuPumping = document.getElementById('pumping')
const illuIceCream = document.getElementById('ice-cream')
const illuGift = document.getElementById('gift')
const illuMotor = document.getElementById('motor')
const illuNet = document.getElementById('net')
const illuDeliver = document.getElementById('deliver')
const illuEmptyOrder = document.getElementById('empty-order')

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
pandoraBrandSecondary70 = '#2c71bb',
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
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illu404.classList.remove('hidden')
})
btnNoRetaurant.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'   
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuNoRestaurant.classList.remove('hidden')
})
btnOops.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuOops.classList.remove('hidden')
})
compassBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuCompass.classList.remove('hidden')
})
catCouchBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuCatCouch.classList.remove('hidden')
})
voucherBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuVoucher.classList.remove('hidden')
})
creditCardBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuCreditCard.classList.remove('hidden')
})
noAddressBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuNoAddress.classList.remove('hidden')
})
searchBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuSearch.classList.remove('hidden')
})
spaceBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuManSpace.classList.remove('hidden')
})
callingBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuCalling.classList.remove('hidden')
})
celebratingBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuCelebrating.classList.remove('hidden')
})
riderBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuRider.classList.remove('hidden')
})
poolBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuPool.classList.remove('hidden')
})
chessBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuChess.classList.remove('hidden')
})
pumpingBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuPumping.classList.remove('hidden')
})
iceCreamBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuIceCream.classList.remove('hidden')
})

giftBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuGift.classList.remove('hidden')
})

motorBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuMotor.classList.remove('hidden')
})

netBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuNet.classList.remove('hidden')
})

dliverBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuEmptyOrder.classList += ' hidden'
    illuDeliver.classList.remove('hidden')
})

emptyOrderBtn.addEventListener('click', () => {
    illu404.classList += ' hidden'
    illuNoRestaurant.classList += ' hidden'
    illuOops.classList += ' hidden'
    illuCompass.classList += ' hidden'
    illuCatCouch.classList += ' hidden'
    illuVoucher.classList += ' hidden'
    illuCreditCard.classList += ' hidden'
    illuNoAddress.classList += ' hidden'
    illuSearch.classList += ' hidden'
    illuManSpace.classList += ' hidden'
    illuCalling.classList += ' hidden'
    illuCelebrating.classList += ' hidden'
    illuRider.classList += ' hidden'
    illuPool.classList += ' hidden'
    illuChess.classList += ' hidden'
    illuPumping.classList += ' hidden'
    illuIceCream.classList += ' hidden'
    illuGift.classList += ' hidden'
    illuMotor.classList += ' hidden'
    illuNet.classList += ' hidden'
    illuDeliver.classList += ' hidden'
    illuEmptyOrder.classList.remove('hidden')
})

// change to pandora colors
pandoraColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')
    let ellipse = document.getElementsByTagName('ellipse')
    let circles = document.getElementsByTagName('circle')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = pandoraDarkBlue
            inputDark.value = pandoraDarkBlue.substr(1, pandoraDarkBlue.length)
            inputDark.style.background = pandoraDarkBlue
            inputDark.style.color = white
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = PandoraBrandPrimary
            inputBrandPrimary.value = PandoraBrandPrimary.substr(1, PandoraBrandPrimary.length)
            inputBrandPrimary.style.background = PandoraBrandPrimary
            inputBrandPrimary.style.color = white

        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = pandoraBrandSecondary
            inputBrandSecondary.value = pandoraBrandSecondary.substr(1, pandoraBrandSecondary.length)
            inputBrandSecondary.style.background = pandoraBrandSecondary
            inputBrandSecondary.style.color = white
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = pandoraBrandSecondary5
            inputBrandSecondary5.value = pandoraBrandSecondary5.substr(1, pandoraBrandSecondary5.length)
            inputBrandSecondary5.style.background = pandoraBrandSecondary5
            inputBrandSecondary5.style.color = opDarkBlue
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = pandoraBrandSecondary10
            inputBrandSecondary10.value = pandoraBrandSecondary10.substr(1, pandoraBrandSecondary10.length)
            inputBrandSecondary10.style.background = pandoraBrandSecondary10
            inputBrandSecondary10.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = pandoraBrandSecondary20
            inputBrandSecondary20.value = pandoraBrandSecondary20.substr(1, pandoraBrandSecondary20.length)
            inputBrandSecondary20.style.background = pandoraBrandSecondary20
            inputBrandSecondary20.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = pandoraBrandSecondary30
            inputBrandSecondary30.value = pandoraBrandSecondary30.substr(1, pandoraBrandSecondary30.length)
            inputBrandSecondary30.style.background = pandoraBrandSecondary30
            inputBrandSecondary30.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = pandoraBrandSecondary40
            inputBrandSecondary40.value = pandoraBrandSecondary40.substr(1, pandoraBrandSecondary40.length)
            inputBrandSecondary40.style.background = pandoraBrandSecondary40
            inputBrandSecondary40.style.color = opDarkBlue
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = pandoraBrandSecondary50
            inputBrandSecondary50.value = pandoraBrandSecondary50.substr(1, pandoraBrandSecondary50.length)
            inputBrandSecondary50.style.background = pandoraBrandSecondary50
            inputBrandSecondary50.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = pandoraBrandSecondary60
            inputBrandSecondary60.value = pandoraBrandSecondary60.substr(1, pandoraBrandSecondary60.length)
            inputBrandSecondary60.style.background = pandoraBrandSecondary60
            inputBrandSecondary60.style.color = opDarkBlue
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = pandoraBrandSecondary70
            inputBrandSecondary70.value = pandoraBrandSecondary70.substr(1, pandoraBrandSecondary70.length)
            inputBrandSecondary70.style.background = pandoraBrandSecondary70
            inputBrandSecondary70.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = pandoraBrandSecondary80
            inputBrandSecondary80.value = pandoraBrandSecondary80.substr(1, pandoraBrandSecondary80.length)
            inputBrandSecondary80.style.background = pandoraBrandSecondary80
            inputBrandSecondary80.style.color = white
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
            inputWhite.value = white.substr(1, white.length)
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


    // circles
    for(i=0; i<circles.length; i++) {
        if(circles[i].classList == 'one404' || circles[i].classList == 'no-res-1' || circles[i].classList == 'oops-7') {
            circles[i].style.fill = pandoraDarkBlue
        }
        if(circles[i].classList == 'four404' || circles[i].classList == 'no-res-5' || circles[i].classList == 'oops-8') {
            circles[i].style.fill = PandoraBrandPrimary
        }
        if(circles[i].classList == 'five404' || circles[i].classList == 'no-res-2' || circles[i].classList == 'oops-4') {
            circles[i].style.fill = pandoraBrandSecondary
        }
        if(circles[i].classList == 'two404' || circles[i].classList == 'oops-1') {
            circles[i].style.fill = pandoraBrandSecondary5
        }
        if(circles[i].classList == 'three404' || circles[i].classList == 'noResBG') {
            circles[i].style.fill = pandoraBrandSecondary10
        }
        if(circles[i].classList == 'no-res-4' || circles[i].classList == 'oops-5') {
            circles[i].style.fill = pandoraBrandSecondary20
        }
        if(circles[i].classList == 'color-secondary-30') {
            circles[i].style.fill = pandoraBrandSecondary30
        }
        if(circles[i].classList == 'no-res-3' || circles[i].classList == 'oops-2' || circles[i].classList == 'eight404') {
            circles[i].style.fill = pandoraBrandSecondary40
        }
        if(circles[i].classList == 'oops-6') {
            circles[i].style.fill = pandoraBrandSecondary50
        }
        if(circles[i].classList == 'no-res-6') {
            circles[i].style.fill = pandoraBrandSecondary60
        }
        if(circles[i].classList == 'bearToy' || circles[i].classList == 'color-secondary-70') {
            circles[i].style.fill = pandoraBrandSecondary70
        }
        if(circles[i].classList == 'color-secondary-80') {
            circles[i].style.fill = pandoraBrandSecondary80
        }
        if(circles[i].classList == 'six404' || circles[i].classList == 'no-res' || circles[i].classList == 'oops-3') {
            circles[i].style.fill = white
        }
}
})





opColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = opDarkBlue
            inputDark.value = opDarkBlue.substr(1, opDarkBlue.length)
            inputDark.style.background = opDarkBlue
            inputDark.style.color = white
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = opBrandPrimary
            inputBrandPrimary.value = opBrandPrimary.substr(1, opBrandPrimary.length)
            inputBrandPrimary.style.background = opBrandPrimary
            inputBrandPrimary.style.color = white
            
        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = opBrandSecondary
            inputBrandSecondary.value = opBrandSecondary.substr(1, opBrandSecondary.length)
            inputBrandSecondary.style.background = opBrandSecondary
            inputBrandSecondary.style.color = white
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = opBrandSecondary5
            inputBrandSecondary5.value = opBrandSecondary5.substr(1, opBrandSecondary5.length)
            inputBrandSecondary5.style.background = opBrandSecondary5
            inputBrandSecondary5.style.color = opDarkBlue
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = opBrandSecondary10
            inputBrandSecondary10.value = opBrandSecondary10.substr(1, opBrandSecondary10.length)
            inputBrandSecondary10.style.background = opBrandSecondary10
            inputBrandSecondary10.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = opBrandSecondary20
            inputBrandSecondary20.value = opBrandSecondary20.substr(1, opBrandSecondary20.length)
            inputBrandSecondary20.style.background = opBrandSecondary20
            inputBrandSecondary20.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = opBrandSecondary30
            inputBrandSecondary30.value = opBrandSecondary30.substr(1, opBrandSecondary30.length)
            inputBrandSecondary30.style.background = opBrandSecondary30
            inputBrandSecondary30.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = opBrandSecondary40
            inputBrandSecondary40.value = opBrandSecondary40.substr(1, opBrandSecondary40.length)
            inputBrandSecondary40.style.background = opBrandSecondary40
            inputBrandSecondary40.style.color = opDarkBlue
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = opBrandSecondary50
            inputBrandSecondary50.value = opBrandSecondary50.substr(1, opBrandSecondary50.length)
            inputBrandSecondary50.style.background = opBrandSecondary50
            inputBrandSecondary50.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = opBrandSecondary60
            inputBrandSecondary60.value = opBrandSecondary60.substr(1, opBrandSecondary60.length)
            inputBrandSecondary60.style.background = opBrandSecondary60
            inputBrandSecondary60.style.color = opDarkBlue
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = opBrandSecondary70
            inputBrandSecondary70.value = opBrandSecondary70.substr(1, opBrandSecondary70.length)
            inputBrandSecondary70.style.background = opBrandSecondary70
            inputBrandSecondary70.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = opBrandSecondary80
            inputBrandSecondary80.value = opBrandSecondary80.substr(1, opBrandSecondary80.length)
            inputBrandSecondary80.style.background = opBrandSecondary80
            inputBrandSecondary80.style.color = white
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
            inputWhite.value = white.substr(1, white.length)
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
            ellipse[i].style.fill = opBrandSecondary40
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




    // circles
    let circles = document.getElementsByTagName('circle')

    for(i=0; i<circles.length; i++) {
        if(circles[i].classList == 'one404' || circles[i].classList == 'no-res-1' || circles[i].classList == 'oops-7') {
            circles[i].style.fill = pandoraDarkBlue
        }
        if(circles[i].classList == 'four404' || circles[i].classList == 'no-res-5' || circles[i].classList == 'oops-8') {
            circles[i].style.fill = opBrandPrimary
        }
        if(circles[i].classList == 'five404' || circles[i].classList == 'no-res-2' || circles[i].classList == 'oops-4') {
            circles[i].style.fill = opBrandSecondary
        }
        if(circles[i].classList == 'two404' || circles[i].classList == 'oops-1') {
            circles[i].style.fill = opBrandSecondary5
        }
        if(circles[i].classList == 'three404' || circles[i].classList == 'noResBG') {
            circles[i].style.fill = opBrandSecondary10
        }
        if(circles[i].classList == 'no-res-4' || circles[i].classList == 'oops-5') {
            circles[i].style.fill = opBrandSecondary20
        }
        if(circles[i].classList == 'color-secondary-30') {
            circles[i].style.fill = opBrandSecondary30
        }
        if(circles[i].classList == 'no-res-3' || circles[i].classList == 'oops-2' || circles[i].classList == 'eight404') {
            circles[i].style.fill = opBrandSecondary40
        }
        if(circles[i].classList == 'oops-6') {
            circles[i].style.fill = opBrandSecondary50
        }
        if(circles[i].classList == 'no-res-6') {
            circles[i].style.fill = opBrandSecondary60
        }
        if(circles[i].classList == 'bearToy' || circles[i].classList == 'color-secondary-70') {
            circles[i].style.fill = opBrandSecondary70
        }
        if(circles[i].classList == 'color-secondary-80') {
            circles[i].style.fill = opBrandSecondary80
        }
        if(circles[i].classList == 'six404' || circles[i].classList == 'no-res' || circles[i].classList == 'oops-3') {
            circles[i].style.fill = white
        }
    }


})


poColorsBtn.addEventListener('click', () => {
    let paths = document.getElementsByTagName('path')

    for(i=0; i<paths.length; i++) {

        if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
            paths[i].style.fill = poDarkBlue
            inputDark.value = poDarkBlue.substr(1, poDarkBlue.length)
            inputDark.style.background = poDarkBlue
            inputDark.style.color = white
        }
        if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
            paths[i].style.fill = poBrandPrimary
            inputBrandPrimary.value = poBrandPrimary.substr(1, poBrandPrimary.length)
            inputBrandPrimary.style.background = poBrandPrimary
            inputBrandPrimary.style.color = white
        }
        if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
            paths[i].style.fill = poBrandSecondary
            inputBrandSecondary.value = poBrandSecondary.substr(1, poBrandSecondary.length)
            inputBrandSecondary.style.background = poBrandSecondary
            inputBrandSecondary.style.color = white
        }
        if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
            paths[i].style.fill = poBrandSecondary5
            inputBrandSecondary5.value = poBrandSecondary5.substr(1, poBrandSecondary5.length)
            inputBrandSecondary5.style.background = poBrandSecondary5
            inputBrandSecondary5.style.color = opDarkBlue
        }
        if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
            paths[i].style.fill = poBrandSecondary10
            inputBrandSecondary10.value = poBrandSecondary10.substr(1, poBrandSecondary10.length)
            inputBrandSecondary10.style.background = poBrandSecondary10
            inputBrandSecondary10.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
            paths[i].style.fill = poBrandSecondary20
            inputBrandSecondary20.value = poBrandSecondary20.substr(1, poBrandSecondary20.length)
            inputBrandSecondary20.style.background = poBrandSecondary20
            inputBrandSecondary20.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-30') {
            paths[i].style.fill = poBrandSecondary30
            inputBrandSecondary30.value = poBrandSecondary30.substr(1, poBrandSecondary30.length)
            inputBrandSecondary30.style.background = poBrandSecondary30
            inputBrandSecondary30.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
            paths[i].style.fill = poBrandSecondary40
            inputBrandSecondary40.value = poBrandSecondary40.substr(1, poBrandSecondary40.length)
            inputBrandSecondary40.style.background = poBrandSecondary40
            inputBrandSecondary40.style.color = opDarkBlue
        }
        if(paths[i].classList == 'oops-6') {
            paths[i].style.fill = poBrandSecondary50
            inputBrandSecondary50.value = poBrandSecondary50.substr(1, poBrandSecondary50.length)
            inputBrandSecondary50.style.background = poBrandSecondary50
            inputBrandSecondary50.style.color = opDarkBlue
        }
        if(paths[i].classList == 'no-res-6') {
            paths[i].style.fill = poBrandSecondary60
            inputBrandSecondary60.value = poBrandSecondary60.substr(1, poBrandSecondary60.length)
            inputBrandSecondary60.style.background = poBrandSecondary60
            inputBrandSecondary60.style.color = opDarkBlue
        }
        if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
            paths[i].style.fill = poBrandSecondary70
            inputBrandSecondary70.value = poBrandSecondary70.substr(1, poBrandSecondary70.length)
            inputBrandSecondary70.style.background = poBrandSecondary70
            inputBrandSecondary70.style.color = opDarkBlue
        }
        if(paths[i].classList == 'color-secondary-80') {
            paths[i].style.fill = poBrandSecondary80
            inputBrandSecondary80.value = poBrandSecondary80.substr(1, poBrandSecondary80.length)
            inputBrandSecondary80.style.background = poBrandSecondary80
            inputBrandSecondary80.style.color = opDarkBlue
        }
        if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
            paths[i].style.fill = white
            inputWhite.value = white.substr(1, white.length)
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



    // circles
    let circles = document.getElementsByTagName('circle')

    for(i=0; i<circles.length; i++) {
        if(circles[i].classList == 'one404' || circles[i].classList == 'no-res-1' || circles[i].classList == 'oops-7') {
            circles[i].style.fill = poDarkBlue
        }
        if(circles[i].classList == 'four404' || circles[i].classList == 'no-res-5' || circles[i].classList == 'oops-8') {
            circles[i].style.fill = poBrandPrimary
        }
        if(circles[i].classList == 'five404' || circles[i].classList == 'no-res-2' || circles[i].classList == 'oops-4') {
            circles[i].style.fill = poBrandSecondary
        }
        if(circles[i].classList == 'two404' || circles[i].classList == 'oops-1') {
            circles[i].style.fill = poBrandSecondary5
        }
        if(circles[i].classList == 'three404' || circles[i].classList == 'noResBG') {
            circles[i].style.fill = poBrandSecondary10
        }
        if(circles[i].classList == 'no-res-4' || circles[i].classList == 'oops-5') {
            circles[i].style.fill = poBrandSecondary20
        }
        if(circles[i].classList == 'color-secondary-30') {
            circles[i].style.fill = poBrandSecondary30
        }
        if(circles[i].classList == 'no-res-3' || circles[i].classList == 'oops-2' || circles[i].classList == 'eight404') {
            circles[i].style.fill = poBrandSecondary40
        }
        if(circles[i].classList == 'oops-6') {
            circles[i].style.fill = poBrandSecondary50
        }
        if(circles[i].classList == 'no-res-6') {
            circles[i].style.fill = poBrandSecondary60
        }
        if(circles[i].classList == 'bearToy' || circles[i].classList == 'color-secondary-70') {
            circles[i].style.fill = poBrandSecondary70
        }
        if(circles[i].classList == 'color-secondary-80') {
            circles[i].style.fill = poBrandSecondary80
        }
        if(circles[i].classList == 'six404' || circles[i].classList == 'no-res' || circles[i].classList == 'oops-3') {
            circles[i].style.fill = white
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
                inputsFields[i].style.background = '#' + inputBrandPrimary.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary5.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary10.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary20.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary30.value

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
                inputsFields[i].style.background = '#' + inputBrandSecondary40.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary50.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary60.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary70.value
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
                inputsFields[i].style.background = '#' + inputBrandSecondary80.value
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
                inputsFields[i].style.background = '#' + inputDark.value
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
                inputsFields[i].style.background = '#' + inputWhite.value
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
        inputsFields[i].style.background = 'yellow'
        inputsFields[i].style.color = '#333'
    }
})

cleardummyFill.addEventListener('click', () => {

    // let inputs = document.getElementsByTagName('input')

    for(i=0; i<inputsFields.length; i++) {
        inputsFields[i].value = ''
        inputsFields[i].style.background = 'white'
        inputsFields[i].style.color = '#333'
    }
})





// enter on input to apply the color
let customColorsInputs = document.getElementsByTagName('input')

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 13) {
        for(i=0; i<customColorsInputs.length; i++) {
            customColorsInputs[i].value




            for(i=0; i<inputsFields.length; i++) {
                if(inputsFields[i].value == '') {
                    inputsFields[i].style.borderColor = 'red'
                } 
                    
                    if(inputsFields[i].id == 'input-brand-color' && inputsFields[i].value != '') {
                        inputsFields[i].style.borderColor = 'grey'
                        let paths = document.getElementsByTagName('path')

                        inputsFields[0].style.background = `#${inputsFields[0].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'four404' || paths[i].classList == 'no-res-5' || paths[i].classList == 'oops-8') {
                                paths[i].style.fill = customColorsInputs[0].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'four404' || ellipse[i].classList == 'no-res-5' || ellipse[i].classList == 'oops-8') {
                                ellipse[i].style.fill = customColorsInputs[0].value
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

                        inputsFields[1].style.background = `#${inputsFields[1].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'five404' || paths[i].classList == 'no-res-2' || paths[i].classList == 'oops-4') {
                                paths[i].style.fill = customColorsInputs[1].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'five404' || ellipse[i].classList == 'no-res-2' || ellipse[i].classList == 'oops-4') {
                                ellipse[i].style.fill = customColorsInputs[1].value
                            }
                        }
                    } 
        
                compassID.style.fill = customColorsInputs[1].value
            }
        
            for(i=0; i<inputsFields.length; i++) {
                if(inputsFields[i].value == '') {
                    inputsFields[i].style.borderColor = 'red'
                } 
                    
                    if(inputsFields[i].id == 'input-secondary-color-5' && inputsFields[i].value != '') {
                        inputsFields[i].style.borderColor = 'grey'
                        let paths = document.getElementsByTagName('path')

                        inputsFields[2].style.background = `#${inputsFields[2].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'two404' || paths[i].classList == 'oops-1') {
                                paths[i].style.fill = customColorsInputs[2].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'two404' || ellipse[i].classList == 'oops-1') {
                                ellipse[i].style.fill = customColorsInputs[2].value
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

                        inputsFields[3].style.background = `#${inputsFields[3].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'three404' || paths[i].classList == 'noResBG') {
                                paths[i].style.fill = customColorsInputs[3].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'three404' || ellipse[i].classList == 'noResBG') {
                                ellipse[i].style.fill = customColorsInputs[3].value
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

                        inputsFields[4].style.background = `#${inputsFields[4].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'no-res-4' || paths[i].classList == 'oops-5') {
                                paths[i].style.fill = customColorsInputs[4].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'no-res-4' || ellipse[i].classList == 'oops-5') {
                                ellipse[i].style.fill = customColorsInputs[4].value
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

                        inputsFields[5].style.background = `#${inputsFields[5].value}`
        
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'color-secondary-30') {
                                paths[i].style.fill = customColorsInputs[5].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'color-secondary-30') {
                                ellipse[i].style.fill = customColorsInputs[5].value
                            }
                        }
            
                        pathID.style.fill = customColorsInputs[5].value
                    } 
            }
        
            for(i=0; i<inputsFields.length; i++) {
                if(inputsFields[i].value == '') {
                    inputsFields[i].style.borderColor = 'red'
                } 
                    
                    if(inputsFields[i].id == 'input-secondary-color-40' && inputsFields[i].value != '') {
                        inputsFields[i].style.borderColor = 'grey'
                        let paths = document.getElementsByTagName('path')

                        inputsFields[6].style.background = `#${inputsFields[6].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'no-res-3' || paths[i].classList == 'oops-2' || paths[i].classList == 'eight404') {
                                paths[i].style.fill = customColorsInputs[6].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'no-res-3' || ellipse[i].classList == 'oops-2' || ellipse[i].classList == 'eight404') {
                                ellipse[i].style.fill = customColorsInputs[6].value
                            }
                        }
        
                        circleID.style.fill = customColorsInputs[6].value
                        bellyButtonID.style.fill = customColorsInputs[6].value
                    } 
            }
        
        
            for(i=0; i<inputsFields.length; i++) {
                if(inputsFields[i].value == '') {
                    inputsFields[i].style.borderColor = 'red'
                } 
                    
                    if(inputsFields[i].id == 'input-secondary-color-50' && inputsFields[i].value != '') {
                        inputsFields[i].style.borderColor = 'grey'
                        let paths = document.getElementsByTagName('path')

                        inputsFields[7].style.background = `#${inputsFields[7].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'oops-6') {
                                paths[i].style.fill = customColorsInputs[7].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'oops-6') {
                                ellipse[i].style.fill = customColorsInputs[7].value
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

                        inputsFields[8].style.background = `#${inputsFields[8].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'no-res-6') {
                                paths[i].style.fill = customColorsInputs[8].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'no-res-6') {
                                ellipse[i].style.fill = customColorsInputs[8].value
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

                        inputsFields[9].style.background = `#${inputsFields[9].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'bearToy' || paths[i].classList == 'color-secondary-70') {
                                paths[i].style.fill = customColorsInputs[9].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'bearToy' || ellipse[i].classList == 'color-secondary-70') {
                                ellipse[i].style.fill = customColorsInputs[9].value
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

                        inputsFields[10].style.background = `#${inputsFields[10].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'color-secondary-80') {
                                paths[i].style.fill = customColorsInputs[10].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'color-secondary-80') {
                                ellipse[i].style.fill = customColorsInputs[10].value
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

                        inputsFields[11].style.background = `#${inputsFields[11].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'one404' || paths[i].classList == 'no-res-1' || paths[i].classList == 'oops-7') {
                                paths[i].style.fill = customColorsInputs[11].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'one404' || ellipse[i].classList == 'no-res-1' || ellipse[i].classList == 'oops-7') {
                                ellipse[i].style.fill = customColorsInputs[11].value
                            }
                        }
                    } 
        
                hatBottomID.style.fill = customColorsInputs[11].value
            }
        
            for(i=0; i<inputsFields.length; i++) {
                if(inputsFields[i].value == '') {
                    inputsFields[i].style.borderColor = 'red'
                } 
                    
                    if(inputsFields[i].id == 'input-white-color' && inputsFields[i].value != '') {
                        inputsFields[i].style.borderColor = 'grey'
                        let paths = document.getElementsByTagName('path')

                        inputsFields[12].style.background = `#${inputsFields[12].value}`
            
                        for(i=0; i<paths.length; i++) {
            
                            if(paths[i].classList == 'six404' || paths[i].classList == 'no-res' || paths[i].classList == 'oops-3') {
                                paths[i].style.fill = customColorsInputs[12].value
                            }
                        }
        
                        // ellipse
                        let ellipse = document.getElementsByTagName('ellipse')
                        for(i=0; i<ellipse.length; i++) {
                            if(ellipse[i].classList == 'six404' || ellipse[i].classList == 'no-res' || ellipse[i].classList == 'oops-3') {
                                ellipse[i].style.fill = customColorsInputs[12].value
                            }
                        }
                    } 
            }

        }
    }
})


// generate color
const generateColorPaletteBtn  = document.getElementById('genrate-color-palette')
const generateColorPaletteWrapper  = document.getElementById('color-palette-wrapper')

generateColorPaletteBtn.addEventListener('click', () => {


    // generateColorPaletteWrapper.innerHTML += '<textarea placeholder="Name me">Name</textarea><br/>'

    for(i=0; i<inputsFields.length; i++) {
        if(inputsFields[i].value != '') {
            generateColorPaletteWrapper.innerHTML += 
            `<span style="background:#${inputsFields[i].value}"></span> ${inputsFields[i].value.toUpperCase()} `
        } else {
            return
        }}
        generateColorPaletteWrapper.innerHTML += '<div></div>'
    
    })