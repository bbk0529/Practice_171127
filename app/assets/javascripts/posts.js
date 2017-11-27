// Q. 50분마다 잠시 쉬는 시간을 가지는 안내 메시지를 출력 
// + 17시50분이 되면 "수고하셨습니다. " 메시지 출력, 그 이전에는 열공합니다 메시지 출력. 


// 1. 현재 시간을 가져 온다. 
// 2. 현재 시간 중에서 "시"에 해당하는 부분을 가져옵니다."
// 3. "시"에 해당되는 부분이 17 이상일 경우 잘가용 아닐경우 열공해용 " (ALERT)
// 4. 1,2,3에 해당되는 과정을 50분에 한번씩 나오게 

// 2. 

console.log("내가 두번째 왔다");


function alertRest(){
     alert("Hello"); 
     
    var time = new Date();
    // console.log(time);
    // console.dir(time)
    
    var hour = time.getHours();
    console.log(hour);
    if(hour >=17 )   {
        alert("잘강~");    
        
    }
    else  {
        alert("열공해용~");    
    }
    
}

//  setInterval(alertRest , 1000 * 5); // ()가 없음. 

alertRest(); //()가 들어 가 있음.


