function calc(){
     let mathGrade = Number(document.getElementById("math").value);
     let physicsGrade=Number(document.getElementById("physics").value);
     let chemistryGrade=Number(document.getElementById("chemistry").value);


     let mathweight =3;
     let physicshweight =3;
     let chemistryweight =3;
     let weightAvg =(mathGrade *mathweight + physicsGrade* physicshweight+ chemistryGrade* chemistryweight)/(mathweight +physicshweight +chemistryweight);
     document.getElementById("result").innerText=weightAvg;
}