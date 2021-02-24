var ListaCognomi = [
    "Bianchi",
    "Rossi", 
    "Duzioni", 
    "Balsano", 
    "Verdi"
]
console.log(ListaCognomi);


do {
    var CognomeInserito = prompt("Inserisci il tuo cognome");
}
while(CognomeInserito == 0);


if (CognomeInserito != "") {
    ListaCognomi.push(CognomeInserito);

    var NuovaLista = ListaCognomi;
    NuovaLista.sort();
    console.log(NuovaLista);

    var a = NuovaLista.indexOf(CognomeInserito);
    console.log(a);
      
}

