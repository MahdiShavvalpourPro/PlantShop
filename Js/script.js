const slider = document.querySelector(".slider");
const sliderContent = document.querySelector(".item-wrapper");
const sliderItems = sliderContent.querySelectorAll("img");
const itemCount = sliderItems.length;
const indicatorWrapper = document.querySelector(".indicator-wrapper");

// دکمه‌های قبلی و بعدی
const prevBtn = document.getElementById("previous");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// حرکت اسلاید به سمت چپ یا راست
const handleButtonClick = (direction) => {
  if (direction === "left") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = itemCount - 1; // برگشت به آخرین تصویر
    }
  } else {
    currentIndex++;
    if (currentIndex >= itemCount) {
      currentIndex = 0; // برگشت به اولین تصویر
    }
  }

  moveSlide();
  styleIndicator();
};

// حرکت به اسلاید دلخواه با کلیک روی اندیکاتورها
const handleIndicatorClick = (e) => {
  if (!e.target.classList.contains("indicator")) return;

  currentIndex = parseInt(e.target.dataset.index, 10); // تغییر ایندکس به عدد
  moveSlide();
  styleIndicator();
};

// ایجاد اندیکاتورهای مربوط به اسلایدها
const initIndicators = () => {
  for (let i = 0; i < itemCount; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.dataset.index = i; // تعیین ایندکس برای هر اندیکاتور
    indicatorWrapper.appendChild(indicator);
  }

  styleIndicator();
};

// استایل دادن به اندیکاتورها
const styleIndicator = () => {
  const indicators = indicatorWrapper.querySelectorAll(".indicator");
  indicators.forEach((indicator) => indicator.classList.remove("current"));
  indicators[currentIndex].classList.add("current");
};

// حرکت اسلاید به موقعیت جدید
const moveSlide = () => {
  const sliderWidth = slider.clientWidth; // اندازه عرض اسلایدر
  sliderContent.style.transform = `translateX(-${currentIndex * sliderWidth}px)`; // تغییر موقعیت
};

// افزودن رویدادها
const addEventListeners = () => {
  prevBtn.addEventListener("click", () => handleButtonClick("left"));
  nextBtn.addEventListener("click", () => handleButtonClick("right"));
  indicatorWrapper.addEventListener("click", handleIndicatorClick);
};

// راه‌اندازی اولیه
const init = () => {
  addEventListeners();
  initIndicators();
};

init();
