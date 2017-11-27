// //Q. 모든 타이틀들을 내가 원하는 이름으로 바꾸기
// (버튼을 눌렀을때))
//     1. 버튼이 눌린다.
//          1.1 버튼의 내용을 가져온다.
//          1.2 버튼에 onClickListner를 달아준다. 
//          1.3 버튼을 눌렀을 때 메소드를 실행시킨다. 
//     2. 타이틀에 해당하는 html element 들을 가져온다. (변수에 담는다)
//     3. 각각을 순환하며 내용을 바꾼다. 



// 익명함수는 다른곳에서 호출 할 수가 없다.  왜냐면 이름이 없어서 부를수 없기때문
// function 함수이름 (파라미터) {
    
    
    
// }

// var 함수이름 = function(파라미터) {
    
    
// }



// var btn = document.getElementsByTagName('button')[0];
var btn = document.getElementById('setTitle');
console.log(btn);
btn.onclick = function(){
     alert("done");
     setTitle();
}

function setTitle() {
    var titles = document.getElementsByClassName('title');
    console.log(titles);
    for (var i=0; i<titles.length; i++){
        titles[i].innerHTML="화장을 가고 싶다....";
    }
}

