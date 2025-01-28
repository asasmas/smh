// عند الضغط على زر "تعرف على المزيد"
document.getElementById("learnMoreBtn").addEventListener("click", function () {
  alert("مرحبًا بكم! تصفحوا الموقع لتتعرفوا على خدماتنا.");
});

// عند إرسال النموذج
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("شكراً لتواصلك معنا! سنرد عليك قريبًا.");
});

// التأثير عند التمرير لتغيير الهيدر
window.onscroll = function() {changeHeader()};

function changeHeader() {
    let header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.padding = "1rem 2rem";  // تقليص الحجم
        header.style.backgroundColor = "var(--olive-green)";  // تغيير اللون
    } else {
        header.style.padding = "1.5rem 2rem";  // العودة للحجم الأصلي
        header.style.backgroundColor = "var(--dark-green)";  // استعادة اللون الأصلي
    }
}
// فتح وإغلاق القائمة الجانبية
function toggleMenu() {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
}

// التمرير السلس عند النقر على الروابط
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      window.scrollTo({
          top: targetElement.offsetTop,
          behavior: 'smooth'
      });
  });
});


