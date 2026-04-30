const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("firstname") || "Dziękujemy";

    alert(
      `${name}, dziękujemy za zgłoszenie! Formularz demonstracyjny jest gotowy do podłączenia pod e-mail, CRM albo system rezerwacji.`
    );

    contactForm.reset();
  });
}