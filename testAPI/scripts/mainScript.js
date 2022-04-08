     function affNomsVilles(){
            
        var requestURL =  'https://geo.api.gouv.fr/communes?codePostal=' + document.getElementById("champ__CP").value;
        console.log(requestURL);
        var request = new XMLHttpRequest();
        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();     

        request.onload = function () {
            var villes = request.response;
            var tabVilles = [];
            insertSelect = "";
            for(let i = 0; i < villes.length; i++){
            //  console.log(villes[i]["nom"]);
              tabVilles.push(villes[i]["nom"]);    
            }
         //   console.log(tabVilles);
            tabVilles.forEach(element => {
                insertSelect = insertSelect + "<option value = '" + element + "'>"+ element + "</option></br>" 
            });
                document.getElementById("select__ville").innerHTML = insertSelect; 
        }
    }