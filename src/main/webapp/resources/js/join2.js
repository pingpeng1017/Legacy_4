const idx = document.getElementById('idx');
const idResult = document.getElementById('idResult');
const pw = document.getElementById('pw');
const pwResult = document.getElementById('pwResult');
const pw2 = document.getElementById('pw2');
const pwResult2 = document.getElementById('pwResult2');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const btn = document.getElementById('btn');
const frm = document.getElementById('frm');

//------ pw와 pw2가 같은지 검증 --------------
let pwCheck = true; //같지 않을 때 true, 같으면 false
pw2.addEventListener('blur', function(){

    let message = "pw가 일치합니다";
    if(pw.value != pw2.value){
        pwCheck = true;
        message = 'pw가 일치하지 않습니다';
        pw2.value='';
   
    }else{
        pwCheck = false;
    }

    pwResult.innerHTML = message;
});

//------ 검증이 끝나고 pw를 수정했을 경우 ------------------
pw.addEventListener('change', function(){
    pwCheck = true;
    pw2.value = '';
    pwResult2.value = '';
    pw2.focus();

});
//------ Pw 길이 검증 -----------------
pw.addEventListener('blur', function(){
    if(pw.value.length<8 || pw.value.length>12){
        pwResult.innerHTML = 'pw의 글자수가 맞지 않아요'
        
    }
});


//------ ID 입력 후 ------------------
idx.addEventListener('blur', function(){
    if(idx.value == ''){
        idResult.innerHTML = 'ID를 입력하세요';
        
    }
});
//------ 가입 버튼 -------------------
btn.addEventListener("click", function(){
    
    if(idx.value == ''){
        alert('ID를 입력하세요');
        idx.focus();
        return;
    }

    if(pw.value == '' || pw.value.length<8 || pw.value.length>12){
        alert('pw를 입력하세요');
        pw.focus();
        return;
    }

    if(pwCheck){
        alert('pw가 일치하지 않습니다');
        pw2.focus();
        return;
    }

    if(name.value == ''){
        alert('Name을 입력하세요');
        name.focus();
        return;
    }

    if(phone.value == ''){
        alert('Phone을 입력하세요');
        phone.focus();
        return;
    }

    if(email.value == ''){
        alert('Email을 입력하세요');
        email.focus();
        return;
    }

    frm.submit();
});