function batmanGameOrder(a,b){
    var batman=["Arkham Origins",
               "Arkham Origins Blackgate",
            "Assult On Arkham",
            "Arkham Asylum",
              "Arkham City",
               "Arkham Knight"];
               return batman.indexOf(a)-batman.indexOf(b);
}

var games=["Arkham Knight",
           "Arkham Asylum",
            "Arkham Origins",
             "Arkham Origins Blackgate",
            ];

        var   sortgames=games.sort(batmanGameOrder);
        sortgames.forEach(print);
          function print(elements)
          {
            console.log(elements);
          }
        