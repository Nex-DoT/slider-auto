const plus =document.querySelector('#right');
const perv =document.querySelector('#left');
const slides = document.querySelectorAll(".slide");
let time;


function slider(){
    let bm = 0;
    function next(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
        }
        bm =( bm + 1 )%slides.length
        slides[bm].classList.add('active')
    }
    plus.addEventListener('click' , function(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
        }
        bm =( bm + 1 )%slides.length
        slides[bm].classList.add('active')
        clearInterval(time)
        time = setInterval(next, 5000); 
    })
    function pervw(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
        }
        bm =( bm - 1 + slides.length )%slides.length
        slides[bm].classList.add('active')
    }
    
    perv.addEventListener('click' , function(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
        }
        bm =( bm - 1 + slides.length )%slides.length
        slides[bm].classList.add('active')
        clearInterval(time)
        time = setInterval(pervw, 5000); 

    })
    
        time = setInterval(next, 5000); 
    

    
   
}
slider()