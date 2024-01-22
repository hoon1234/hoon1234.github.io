function clickme() {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
}

function showmore() {

    // 토글 할 버튼 선택 (image_list)
    const image_list = document.getElementById('image_list');

    // image_list 숨기기 (display: none)
    if(image_list.style.display !== 'none') {
        image_list.style.display = 'none';
    }
    // image_list` 보이기 (display: block)
    else {
        image_list.style.display = 'block';
    }
}


function download(){
    alert('다운로드가 되었습니다.');
}

// function  emailCheck() {
//     alert('이메일이 확인 되었습니다.');
// }


function valiFormEmail(obj){
    if(validEmail(obj) == false){
        alert("올바른 이메일 주소를 입력하세요.");
        obj.value = '';
        obj.focus();
        return false;
    } else{
        alert('이메일 입력이 확인 되었습니다.');
    }
}

const input_email = document.querySelector('#emailchange');
/**
 * const input_email = document.getElementById('emailchange');
 */

input_email.addEventListener('change', (e) => {
    valiFormEmail(e.target);
});


// input_email.addEventListener('change', updateValue);
// function updateValue(e) {
// 	valiFormEmail(e.target);
// }


function validEmail(obj){
    var pattern = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    // var pattern = new RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
    // var pattern = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/;
    // var pattern = new RegExp(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]+$/);
    // return pattern.test(obj.value);
    return (obj.value.match(pattern) != null);
}

