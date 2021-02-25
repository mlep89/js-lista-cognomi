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
while(CognomeInserito.length == 0);


if (CognomeInserito != "") {
    ListaCognomi.push(CognomeInserito);

    var NuovaLista = ListaCognomi;
    NuovaLista.sort();
    console.log(NuovaLista);

    //for (var i = 0; i < NuovaLista.length; i++) {
        //if (CognomeInserito == NuovaLista[i])
        //console.log()
    //}

    var a = NuovaLista.indexOf(CognomeInserito);
    console.log(CognomeInserito);
    console.log(a);
      
}

