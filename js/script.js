

var menuMob = document.querySelector('.hiden');
var Bars = document.querySelector('.fa-bars');
var Close = document.querySelector('.cacher');
var mobiscroll = document.querySelector('fa-calendar');


Bars.addEventListener('click', function () {
    // console.log(menuMob);
    menuMob.classList.remove('hiden');
    Bars.style.visibility= 'hidden';
    // console.log(Close);
    Close.style.display= 'inline-block';

    
});

Close.addEventListener('click', function () {
    // console.log(menuMob);
    menuMob.classList.add('hiden');
    Bars.style.visibility= 'visible';
    // console.log(Close);
    Close.style.display= 'none';

    
});

// mobiscroll.datepicker('#picker', {
//     controls: ['calendar']
// });

// Calendar.addEventListener('click', function () {
//     console.log(mobiscroll);

//    mobiscroll.datepicker('#picker', {
//     controls: ['calendar']
// });


    
// });

const image1 = document.querySelector('#img-1');
const image2 = document.querySelector('#img-2');
const image3 = document.querySelector('#img-3');
const image4 = document.querySelector('#img-4');
const image5 = document.querySelector('#img-5');
const image6 = document.querySelector('#img-6');
const dot1 = document.querySelector('#dot-1');
const dot2 = document.querySelector('#dot-2');
const dot3 = document.querySelector('#dot-3');
const dot4 = document.querySelector('#dot-4');
const dot5 = document.querySelector('#dot-5');
const dot6 = document.querySelector('#dot-6');


dot1.onclick = function () {
    image1.classList.remove('hide')
    dot1.classList.add('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}

image1.onclick = function () {
    image1.classList.add('hide')
    image2.classList.remove('hide')
    dot2.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}
dot2.onclick = function () {
   image1.classList.add('hide')
   image2.classList.remove('hide')
   dot2.classList.add('active-dot')
   dot1.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}

image2.onclick = function () {
   image2.classList.add('hide')
   image3.classList.remove('hide')
   dot3.classList.add('active-dot')
   dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}
dot3.onclick = function () {
    image2.classList.add('hide')
    image3.classList.remove('hide')
    dot3.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}

image3.onclick = function () {
    image3.classList.add('hide')
    image4.classList.remove('hide')
    dot4.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}
dot4.onclick = function () {
    image3.classList.add('hide')
    image4.classList.remove('hide')
    dot4.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}

image4.onclick = function () {
    image4.classList.add('hide')
    image5.classList.remove('hide')
    dot5.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}
dot5.onclick = function () {
    image4.classList.add('hide')
    image5.classList.remove('hide')
    dot5.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot6.classList.remove('active-dot')
    
}

image5.onclick = function () {
    image5.classList.add('hide')
    image6.classList.remove('hide')
    dot6.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    
}
dot6.onclick = function () {
    image5.classList.add('hide')
    image6.classList.remove('hide')
    dot6.classList.add('active-dot')
    dot1.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    
}

image6.onclick = function () {
    image6.classList.add('hide')
    image1.classList.remove('hide')
    dot1.classList.add('active-dot')
    dot6.classList.remove('active-dot')
    dot2.classList.remove('active-dot')
    dot3.classList.remove('active-dot')
    dot4.classList.remove('active-dot')
    dot5.classList.remove('active-dot')
    
}

// var counter = 1;

// setInterval(function () {
//     document.getElementsByClassName('image' + counter).style.marginLeft='-100%';
//     counter++;
//     if(counter > 6){
//         counter = 1

//     }    
    
// }, 5000);