'use strict';
///TODO
//constructor function
// prototype
//render
//localstorage get element



//global variables//
let submits=[];
let article= document.getElementById('article');
let form=document.getElementById('form');

//constructor Function//
function UserSubmit(authorName, articleTitle,subject,content, day, month, year) {
  this.authorName=authorName;
  this.articleTitle=articleTitle;
  this.subject=subject;
  this.content=content;
  this.day=day;
  this.month=month;
  this.year=year;

  submits.push(this);
  localStorage.setItem('sub',JSON.stringify(submits));

}



form.addEventListener('submit', handleSubmit);
function handleSubmit(event) {
  event.preventDefault();
  new UserSubmit (event.target.aName.value, event.target.aTitle.value,event.target.subject.value, event.target.content.value,event.target.day.value,event.target.month.value,event.target.year.value );
  console.log(submits);
  render();
//   console.log('test');
}

function render() {
  for (let i = 0; i < submits.length; i++) {
    article.innerHTML='';
    let nameInput= document.createElement('p');
    nameInput.innerHTML=submits[i].authorName;
    article.appendChild(nameInput);

    let titleInput= document.createElement('p');
    titleInput.innerHTML=submits.articleTitle;
    article.appendChild(titleInput);

    let subjectInput= document.createElement('p');
    subjectInput.innerHTML=submits.subject;
    article.appendChild(subjectInput);

    let contentInput= document.createElement('p');
    contentInput.innerHTML=submits.content;
    article.appendChild(contentInput);

    let dayInput= document.createElement('p');
    dayInput.innerHTML=submits.day;
    article.appendChild(dayInput);

    let monthInput= document.createElement('p');
    monthInput.innerHTML=submits.month;
    article.appendChild(monthInput);

    let yearInput= document.createElement('p');
    yearInput.innerHTML=submits.year;
    article.appendChild(yearInput);

  }

}
let localstorageSubmit = JSON.parse (localStorage.getItem(submits));
console.log(localstorageSubmit);
