const plus =document.querySelector('#right');
const perv =document.querySelector('#left');
const slides = document.querySelectorAll(".slide");
let time;
const countEr = document.createElement('div');
const countEr1 = document.createElement('div');
const countEr2 = document.createElement('div');
const bar = document.querySelector('.bar').append(countEr ,countEr1,countEr2);
const barbalon = document.querySelector('.bar').children;
console.log(barbalon);


function slider(){
    let bm = 0;
    function next(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
             barbalon[bm].classList.remove('active')
        }
        bm =( bm + 1 )%slides.length
        slides[bm].classList.add('active')
        barbalon[bm].classList.add('active')
    }
    plus.addEventListener('click' , function(){
        for(i=0;i<slides.length;i++){
            barbalon[bm].classList.remove('active')
            slides[i].classList.remove('active')
        }
        bm =( bm + 1 )%slides.length
        slides[bm].classList.add('active')
        barbalon[bm].classList.add('active')
        clearInterval(time)
        time = setInterval(next, 5000); 
    })
    function pervw(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
            barbalon[bm].classList.remove('active')
        }
        bm =( bm - 1 + slides.length )%slides.length
        barbalon[bm].classList.add('active')
        slides[bm].classList.add('active')
    }
    
    perv.addEventListener('click' , function(){
        for(i=0;i<slides.length;i++){
            slides[i].classList.remove('active')
            barbalon[bm].classList.remove('active')
        }
        bm =( bm - 1 + slides.length )%slides.length
        slides[bm].classList.add('active')
        barbalon[bm].classList.add('active')
        clearInterval(time)
        time = setInterval(pervw, 5000); 

    })
    
        time = setInterval(next, 5000); 
    
}
slider()