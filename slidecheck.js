const slider=document.querySelector('.slider_el');
const allImgDivs=Array.from(slider.children);

const nextB=document.querySelector('#B1');
const prevB=document.querySelector('#B2');
var Imgcount=1;
allImgDivs.forEach(divElement=>{
    divElement.style.background=`url(./images/${Imgcount}.jpg) center/cover no-repeat`;
    Imgcount++;
});
const imgSize=allImgDivs[0].clientWidth;
let counter=1;


nextB.addEventListener('click',()=>{
    // slider.style.transition="width 0.4 linear";
    if(counter*6>allImgDivs.length) return;
    else if(counter==0) counter=1; 
    slider.style.transform='translateX('+(-200*(counter*6)) +'px)';
    counter++;
    console.log('next');
    console.log(counter);
})

prevB.addEventListener('click',()=>{
    // slider.style.transition="width 0.4 linear";
    if(counter<=0) return;
    counter--;
    slider.style.transform='translateX('+(-200*(counter)) +'px)';
    console.log('prev');
    console.log(counter);
})

slider.addEventListener('click',e=>{
    console.log(e.target);
})