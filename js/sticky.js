let nav = document.querySelector('header')

window.addEventListener('scroll',function(e){
  if(window.pageYOffset > nav.offsetTop){
    nav.style.position = 'fixed'
    nav.style.top = '0px'
  }else{
    nav.style.position = 'static'
  }
})

