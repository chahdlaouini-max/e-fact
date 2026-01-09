function verifierInformations() {
  let mail = document.getElementById("Email").value;
  let mssg = document.getElementById("error1");
  let mssg2 = document.getElementById("error2");
  let password = document.getElementById("Password").value;

  mssg.style.color = "#d80000";
  mssg.style.marginLeft = "5px";
  mssg.style.fontSize = "15px";
  mssg2.style.color = "#d80000";
  mssg2.style.marginLeft = "5px";
  mssg2.style.fontSize = "15px";

  if (mail == "") {
    mssg.innerHTML = "Veuillez taper un email!";
    return false;
  }

  const regex =
    /^[a-zA-Z0-9][a-zA-Z0-9._+]{0,63}@(gmail|yahoo|outlook)\.(com|fr|tn)$/;
  if (!regex.test(mail)) {
    mssg.innerHTML = "Format d'email incorrect!";
    return false;
  } else {
    mssg.style.display = "none";
  }

  if (password == "") {
    mssg2.innerHTML = "Veuillez taper un mot de passe!";
    return false;
  } else {
    mssg2.style.display = "none";
  }
}

// Fonction de connexion avec JSON
function bd() {
  let email = document.getElementById("Email").value;
  let password = document.getElementById("Password").value;

  // Récupérer les utilisateurs stockés dans le localStorage
  let users = localStorage.getItem("users"); // stocke tous les utilisateurs dans un objet JSON
  if (!users) {
    alert("Aucun utilisateur enregistré!");
    return false;
  }

  users = JSON.parse(users); // convertir le JSON en objet JS
  var usersp = {};

  usersp = JSON.parse(users);

  console.log("userp", usersp);
  // Vérifier si l'email existe
  if (!users[email]) {
    alert("Email non trouvé!");
    return false;
  }

  // Vérifier le mot de passe
  if (users[email].password !== password) {
    alert("Mot de passe invalide!");
    return false;
  }

  alert("Connexion réussie!");
  return true;
}
