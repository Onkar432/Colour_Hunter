btn = document.getElementById('btn');
para = document.getElementById('para')
// btn.addEventListener('click',function(){
//     // alert("Cliked")
//     if(para.innerText==="")
//     {
//     para.innerText=`I am Onkar`
//     }else{
//         para.innerText="";
//     }

// })
// const boxes = document.querySelectorAll('.box');

// boxes.forEach(box => {
//   const counter = document.createElement('span');
//   counter.classList.add('counter');
//   box.appendChild(counter);

//   let count = 0;

//   box.addEventListener('click', function () {
//     count++;
//     counter.textContent = `Clicked ${count} times`;

//   });
// });

const objImg = document.getElementById('objImg');
const colorGoInput = document.getElementById('colorGo');
const goBtn = document.getElementById('goBtn');

goBtn.addEventListener('click', function (event) {
  event.preventDefault();
  const color = colorGoInput.value.toLowerCase();

  if (color === 'blue') {
    objImg.style.transform = 'translate(-270px,-200px)';
    objImg.style.transitionDuration = '2s'; // Use 'transitionDuration' property
  } else if (color === 'red') {
    objImg.style.transform = 'translate(-110px,-190px)';
    objImg.style.transitionDuration = '2s';
  } else if (color === 'pink') {
    objImg.style.transform = 'translate(50px,-190px)';
    objImg.style.transitionDuration = '2s';
  } else if (color === 'green') {
    objImg.style.transform = 'translate(210px,-190px)';
    objImg.style.transitionDuration = '2s';
  } else {
    alert('Invalid color');
  }
});

