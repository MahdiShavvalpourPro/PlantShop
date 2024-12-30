// document.querySelector(".play-icon").addEventListener("click", function () {
//     const video = document.querySelector("#video-player");
//     if (video) {
//         video.play();
//     }
// });

// گرفتن عناصر مورد نیاز
const video = document.getElementById("video-player");
const cover = document.querySelector(".video-cover");
const playIcon = document.querySelector(".play-icon");

// عملکرد کلیک روی آیکون پخش یا کاور
function playVideo() {
    video.play(); // شروع پخش ویدیو
    cover.style.display = "none"; // مخفی کردن کاور
    playIcon.style.display = "none"; // مخفی کردن آیکون پخش
}

// افزودن لیسنر به آیکون پخش و کاور
playIcon.addEventListener("click", playVideo);
cover.addEventListener("click", playVideo);

// زمانی که ویدیو متوقف یا پایان می‌یابد
video.addEventListener("pause", function () {
    cover.style.display = "block"; // نمایش کاور
    playIcon.style.display = "block"; // نمایش آیکون پخش
});

// زمانی که ویدیو به طور کامل متوقف می‌شود (مثلاً به پایان می‌رسد)
video.addEventListener("ended", function () {
    cover.style.display = "block"; // نمایش کاور
    playIcon.style.display = "block"; // نمایش آیکون پخش
});

// اگر ویدیو به طور غیرمنتظره متوقف شود
video.addEventListener("error", function () {
    cover.style.display = "block"; // نمایش کاور
    playIcon.style.display = "block"; // نمایش آیکون پخش
});
