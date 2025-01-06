function calculate() { 
    var domicile = document.getElementById("domicile").value;
    var place = document.getElementById("place").value;
    var comissionplace = parseFloat(document.getElementById("comissionplace").value);
    var comissiondomicile=parseFloat(document.getElementById("comissiondomicile").value);
    var valeurNominal = parseFloat(document.getElementById("valeurNominal").value);
    var tauxEscompte = parseFloat(document.getElementById("tauxEscompte").value);
    var dateOperation = new Date(document.getElementById("dateOperation").value);
    var dateEcheance = new Date(document.getElementById("dateEcheance").value);
    var nbrJoursBanque = parseFloat(document.getElementById("nbrJoursBanque").value);
    var tauxEnd = parseFloat(document.getElementById("tauxEnd").value);
    var tva = parseFloat(document.getElementById("tva").value);
    var nbrJoursEscompte = (dateEcheance - dateOperation) / (1000 * 3600 * 24);
    var comissiontva = (comissiondomicile + comissionplace) * 0.01 * tva;
    var comission = comissiondomicile + comissionplace;
    var escompte = ((nbrJoursBanque + nbrJoursEscompte) * (tauxEnd + tauxEscompte)) * valeurNominal / 36000;
    var agios = escompte + comissiontva + comissiondomicile + comissionplace;
    var nbrJourstotal = nbrJoursBanque + nbrJoursEscompte;
    var valeuractuelle = valeurNominal- agios;
    var resultsTable = document.getElementById("resultsTable");
    resultsTable.innerHTML = `
      <tr>
        <th>Valeur Nominal</th>
        <th>Date d'Opération</th>
        <th>Date d'Échéance</th>
        <th>Nombre de Jours d'Escompte</th>
        <th>Nombre de Jours de Banque</th>
        <th>nbrJourstotal</th>
        <th>Escompte</th>
        <th>Domicile</th>
        <th>place</th>
        <th>comission</th>
        <th>comissiontva</th>
        <th>Agios</th>
        <th>valeuractuelle</th>
      </tr>
      <tr>
        <td>${valeurNominal}</td>
        <td>${dateOperation.toDateString()}</td>
        <td>${dateEcheance.toDateString()}</td>
        <td>${nbrJoursEscompte}</td>
        <td>${nbrJoursBanque}</td>
        <td>${nbrJourstotal.toFixed(2)}</td>
        <td>${escompte.toFixed(2)}</td>
        <td>${domicile}</td>
        <td>${place}</td>
        <td>${comission.toFixed(2)}</td>
        <td>${comissiontva.toFixed(2)}</td>
        <td>${agios.toFixed(2)}</td>
        <td>${valeuractuelle.toFixed(2)}</td>
      </tr>
    `
    document.getElementById("resultPanel").style.display = "block";
  }