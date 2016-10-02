$(function () {
  $('button').on('click',function (event) {
    event.preventDefault();
    clearImg();
    searchImg();
  });
  $('button').on('keypress',function (event) {
    if (event.which==13) {
      clearImg();
      searchImg();
    }
  });
});
function searchImg() {
  var text=$('input').val();
  $.getJSON('https://pixabay.com/api/?key=3429450-a383cae33a92ccea1a1e14e3a',{q:text})
  .done(function (data) {
    if(data.total>0){
      for(var i=0;i<6;i++){
        img=$('<img src='+data.hits[i].webformatURL+'>');
        img.addClass('results');
        $('body').append(img);
      }
    }else {
      $('body').append('<h2>По вашему запросу ничего не найдено :(</h2>')
    }
  });
}
function clearImg() {
  if($('img')){
    $('img').remove();
  }
  if($('h2')){
    $('h2').remove();
  }
}

var Human = {
  fname:'Николай',
  age:25,
  gender:'male',
  height:175,
  weight:70
};
function Worker() {
  this.salary=1000;
  this.company='McDonalds';
  this.work=function () {
    alert('Свобдная касса!');
  };
}
Worker.prototype=Human;
var worker1=new Worker();
var worker2=new Worker();
var worker3=new Worker();
console.log(worker1);
console.log(worker2.fname);
console.log(worker3.age);

function Student() {
  this.university='ХПИ';
  this.grant=1100;
  this.watchSeries=function () {
    alert('Еще одну-и точно спать!');
  };
}
Student.prototype=Human;
var student1=new Student();
var student2=new Student();
var student3=new Student();
console.log(student1);
console.log(student2.fname);
console.log(student3.age);
