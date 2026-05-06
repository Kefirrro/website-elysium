/* NAV */
document.getElementById('hamburger').addEventListener('click', () => {
  document.getElementById('mobileMenu').classList.toggle('open');
});
function closeMobile() {
  document.getElementById('mobileMenu').classList.remove('open');
}

/* STICKY NAV */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.style.background = window.scrollY > 50 ? 'rgba(8,8,8,0.97)' : 'rgba(8,8,8,0.92)';
});

/* FAQ */
function toggleFaq(btn) {
  const item = btn.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* REVEAL ON SCROLL */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 0);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* COUNT UP */
function countUp(el, target) {
  const duration = 1800;
  const start = performance.now();
  const suffix = el.querySelector('.stat-suffix') ? el.querySelector('.stat-suffix').outerHTML : '';
  el.querySelector('.stat-suffix') && el.querySelector('.stat-suffix').remove();
  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = Math.round(ease * target);
    el.childNodes[0].textContent = val.toLocaleString('pl-PL');
    if (progress < 1) requestAnimationFrame(update);
    else el.childNodes[0].textContent = target.toLocaleString('pl-PL');
  }
  requestAnimationFrame(update);
  if (suffix) el.insertAdjacentHTML('beforeend', suffix);
}
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      document.querySelectorAll('.stat-number').forEach(el => {
        countUp(el, parseInt(el.dataset.target));
      });
      statsObserver.disconnect();
    }
  });
}, { threshold: 0.5 });
const statsSection = document.getElementById('stats');
if (statsSection) statsObserver.observe(statsSection);

/* FORM */
function submitForm(e) {
  e.preventDefault();
  const btn = e.target.querySelector('.form-submit');
  btn.textContent = 'Wysłano! Wkrótce się odezwiemy.';
  btn.style.background = '#1a8c3a';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Wyślij wiadomość';
    btn.style.background = '';
    btn.disabled = false;
    e.target.reset();
  }, 4000);
}

/* MODALS */
const modalContent = {
  regulamin: {
    title: 'Regulamin siłowni',
    body: `<h3>§1 Postanowienia ogólne</h3><p>Niniejszy regulamin określa zasady korzystania z obiektu Elysium Sport & Fitness, zwanego dalej „Siłownią". Przebywając na terenie obiektu, każdy klient potwierdza zapoznanie się z regulaminem i zobowiązuje się do jego przestrzegania.</p><h3>§2 Zasady wstępu</h3><p>Z siłowni mogą korzystać osoby, które ukończyły 16. rok życia. Osoby w wieku 16–18 lat muszą posiadać pisemną zgodę rodzica lub opiekuna prawnego. Wejście możliwe jest po okazaniu ważnego karnetu lub wykupieniu jednorazowego biletu wstępu.</p><h3>§3 Obowiązki klientów</h3><p>Klienci zobowiązani są do: korzystania ze sprzętu zgodnie z jego przeznaczeniem, odkładania ciężarów na wyznaczone miejsca po zakończeniu ćwiczeń, używania ręcznika na maszynach i ławkach, noszenia obuwia sportowego (wymiennego), zachowania kultury osobistej wobec innych klientów i personelu.</p><h3>§4 Odpowiedzialność</h3><p>Siłownia nie ponosi odpowiedzialności za kontuzje i urazy powstałe wskutek nieprawidłowego korzystania ze sprzętu lub nieprzestrzegania wskazówek trenerów. Klienci korzystają z obiektu na własne ryzyko.</p><h3>§5 Postanowienia końcowe</h3><p>Regulamin wchodzi w życie z dniem 1 stycznia 2024 r. Zarząd Elysium zastrzega sobie prawo do zmiany regulaminu po uprzednim poinformowaniu klientów.</p>`
  },
  polityka: {
    title: 'Polityka prywatności',
    body: `<h3>1. Administrator danych</h3><p>Administratorem Twoich danych osobowych jest Elysium Sport & Fitness Sp. z o.o. z siedzibą przy ul. Sportowej 18, 00-001 Warszawa. Kontakt z administratorem: kontakt@elysiumfitness.pl</p><h3>2. Zakres przetwarzanych danych</h3><p>Przetwarzamy dane osobowe podane przez Ciebie w formularzach kontaktowych, przy rejestracji na zajęcia oraz w trakcie korzystania z usług: imię i nazwisko, adres e-mail, numer telefonu, dane dotyczące stanu zdrowia (wyłącznie za Twoją zgodą, w celach rehabilitacyjnych).</p><h3>3. Cel przetwarzania</h3><p>Twoje dane przetwarzane są w celu: realizacji usług fitness i rehabilitacyjnych, komunikacji z klientami, wystawiania faktur i dokumentów sprzedaży, wysyłki newslettera (wyłącznie za Twoją zgodą).</p><h3>4. Prawa użytkownika</h3><p>Przysługuje Ci prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych oraz wniesienia sprzeciwu. Możesz je zrealizować, kontaktując się z nami mailowo lub pisemnie.</p><h3>5. Pliki cookies</h3><p>Nasza strona używa plików cookies w celach analitycznych i funkcjonalnych. Możesz zarządzać plikami cookies w ustawieniach swojej przeglądarki.</p>`
  },
  rodo: {
    title: 'Informacja RODO',
    body: `<h3>Klauzula informacyjna RODO</h3><p>Zgodnie z art. 13 Rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) informujemy:</p><h3>Administrator</h3><p>Administratorem Pani/Pana danych osobowych jest Elysium Sport & Fitness Sp. z o.o., ul. Sportowa 18, 00-001 Warszawa, NIP: 000-000-00-00.</p><h3>Cele i podstawy przetwarzania</h3><p>Dane przetwarzane są na podstawie: art. 6 ust. 1 lit. b RODO (wykonanie umowy), art. 6 ust. 1 lit. c RODO (obowiązek prawny), art. 6 ust. 1 lit. a RODO (zgoda — dotyczy marketingu i newslettera).</p><h3>Okres przechowywania</h3><p>Dane przechowywane są przez okres obowiązywania umowy, a po jej zakończeniu przez czas wynikający z przepisów prawa (np. 5 lat dla dokumentów księgowych). Dane marketingowe — do czasu cofnięcia zgody.</p><h3>Przysługujące prawa</h3><p>Ma Pani/Pan prawo do: dostępu do danych, sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia sprzeciwu wobec przetwarzania, wniesienia skargi do Prezesa UODO (ul. Stawki 2, Warszawa).</p>`
  }
};
function openModal(type) {
  const c = modalContent[type];
  document.getElementById('modal-title').textContent = c.title;
  document.getElementById('modal-body').innerHTML = c.body;
  document.getElementById('modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(e) {
  if (e.target === document.getElementById('modal-overlay')) closeModalDirect();
}
function closeModalDirect() {
  document.getElementById('modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModalDirect(); });