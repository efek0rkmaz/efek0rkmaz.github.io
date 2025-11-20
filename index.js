// Bu kod, sayfa tamamen yüklendiğinde çalışır
document.addEventListener("DOMContentLoaded", function() {
    
    // --- Profil Resmi Döndürme Kodu ---
    const flipper = document.getElementById("profile-flipper");

    if (flipper) {
        // Fare üzerine geldiğinde (mouseenter)
        flipper.addEventListener("mouseenter", function() {
            // 'flipper' elementinin içindeki '.flipper-card'a 'is-flipped' sınıfını ekle
            this.querySelector('.flipper-card').classList.add("is-flipped");
        });

        // Fare üzerinden ayrıldığında (mouseleave)
        flipper.addEventListener("mouseleave", function() {
            // 'flipper' elementinin içindeki '.flipper-card'dan 'is-flipped' sınıfını kaldır
            this.querySelector('.flipper-card').classList.remove("is-flipped");
        });
    }

    // Başka JS koduna gerek kalmadı!
});