document.querySelector('h1').textContent ='Song-Robot';
/*document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}*/
document.querySelector('img').onclick = function() {
    let mySrc = document.querySelector('img').getAttribute('src');
    if(mySrc === 'images/RC01.jfif'){
        document.querySelector('img').setAttribute('src','images/RC02.jfif');
    } else{
        document.querySelector('img').setAttribute('src','images/RC01.jfif');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
    setUserName();
 }
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if(!myName || myName === null){
        setUserName();
    } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Hello,'+ myName +'!';
    }
  }
if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello,'+ storedName +'!';
  }