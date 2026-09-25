document.addEventListener("DOMContentLoaded", function() {
    const tarihSecici = document.getElementById("teslimTarihi");
    if (tarihSecici) {
        const bugun = new Date();
        const yil = bugun.getFullYear();
        const ay = String(bugun.getMonth() + 1).padStart(2, '0');
        const gun = String(bugun.getDate()).padStart(2, '0');
        tarihSecici.min = `${yil}-${ay}-${gun}`;
    }

    window.onscroll = function() {
        const btn = document.getElementById("scrollTopBtn");
        if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
            btn.style.display = "block";
        } else {
            btn.style.display = "none";
        }
    };
});

function yukariCik() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resimBuyut(wrapEl) {
    const img = wrapEl.querySelector('img');
    const parentCard = wrapEl.closest('.menu-item');
    const title = parentCard.querySelector('.menu-item-info h4').innerText;
    const desc = parentCard.querySelector('.menu-item-info p').innerText;

    document.getElementById('modalImg').src = img.src;
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('imageModal').style.display = 'flex';
}

function modalKapat() {
    document.getElementById('imageModal').style.display = 'none';
}

function filtrele(kategori) {
    const butonlar = document.querySelectorAll('.filter-btn');
    butonlar.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    const urunler = document.querySelectorAll('.menu-item');
    urunler.forEach(urun => {
        const urunKategori = urun.getAttribute('data-kategori');
        if (kategori === 'hepsi' || urunKategori === kategori) {
            urun.style.display = 'flex';
        } else {
            urun.style.display = 'none';
        }
    });
}

function paketSec(paketAdi) {
    const notlarInput = document.getElementById('notlar');
    notlarInput.value = `Seçilen Paket: ${paketAdi}`;
    document.getElementById('iletisim').scrollIntoView({ behavior: 'smooth' });
}

function whatsappGonder(e) {
    e.preventDefault();

    const isim = document.getElementById('isim').value;
    const etkinlik = document.getElementById('etkinlik').value;
    const tarih = document.getElementById('teslimTarihi').value;
    const saat = document.getElementById('teslimSaati').value;
    const kisiSayisi = document.getElementById('kisiSayisi').value;
    const notlar = document.getElementById('notlar').value;

    const formatliTarih = tarih.split('-').reverse().join('.');
    const telefon = "905540101214";

    const mesaj = `Merhaba Esra Hanım,%0A%0AÖzel davetimiz için müsaitlik ve sipariş teklifi almak istiyorum:%0A` +
                  `👤 *Müşteri:* ${encodeURIComponent(isim)}%0A` +
                  `🎉 *Etkinlik:* ${encodeURIComponent(etkinlik)}%0A` +
                  `📅 *Teslim Alma Tarihi:* ${encodeURIComponent(formatliTarih)}%0A` +
                  `⏰ *Teslim Alma Saati:* ${encodeURIComponent(saat)}%0A` +
                  `👥 *Kişi Sayısı:* ${encodeURIComponent(kisiSayisi)} Kişi%0A` +
                  `📋 *İstenen Lezzetler / Paket:* ${encodeURIComponent(notlar)}%0A%0A` +
                  `Bu tarihte teslimat için müsaitliğiniz var mıdır? (%30 kapora şartı hakkında bilgi sahibiyim)`;

    const url = `https://wa.me/${telefon}?text=${mesaj}`;
    window.open(url, '_blank');
}