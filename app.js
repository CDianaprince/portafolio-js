const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition(){
  //Button click active class
  for(let i = 0; i < sectBtn.length; i++){
    sectBtn[i].addEventListener('click', function(){
      let currentBtn = document.querySelectorAll('.active-btn');
      currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
      this.className += ' active-btn';
    })
  }

  allSections.addEventListener('click', (e) =>{
    const id = e.target.dataset.id;
    if(id){
      //remove selected from the other btns
      sectBtns.forEach((btn) =>{
        btn.classList.remove('active')
      })

      e.target.classList.add('active')

      //hide other sections
      sections.forEach((section) =>{
        section.classList.remove('active')
      })
      
      const element = document.getElementById(id);
      element.classList.add('active')
      
    }
    
  })




}



PageTransition();

//Portafolio filter

let list = document.querySelectorAll('.list');
let portafolioItem = document.querySelectorAll('.portafolio-item');

for (let i = 0; i<list.length; i++){
  list[i].addEventListener('click', function(){
    for(let j = 0; j<list.length; j++){
      list[j].classList.remove('activo');
    }
    this.classList.add('activo');

      let dataFilter = this.getAttribute('data-filter');

      for( let k = 0; k<portafolioItem.length; k++){
        portafolioItem[k].classList.remove('activo');
        portafolioItem[k].classList.add('hide');

        if(portafolioItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
          portafolioItem[k].classList.remove('hide');
          portafolioItem[k].classList.add('activo');
        }
      }
  })
}


