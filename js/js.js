//부드러운 스크롤 휠
$("html").easeScroll({
  frameRate: 80,
  animationTime: 2000,
  stepSize: 120,
  pulseAlgorithm: !0,
  pulseScale: 8,
  pulseNormalize: 1,
  accelerationDelta: 20,
  accelerationMax: 1,
  keyboardSupport: !0,
  arrowScroll: 50
});

// 메인 슬라이드
new Swiper( '.main-slide > .swiper', {

	effect : 'fade', // 페이드 효과 사용
    autoplay: { // 자동 재생 여부
        delay: 4000 // 5초마다 슬라이드 바뀜
      },
	loop : true, // 무한 반복
    touchRatio: 0,//드래그 금지
	}
);

// 이벤트 슬라이드

new Swiper(".promotion .swiper", {
        slidesPerView: 1, // 한 번에 보여줄 슬라이드 개수
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return '0' +'<span class="' + currentClass + '"></span>' +
                   '    0' +
                   '<span class="' + totalClass + '"></span>';
          }
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }
	
      });

// 모달 사이트맵

$('.menu-btn').click(function(){
  $('.site_map').addClass("active");
});
$('.close-btn').click(function(){
  $('.site_map').removeClass("active");
});

//셀렉트 선택값 색 변경

$("select").change(function(){
  if ($(this).val()=="") $(this).css({color: "#333"});
  else $(this).css({color: "#ddd"});
});

// $('.inp').css('color','#ddd');
// $('.inp').change(function() {
//    var current = $('.inp').val();
//    if (current != 'null') {
//        $('.inp').css('color','#333');
//    } else {
//        $('.inp').css('color','#ddd');
//    }
// }); 

// 달력 제이쿼리

$.datepicker.setDefaults({
    closeText: "닫기",
    prevText: "이전달",
    nextText: "다음달",
    currentText: "오늘",
    monthNames: ["1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월"
    ],
    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월",
      "7월", "8월", "9월", "10월", "11월", "12월"
    ],
    dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
    dayNamesShort: ["일", "월", "화", "수", "목", "금", "토"],
    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
    weekHeader: "주",
    dateFormat: "yy.m.d", // 날짜형태 예)yy년 m월 d일
    firstDay: 0,
    isRTL: false,
    showMonthAfterYear: true,
    yearSuffix: "년"
  })

  $(".datepicker").datepicker({
    minDate: 0
  })

