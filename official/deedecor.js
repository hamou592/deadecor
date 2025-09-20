//navbar handling bg
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const heroSection = document.querySelector('.hero'); // Ensure your hero section has class "hero"
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > 
        209.2000122070312) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });


//Hero Section Code

  document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    slides[currentSlide].classList.add('active'); // show the first image

    setInterval(() => {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }, 5000);
  });

  // Sidebar toggle
  const menuIcon = document.querySelector('.menu-icon');
  const sidebar = document.querySelector('.sidebar');
  const closeBtn = document.querySelector('.close-btn');

  menuIcon.addEventListener('click', () => {
    sidebar.classList.add('open');
    menuIcon.style.display = 'none';
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('open');
    menuIcon.style.display = 'block';
  });


  //whatapp send message when submit the form
  document.getElementById("newsletterForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("subscriber_name").value;
    const email = document.getElementById("subscriber_email").value;
    const tel = document.getElementById("subscriber_tel").value;
    const type = document.getElementById("subscriber_type").value;
    const desc = document.getElementById("subscriber_desc").value;

    const message = `السلام عليكم،%0A%0A👤 الاسم الكامل: ${name}%0A📧 البريد الإلكتروني: ${email}%0A📱 رقم الهاتف: ${tel}%0A👥 نوع المستخدم: ${type}%0A📝 تفاصيل إضافية: ${desc}%0A%0Aمع فائق الاحترام والتقدير.`;

    const phoneNumber = "213550059603"; // Replace leading 0 with 213 for international format
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappURL, "_blank");
    
  document.getElementById("newsletterForm").reset();
  });

  //FAQs handeling show/hide answers

  document.querySelectorAll('.faq-question').forEach((question) => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      const isActive = item.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-item').forEach((i) => i.classList.remove('active'));

      // Open the clicked one
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });


  // Handle language switching consistently
  // document.addEventListener('DOMContentLoaded', function () {
  //   const langSelects = document.querySelectorAll('.lang-select');
  
  //   // Get current language based on filename
  //   const currentFile = window.location.pathname.split('/').pop();
  //   let currentLang = 'ar';
  //   if (currentFile.includes('-fr')) {
  //     currentLang = 'fr';
  //   } else if (currentFile.includes('-en')) {
  //     currentLang = 'en';
  //   }
  
  //   // Set the value of all language selectors to the current language
  //   langSelects.forEach(select => {
  //     select.value = currentLang;
  
  //     // Attach event listener for each language selector
  //     select.addEventListener('change', function () {
  //       const lang = this.value;
  //       let newUrl;
  
  //       if (lang === 'ar') {
  //         newUrl = window.location.pathname.replace(/(index)-(fr|en)(\.html)?/, 'index.html');
  //       } else {
  //         newUrl = window.location.pathname.replace(/index(-(fr|en))?(\.html)?/, `index-${lang}.html`);
  //       }
  
  //       // Preserve hash if exists
  //       const hash = window.location.hash;
  //       window.location.href = newUrl + hash;
  //     });
  //   });
  // });

  document.addEventListener('DOMContentLoaded', function () {
    const langSelectors = document.querySelectorAll('.lang-select');
  
    langSelectors.forEach(function (langSelect) {
      langSelect.addEventListener('change', function () {
        const lang = this.value;
        let newUrl;
  
        if (lang === 'ar') {
          newUrl = 'index.html';
        } else {
          newUrl = `index-${lang}.html`;
        }
  
        const hash = window.location.hash;
        window.location.href = newUrl + hash;
      });
    });
  });
  
