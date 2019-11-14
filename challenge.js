
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')
let heart = document.querySelector('#heart')
let pause = document.querySelector('#pause')
// set the timer
function timer() {
  let seconds = parseInt(document.querySelector('#counter').innerText)
  if (pause.innerText == 'pause') {
    seconds += 1;
    document.querySelector('#counter').innerText = seconds;
  }
}

let counter = setInterval(timer, 1000);

// set the minus button
minus.addEventListener('click', function (e) {
  let seconds = parseInt(document.querySelector('#counter').innerText)
  seconds -= 1;
  document.querySelector('#counter').innerText = seconds;
})

// set the plus button
plus.addEventListener('click', timer);

// set the heart button
let likes = 1;
heart.addEventListener('click', function (e) {
  let ul = document.querySelector('ul.likes');
  let li = document.createElement('li')
  let seconds = document.querySelector('#counter').innerText
  // let val=parseInt(document.querySelector('ul.likes').lastChild.innerHTML.split('')['0'])
  // debugger;
  if (!ul.lastChild) {
    ul.appendChild(li)
    li.innerText = seconds + " has been liked " + likes + " time"
  }
  else if (ul.lastChild && seconds == ul.lastChild.innerHTML.split(' ')['0']) {
    ul.lastChild.innerText = seconds + " has been liked " + (likes += 1) + " times"
  }
  else {
    likes = 1
    ul.appendChild(li)
    li.innerText = seconds + " has been liked " + likes + " time"
  }


})
//Set the pause button
pause.addEventListener('click', function (e) {

  if (pause.innerText == 'pause') {
    plus.disabled = true;
    minus.disabled = true;
    heart.disabled = true;
    pause.innerText = 'Resume';

  }
  else {
    plus.disabled = false;
    minus.disabled = false;
    heart.disabled = false;
    pause.innerText = 'pause';
  }


})

let frm = document.querySelector('#comment-form')

frm.addEventListener('submit', function (e) {
  e.preventDefault();
  let value = document.querySelector('#comment-input').value;
  let par = document.createElement('p')
  document.querySelector('#list').appendChild(par)
  par.innerText = value;
})
