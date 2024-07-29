document.addEventListener('DOMContentLoaded', function() {
    // تأكد من تثبيت الفوتر في الأسفل
    const footer = document.querySelector('footer');
    if (footer) {
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
        footer.style.width = '100%';
    }

    // إضافة التمرير السلس للتنقل بين الأقسام
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = event.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } else {
                // إذا كان الهدف غير موجود، انتقل إلى الصفحة المقصودة مباشرة
                window.location.href = event.target.getAttribute('href');
            }
        });
    });

    // تشغيل الصوت تلقائيًا
    const audio = document.getElementById('praise-audio');
    if (audio) {
        audio.loop = true;
        audio.play().catch(error => {
            console.error('حدث خطأ عند محاولة تشغيل الصوت:', error);
        });
    }
    window.addEventListener('load', function() {
        var audio = document.getElementById('praise-audio');
        audio.play();
    });
    
});
