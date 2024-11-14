const pullIcon = document.querySelector('.image-3');  // 사용자 맞춤 설정 아이콘
const overlapWrapper = document.querySelector('.overlap-wrapper');

// 초기 상태에서 overlapWrapper의 bottom을 0으로 설정
overlapWrapper.style.top = 'auto';
overlapWrapper.style.bottom = '0';
overlapWrapper.style.height = '50px'; // 처음엔 내용이 숨겨져 있고 높이는 50px로 설정

pullIcon.addEventListener('click', function() {
  // 높이를 늘려서 내용을 보이게 함
  if (overlapWrapper.style.height === '50px' || overlapWrapper.style.height === '') {
    overlapWrapper.style.height = '371px';  // 내용이 모두 보이도록 높이 설정
    overlapWrapper.style.top = 'auto';  // top을 초기화
    overlapWrapper.style.bottom = '0';  // 50px만큼 위로 올라오게 설정
  } else {
    overlapWrapper.style.height = '50px';  // 상단만 보이도록 다시 축소
    overlapWrapper.style.top = 'auto';  // top을 초기화
    overlapWrapper.style.bottom = '0';  // 원래대로 bottom으로 설정
  }
});
