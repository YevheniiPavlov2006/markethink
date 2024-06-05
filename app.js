const helpActiveText = document.getElementById('help-main-text')
const helpActiveText1 = document.getElementById('help-main-text1')
const helpActiveText2 = document.getElementById('help-main-text2')
const helpActiveText3 = document.getElementById('help-main-text3')

const helpButtonActive = document.getElementById('help__button')
const helpButtonActive1 = document.getElementById('help__button1')
const helpButtonActive2 = document.getElementById('help__button2')
const helpButtonActive3 = document.getElementById('help__button3')

const sliderImage = document.getElementById('slider_image')
const sliderImage1 = document.getElementById('slider_image1')
const sliderImage2 = document.getElementById('slider_image2')
const sliderImage3 = document.getElementById('slider_image3')

helpButtonActive.addEventListener('click', function(){
  helpButtonActive.classList.add('active')
  helpButtonActive1.classList.remove('active')
  helpButtonActive2.classList.remove('active')
  helpButtonActive3.classList.remove('active')

  helpActiveText.classList.add('text__active')
  helpActiveText1.classList.remove('text__active')
  helpActiveText2.classList.remove('text__active')
  helpActiveText3.classList.remove('text__active')

  sliderImage.style.display = "flex"
  sliderImage1.style.display = "none"
  sliderImage2.style.display = "none"
  sliderImage3.style.display = "none"
})

helpButtonActive1.addEventListener('click', function(){
  helpButtonActive1.classList.add('active')
  helpButtonActive.classList.remove('active')
  helpButtonActive2.classList.remove('active')
  helpButtonActive3.classList.remove('active')

  helpActiveText1.classList.add('text__active')
  helpActiveText.classList.remove('text__active')
  helpActiveText2.classList.remove('text__active')
  helpActiveText3.classList.remove('text__active')

  sliderImage.style.display = "none"
  sliderImage1.style.display = "flex"
  sliderImage2.style.display = "none"
  sliderImage3.style.display = "none"
})

helpButtonActive2.addEventListener('click', function(){
  helpButtonActive2.classList.add('active')
  helpButtonActive1.classList.remove('active')
  helpButtonActive.classList.remove('active')
  helpButtonActive3.classList.remove('active')
  
  helpActiveText2.classList.add('text__active')
  helpActiveText1.classList.remove('text__active')
  helpActiveText.classList.remove('text__active')
  helpActiveText3.classList.remove('text__active')

  sliderImage.style.display = "none"
  sliderImage1.style.display = "none"
  sliderImage2.style.display = "flex"
  sliderImage3.style.display = "none"
})

helpButtonActive3.addEventListener('click', function(){
  helpButtonActive3.classList.add('active')
  helpButtonActive1.classList.remove('active')
  helpButtonActive2.classList.remove('active')
  helpButtonActive.classList.remove('active')

  helpActiveText3.classList.add('text__active')
  helpActiveText1.classList.remove('text__active')
  helpActiveText2.classList.remove('text__active')
  helpActiveText.classList.remove('text__active')

  sliderImage.style.display = "none"
  sliderImage1.style.display = "none"
  sliderImage2.style.display = "none"
  sliderImage3.style.display = "flex"
})


const writing = document.getElementById('writing')
const marketing = document.getElementById('marketing')
const contentWriting = document.getElementById('content_writing')
const contentMarketing = document.getElementById('content_marketing')

writing.addEventListener('click', function(){
  writing.classList.add('active__block__title')
  marketing.classList.remove('active__block__title')
  contentWriting.style.display = "flex"
  contentMarketing.style.display = "none"
})

marketing.addEventListener('click', function(){
  marketing.classList.add('active__block__title')
  writing.classList.remove('active__block__title')
  contentMarketing.style.display = "flex"
  contentWriting.style.display = "none"
})


const BurgerMenuButton = document.getElementById('burger-menu')
const closeScreenMenuButton = document.getElementById('menu-screen-button-close')
const menuScreen = document.getElementById('menu-screen')

BurgerMenuButton.addEventListener('click', function(){
  menuScreen.style.display = 'flex'
})

closeScreenMenuButton.addEventListener('click', function(){
  menuScreen.style.display = 'none'
})


// signup
const signupInput = document.getElementById('signup-input')
const signupButton = document.getElementById('singupButton')
const wellDone = document.getElementById('well-done')
const stopText = document.getElementById('stop-text')
const emailRegexp = /^\S+\@\S+\.\S+$/

function validateSignupInput() {
  const value = signupInput.value
  return emailRegexp.test(value.trim())
}

signupButton.addEventListener('click', function(){
  const result = validateSignupInput()
  if (result){
    wellDone.style.display = 'flex'
    signupInput.style.display = 'none'
    signupButton.style.display = 'none'
    stopText.style.display = 'none'
  } else {
    stopText.style.display = 'flex'
  }
})