let nexBtn = document.querySelector('.next-btn');
let heroVideo = document.querySelector('.hero-video');

let videoList = ['test.mp4', 'test2.mp4', 'test3.mp4', 'test4.mp4', 'test5.mp4', 'test6.mp4', 'test7.mp4', 'test8.mp4', 'test9.mp4', 'test10.mp4'];

let i = 0;

nexBtn.addEventListener('click', () => {
    i += 1;

    heroVideo.src = videoList[i];

    if(i === 9){
        i = -1;
    }
})

auto = setInterval(() => {
    nexBtn.click();
}, 10000)


const nav = document.querySelector('.nav');
const icon = document.querySelector('.icon');

icon.addEventListener('click', () => {
    icon.classList.toggle('active');
    nav.classList.toggle('active');
})
