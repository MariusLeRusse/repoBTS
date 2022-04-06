/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function shuffle(array) { //pris sur Internet
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    
    return array;
}

function aleat() {
    var tabl = ['<div class="carte"  id="a1" onclick="carteClick(this.id, this.className)"> <img src="Image/img1.png" alt="Naruto"/></div>', '<div class="carte"  id="a2" onclick="carteClick(this.id, this.className)"> <img src="Image/img1.png" alt="Naruto"/></div>',
        '<div class="carte"  id="b1" onclick="carteClick(this.id, this.className)"> <img src="Image/img2.png" alt="Sasuke"/></div>', '<div class="carte"  id="b2" onclick="carteClick(this.id, this.className)"> <img src="Image/img2.png" alt="Sasuke"/></div>',
        '<div class="carte"  id="c1" onclick="carteClick(this.id, this.className)"> <img src="Image/img3.png" alt="Orochimaru"/></div>', '<div class="carte"  id="c2" onclick="carteClick(this.id, this.className)"> <img src="Image/img3.png" alt="Orochimaru"/></div>',
        '<div class="carte"  id="d1" onclick="carteClick(this.id, this.className)"> <img src="Image/img4.png" alt="Jiraya"/></div>', '<div class="carte"  id="d2" onclick="carteClick(this.id, this.className)"> <img src="Image/img4.png" alt="Jiraya"/></div>',
        '<div class="carte"  id="e1" onclick="carteClick(this.id, this.className)"> <img src="Image/img5.png" alt="Isshiki"/></div>', '<div class="carte"  id="e2" onclick="carteClick(this.id, this.className)"> <img src="Image/img5.png" alt="Isshiki"/></div>',
        '<div class="carte"  id="f1" onclick="carteClick(this.id, this.className)"> <img src="Image/img6.png" alt="Itachi"/></div>', '<div class="carte"  id="f2" onclick="carteClick(this.id, this.className)"> <img src="Image/img6.png" alt="Itachi"/></div>',
        '<div class="carte"  id="g1" onclick="carteClick(this.id, this.className)"> <img src="Image/img7.png" alt="Deidara"/></div>', '<div class="carte"  id="g2" onclick="carteClick(this.id, this.className)"> <img src="Image/img7.png" alt="Deidara"/></div>',
        '<div class="carte"  id="h1" onclick="carteClick(this.id, this.className)"> <img src="Image/img8.png" alt="Madara"/></div>', '<div class="carte"  id="h2" onclick="carteClick(this.id, this.className)"> <img src="Image/img8.png" alt="Madara"/></div>',
        '<div class="carte"  id="i1" onclick="carteClick(this.id, this.className)"> <img src="Image/img9.png" alt="Pain"/></div>', '<div class="carte"  id="i2" onclick="carteClick(this.id, this.className)"> <img src="Image/img9.png" alt="Pain"/></div>',
        '<div class="carte"  id="j1" onclick="carteClick(this.id, this.className)"> <img src="Image/img0.png" alt="Minato"/></div>', '<div class="carte"  id="j2" onclick="carteClick(this.id, this.className)"> <img src="Image/img0.png" alt="Minato"/></div>'];
    shuffle(tabl);
    document.getElementById("cartes").innerHTML = tabl[0] + tabl[1] + tabl[2] + tabl[3] + tabl[4] + tabl[5] + tabl[6] + tabl[7] + tabl[8] + tabl[9] + tabl[10] + tabl[11] + tabl[12] + tabl[13] + tabl[14] + tabl[15] +
            tabl[16] + tabl[17] + tabl[18] + tabl[19];
}

function lancer() {
    aleat();
    document.getElementById("jeu").style.display = "inline-block";
    document.getElementById("select").style.display = "none";
    document.getElementById("p1").innerHTML = document.getElementById("nom1").value + " :";
    document.getElementById("p2").innerHTML = document.getElementById("nom2").value + " :";
    document.getElementById("msg").innerHTML = "Au tour de : " + document.getElementById("nom1").value;
}

function compte() {
    a = parseInt(document.getElementById("triche").textContent);
    document.getElementById("triche").innerHTML = a + 1;
    a++;
    if (a === 2) {
        document.getElementById("triche").innerHTML = 0;
    }
    return a;


}
function faux(id) {


    document.getElementById(id).className = "carte";
    document.getElementById(document.getElementById("rep").textContent).className = "carte";
}

function tour() {
    if (document.getElementById("tour").textContent == "j1") {
        document.getElementById("msg").innerHTML = "Au tour de : " + document.getElementById("nom1").value;
        document.getElementById("tour").innerHTML = "j2";
        document.getElementById("msg").style.color = "black";
        return;
        ;
    }
    if (document.getElementById("tour").textContent == "j2") {
        document.getElementById("msg").innerHTML = "Au tour de : " + document.getElementById("nom2").value;
        document.getElementById("tour").innerHTML = "j1";
        document.getElementById("msg").style.color = "black";
        return;
    }

}

function carteClick(id, className) {

    b = compte();
    c = document.getElementById(id).id;

    if (b === 1) {
        document.getElementById("rep").innerHTML = id;
        document.getElementById(id).className = "carteOn";

    }
    if (b === 2) {
        document.getElementById(id).className = "carteOn";
        if (id.substr(0, 1) === document.getElementById("rep").textContent.substr(0, 1)) {
            document.getElementById("msg").innerHTML = "Bonne paire";
            document.getElementById("msg").style.color = "green";
            document.getElementById(id).style.backgroundColor = "green";
            document.getElementById(document.getElementById("rep").textContent).style.backgroundColor = "green";
            if (document.getElementById("tour").textContent == "j2") {
                document.getElementById("score1").innerHTML += "<img src=Image/mangekyou.png/>";
            } else {
                document.getElementById("score2").innerHTML += "<img src=Image/mangekyou.png/>";
            }
            if (document.getElementsByClassName("carte").length == 0) {
                document.getElementById("jeu").innerHTML = "<p onclick=location.reload()>FIN DE PARTIE</p>";
                document.getElementById("jeu").style.margin = "30% 30% 20% 20%";
                document.getElementById("jeu").style.fontFamily = "Ninja";
                document.getElementById("jeu").style.textAlign = "center";
                document.getElementById("jeu").style.fontSize = "5em";
                document.getElementById("jeu").style.height = "40%";
                document.getElementById("jeu").style.width = "60%";
            }
        } else {
            document.getElementById("msg").innerHTML = "Mauvaise paire";
            document.getElementById("msg").style.color = "red";
            setTimeout(faux, 500, id);
        }
        setTimeout(tour, 500);
    }
}

