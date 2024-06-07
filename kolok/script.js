class Ksiazka {
    constructor(tytul, rok_wydania, imie_autora, nazwisko_autora, ilosc_wypozyczen = 0) {
        this.tytul = tytul;
        this.rok_wydania = rok_wydania;
        this.imie_autora = imie_autora;
        this.nazwisko_autora = nazwisko_autora;
        this.ilosc_wypozyczen = ilosc_wypozyczen;
    }

    pelne_imie_autora() {
        return `${this.imie_autora} ${this.nazwisko_autora}`.trim();
    }
}

const biblioteka = [
    new Ksiazka("Wiedźmin", 1993, "Andrzej", "Sapkowski", 5),
    new Ksiazka("Hobbit", 1937, "J.R.R.", "Tolkien", 3),
    new Ksiazka("Mistrz i Małgorzata", 1967, "Michaił", "Bułhakow", 2),
    new Ksiazka("Solaris", 1961, "Stanisław", "Lem", 8),
    new Ksiazka("Ferdydurke", 1937, "Witold", "Gombrowicz", 4) 
];

const tabela = document.getElementById("ksiazki");
const wierszNaglowka = tabela.insertRow();
["Tytuł", "Autor", "Rok wydania", "Wypożyczenia"].forEach(naglowek => {
    const th = document.createElement("th");
    th.textContent = naglowek;
    wierszNaglowka.appendChild(th);
});

biblioteka.forEach(ksiazka => {
    const wiersz = tabela.insertRow();
    [ksiazka.tytul, ksiazka.pelne_imie_autora(), ksiazka.rok_wydania, ksiazka.ilosc_wypozyczen].forEach(dane => {
        const td = wiersz.insertCell();
        td.textContent = dane;
    });
});

const wybranyRok = 1937;

console.log(`Książki wydane w roku ${wybranyRok}:`);
biblioteka.forEach(ksiazka => {
    if (ksiazka.rok_wydania === wybranyRok) {
        console.log(`- ${ksiazka.tytul}, autor: ${ksiazka.pelne_imie_autora()}`);
    }
});

//VALIDACJA


const emailField = document.querySelector("[name='email']");
const emailErrorField = document.querySelector("[name='email'] + .error");
emailField.addEventListener('input', () => {
    emailValidation(emailField, emailErrorField);
});
function emailValidation(field, errorField) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
        errorField.innerHTML = 'Proszę podać poprawny adres e-mail.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}
const passwordFiled = document.querySelector("[name='password']");
const passwrodErrorField = document.querySelector("[name='password'] + .error");
function passwordValidation(field, errorField) {
    console.log('test')
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{3,}$/;    
    if (!passwordRegex.test(field.value)) {
        errorField.innerHTML = 'Hasło mieć co najmniej 3 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.';
        return true;
    }
    else {
        errorField.innerHTML = '';
        return false;
    }
}






const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (validForm()) {
        alert('Sukces');
    }
});

function validForm() {
    console.log(passwordValidation(passwordFiled, passwrodErrorField))
    console.log(emailValidation(emailField, emailErrorField))
     if (
        emailValidation(emailField, emailErrorField) || passwordValidation(passwordFiled, passwrodErrorField) 
    ) {
         return false;
     }

    return true;
}