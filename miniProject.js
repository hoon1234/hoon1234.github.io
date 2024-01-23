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

const makeSpinner = () => {
    const spinner = document.createElement('div');
    const spinnerImage = document.createElement('img');
    spinner.classList.add('loading');
    spinnerImage.setAttribute('src', 'https://picsum.photos/v2/list?page=2&limit=100');
    spinnerImage.classList.add('spinner');
    spinner.appendChild(spinnerImage);
    return spinner;
};

const makeSkeleton = () => {
    const skeleton = document.createElement('li');
    const skeletonImage = document.createElement('div');
    const skeletonText = document.createElement('p');
    skeleton.classList.add('skeleton');
    skeletonImage.classList.add('skeleton__image');
    skeletonText.classList.add('skeleton__text');
    skeletonText.textContent = ' ';
    skeleton.appendChild(skeletonImage);
    skeleton.appendChild(skeletonText);
    return skeleton;
};

const list = document.querySelector('.card-list');
const items = document.querySelectorAll('.card');
const skeletonItems = Array.from({ length: items.length }, () =>
    makeSkeleton()
);
const spinner = makeSpinner();

const addSkeleton = () => {
    skeletonItems.forEach((item) => list.appendChild(item));
};

const removeSkeleton = () => {
    skeletonItems.forEach((item) => list.removeChild(item));
};

const loadingStart = () => {
    addSkeleton();
    list.appendChild(spinner);
};

const loadingFinish = () => {
    removeSkeleton();
    list.removeChild(spinner);
};

const addNewContent = () => {
    items.forEach((item) => list.appendChild(item.cloneNode(true)));
};

const ioCallback = (entries, io) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            io.unobserve(entry.target);
            loadingStart();
            setTimeout(() => {
                addNewContent();
                loadingFinish();
                observeLastItem(io, document.querySelectorAll('.card'));
            }, 2000);
        }
    });
};

const observeLastItem = (io, items) => {
    const lastItem = items[items.length - 1];
    io.observe(lastItem);
};

const io = new IntersectionObserver(ioCallback, { threshold: 0.7 });
observeLastItem(io, items);

// image-list.js파일


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

// 여기까지 index.html js파일




var mapContainer = document.getElementById('map'), // 지도를 표시할 div
    mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

// 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
var map = new kakao.maps.Map(mapContainer, mapOption);

//여기까지 jejumap.js 파일