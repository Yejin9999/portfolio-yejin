//웹디자인
const webSlid = new Swiper('.web_swiper',{
    spaceBetween:80,
    autoplay:{delay:2500,},
    loop:true,
    speed:2000,
    navigation: {
        nextEl: ".webpage_container .swiper-scrollbtn .next",
        prevEl: ".webpage_container .swiper-scrollbtn .prev",
      },
 })
 
 //배너디자인
const bnrSlide = new Swiper('.bnr',{
    autoplay:{delay:0,},
    loop:true,
    speed:4000,
    slidesPerView:3,
    spaceBetween:20,
})

//sns디자인
const snsSlide = new Swiper('.sns',{
    autoplay:{delay:0,},
    loop:true,
    speed:5000,
    slidesPerView:4,
    spaceBetween:20,
})

//detail디자인
const detailSlide = new Swiper('.detail',{
    slidesPerView:2,
    spaceBetween:50,
    effect:"fade",
    autoplay:{delay:2000,},
    loop:true,
})

//팝업 출력과 숨기기
const popup_bg = document.querySelector('.popup_bg')
const bnr = document.querySelectorAll('.bnr img')
const sns = document.querySelectorAll('.sns img')
const detail = document.querySelectorAll('.detail img')

const body = document.querySelectorAll('body');
console.log(body);

popup_bg.style.display = 'none' //팝업숨기기

for(let i of bnr){
    i.addEventListener('click',()=>{
        body.style.overflow = 'hidden';
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '900px';
        popup_bg.children[0].style.marginTop = '300px';
       // console.log(i.src)
        //console.log(popup_bg.children[0].children[0])
    })
}
for(let i of sns){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '80px';
        //console.log(i.src)
        //console.log(popup_bg.children[0].children[0])
    })
}

for(let i of detail){
    i.addEventListener('click',()=>{
        popup_bg.style.display = 'block'
        popup_bg.children[0].children[0].src = i.src;
        popup_bg.children[0].style.width = '700px';
        popup_bg.children[0].style.marginTop = '80px';
    })
}

//팝업 닫히기 
popup_bg.addEventListener('click',()=>{
    popup_bg.style.display = 'none'
    body.style.removeProperty('overflow');
})



/* //전체 화면 수직 마우스 휠
const wrap = new Swiper('main',{
    direction:'vertical',
    mousewheel:true,
    speed:1000,
    on: {
        slideChangeTransitionEnd: function () {
            for(let i of nav) i.classList.remove('active')
            nav[this.activeIndex].classList.add('active')
            setTimeout(() => {
                ScrollTrigger.refresh(); // ★ Swiper 로드 후 강제 새로고침 ★
            }, 0);
        }
    },
})


//네비 탭 마우스 클릭 시 해당 페이지로 이동하기
const nav = document.querySelectorAll('nav a')
console.log(nav)

nav.forEach((t,i)=>{
    t.addEventListener('click',function(e){
        e.preventDefault();
        wrap.slideTo(i, 1000);
        setTimeout(()=>{
            ScrollTrigger.refresh();
        },0);
    })
}) */