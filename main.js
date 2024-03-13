/* 1. Duomenų Objektas: 
Sukurkite objektą, kuris saugotų jūsų mėgstamiausios knygos pavadinimą, autorių ir leidimo metus. Išveskite kiekvieną objekto savybę naudojant for in ciklą. */
console.log("    1 UZDUOTIS")
const book = 
    {
        title: "The Hobbit",
        author: "John Ronald",
        year: "1937"
    };

for (let i in book) {
console.log(book[i]);
}

/* 2.     Vartotojų Masyvas: 
Sukurkite masyvą, kuriame būtų kelios objektų reikšmės, kiekviena reikšmė turėtų vartotojo vardą ir amžių. Naudodami for of ciklą, išveskite kiekvieno vartotojo vardą ir amžių. */
console.log("    2 UZDUOTIS");
 const people = 
 [
    {
        name: "John",
        age: 30
    },
    {
        name: "Mary",
        age: 25
    },
    {
        name: "Peter",
        age: 20
    }
 ]

 for (let person of people) {
    console.log(person.name);
    console.log(person.age);
 }

 /* 3.     Sąrašo Filtravimas: 
 Turite objektų masyvą, kuriame saugoma informacija apie įvairius produktus (pavadinimas, kaina, kategorija). Parašykite funkciją, kuri naudojant for of ciklą grąžintų tik tuos produktus, kurie priklauso tam tikrai kategorijai. */

 console.log("    3 UZDUOTIS");

const produktai = 
[
    {
        pavadinimas: "obuoliai",
        kaina: "5 litai",
        kategorija: "vaisiai",
    },
    {
        pavadinimas: "morkos",
        kaina: "52 litai",
        kategorija: "daržovės",
    },
    {
        pavadinimas: "sprandine",
        kaina: "502 litai",
        kategorija: "mėsa"
    },
    {
        pavadinimas: "svogūnai",
        kaina: "2 litai",
        kategorija: "daržovės",
    },
    {
        pavadinimas: "kriaušės",
        kaina: "5 litai",
        kategorija: "vaisiai",
    },
    {
        pavadinimas: "vištiena",
        kaina: "58 litai",
        kategorija: "mėsa",
    },
]


function kategorija(pav) {
    let atrinktaKategorija = [];
    for (preke of produktai) {
        if (preke.kategorija === pav) {
            atrinktaKategorija.push(preke);
        }
    }
    return atrinktaKategorija;
}
console.log(kategorija("mėsa"));

/*4.     Objekto Kopijavimas: 
Parašykite funkciją, kuri naudojant for in ciklą sukurtų objekto kopiją. */
console.log("    4 UZDUOTIS");
const doc = 
    {
        title: "X-FILES",
        author: "Unknown",
        year: "2050",
    };

let copy = {};
for (let x in doc) {
copy[x] = doc[x];
}
console.log(copy);

/*5.     Raktų ir Reikšmių Atrinkimas: 
Turite vartotojo objektą su įvairiomis savybėmis. Naudodami for in ciklą, sukurti du masyvus: viename saugokite objekto raktus, o kitame - reikšmes.*/
console.log("    5 UZDUOTIS");
const translate = 
    {
        title: "pavadinimias",
        author: "autorius",
        year: "metai",
        price: "kaina",
        category: "kategorija",
    };

    let keys = [];
    let name = [];
    for (type in translate) {
        keys.push(type);
        name.push(translate[type]);
    }
    console.log(keys);
    console.log(name);

    /*6.     Masyvo Suma: 
    Turite masyvą, kuriame yra skaičiai. Naudodami for ciklą, apskaičiuokite masyvo skaičių sumą.*/
    console.log("    6 UZDUOTIS");

    const numbersArr = [100, 500, 200, 50, 150];
    let sum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        sum += numbersArr[i];
    }
    console.log(sum);

    /* 7.     Didžiausias Skaičius: 
    Turite skaičių masyvą. Naudodami for ciklą, raskite didžiausią skaičių masyve.*/
    console.log("    7 UZDUOTIS");
    const maxArr = [100, 500000, 200, 15000, 1500000];
    let max = 0;
    for (let i = 0; i < maxArr.length; i++) {
     if (maxArr[i] > max) {
         max = maxArr[i];
     }
    }
    console.log(max);

    /* 8.     Objekto Savybių Skaičius: 
    Sukurkite funkciją, kuri naudojant for in ciklą, grąžina objekto savybių skaičių.*/
    console.log("    8 UZDUOTIS");
    const types = 
    {
        title: "pavadinimias",
        author: "autorius",
        year: "metai",
        price: "kaina",
        category: "kategorija",
       
    };
    function typesSum() {
        let counter = 0;
        for (x in types) {
            if (x.length > 0) {
                counter++
            }
        }
        return counter;
    }
    console.log(typesSum());

    /* 9.     Sąlyginis Objektų Atrinkimas: 
    Turite vartotojų masyvą su objektais, kuriuose yra vardas ir amžius. Naudodami for of ciklą, išveskite tik tuos vartotojus, kurių amžius yra didesnis nei 18. */
    console.log("    9 UZDUOTIS");
const persons = 
    [
        {
            name: "John",
            age: "18",
        },
        {
            name: "Tom",
            age: "28",
        },
        {
            name: "Keith",
            age: "17",
        },
        {
            name: "Donald",
            age: "40",
        },
        {
            name: "Bruce",
            age: "1",
        },
        {
            name: "Kyle",
            age: "55",
        },
    ]
    
    let filteredAge = [];
    for (pers of persons) {
        if (pers.age > 18) {
            filteredAge.push(pers.age)
        }   
    }
console.log(filteredAge)

/* 10.  Objekto Savybių Keitimas: 
Turite objektą, kuriame saugomi įvairių žmonių amžiai. Naudodami for in ciklą, padidinkite kiekvieno asmens amžių 1 metais.*/
console.log("    10 UZDUOTIS");

const personAge = 
        {
            ageJohn: "5",
            ageMark: "19",
            ageSteve: "25",
            ageKeith: "50",
            ageBruce: "14",
        };

        let agePlusOne = {};
        for (let age in personAge) {
            agePlusOne[age] = Number(personAge[age]) + 1
        }
    console.log(agePlusOne);