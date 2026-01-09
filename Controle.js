function verifierInformations() {
  var vali = 0;
  // Récupération des valeurs
  let mail = document.getElementById("Email").value.trim();
  let prenom = document.getElementById("Prenom").value.trim();
  let nom = document.getElementById("Nom").value.trim();
  let tel = document.getElementById("Tel").value.trim();
  let password = document.getElementById("Password").value;
  let confirmPassword = document.getElementById("ConfirmPassword").value;

  // Messages d'erreur
  let mssg1 = document.getElementById("m1");
  let mssg2 = document.getElementById("m2");
  let mssg3 = document.getElementById("m3");
  let mssg4 = document.getElementById("m5");
  let mssg5 = document.getElementById("m6");
  let mssg6 = document.getElementById("m4");

  mssg1.style.color = "#d80000";
  mssg1.style.marginLeft = "5px";
  mssg1.style.fontSize = "15px";
  mssg2.style.color = "#d80000";
  mssg2.style.marginLeft = "5px";
  mssg2.style.fontSize = "15px";

  mssg3.style.color = "#d80000";
  mssg3.style.marginLeft = "5px";
  mssg3.style.fontSize = "15px";
  mssg4.style.color = "#d80000";
  mssg4.style.marginLeft = "5px";
  mssg4.style.fontSize = "15px";

  mssg5.style.color = "#d80000";
  mssg5.style.marginLeft = "5px";
  mssg5.style.fontSize = "15px";
  mssg6.style.color = "#d80000";
  mssg6.style.marginLeft = "5px";
  mssg6.style.fontSize = "15px";

  // Réinitialisation des messages
  [mssg1, mssg2, mssg3, mssg4, mssg5, mssg6].forEach(
    (el) => (el.innerHTML = "")
  );

  // Validation de l'email
  if (mail === "") {
    mssg1.innerHTML = "Veuillez taper un email!";
    return false;
  } else {
    mssg1.style.display = "none";
  }
  const regexMail =
    /^[a-zA-Z0-9][a-zA-Z0-9._+]{0,63}@(gmail|yahoo|outlook)\.(com|fr|tn)$/;
  if (!regexMail.test(mail)) {
    mssg1.innerHTML = "Email incorrect!";
    return false;
  } else {
    mssg1.style.display = "none";
  }

  // Validation du prénom
  if (prenom === "") {
    mssg2.innerHTML = "Veuillez taper un prénom!";
    return false;
  } else {
    mssg2.style.display = "none";
  }
  const regexNom = /^[a-zA-Z]+$/;
  if (!regexNom.test(prenom)) {
    mssg2.innerHTML = "Prénom incorrect!";
    return false;
  } else {
    mssg2.style.display = "none";
  }

  // Validation du nom
  if (nom === "") {
    mssg3.innerHTML = "Veuillez taper un nom!";
    return false;
  } else {
    mssg3.style.display = "none";
  }
  if (!regexNom.test(nom)) {
    mssg3.innerHTML = "Nom incorrect!";
    return false;
  } else {
    mssg3.style.display = "none";
  }

  // Validation du numéro de téléphone
  if (tel === "") {
    mssg6.innerHTML = "Veuillez taper un numero de telephone";
    return false;
  } else {
    mssg6.style.display = "none";
  }
  if (tel.length !== 8) {
    mssg6.innerHTML = "Veuillez taper un numero de telephone corrécte";
    return false;
  } else {
    mssg6.style.display = "none";
  }

  // Validation du mot de passe
  if (password === "") {
    mssg4.innerHTML = "Veuillez taper un mot de passe!";
    return false;
  } else {
    mssg4.style.display = "none";
  }
  if (confirmPassword === "") {
    mssg5.innerHTML = "Veuillez retaper le mot de passe!";
    return false;
  } else {
    mssg5.style.display = "none";
  }
  if (password !== confirmPassword) {
    mssg5.innerHTML = "Les mots de passe ne correspondent pas!";
    return false;
  } else {
    mssg5.style.display = "none";
  }

  // Récupération des utilisateurs existants depuis localStorage
  let users = localStorage.getItem("users");
  users = users ? JSON.parse(users) : {};

  // Vérification si l'email existe déjà
  if (users[mail]) {
    mssg1.innerHTML = "Cet email est déjà utilisé!";
    return false;
  } else {
    mssg1.style.display = "none";
  }

  // Ajout du nouvel utilisateur
  users[mail] = {
    prenom: prenom,
    nom: nom,
    tel: tel,
    password: password,
  };

  // Sauvegarde dans localStorage
  localStorage.setItem("users", JSON.stringify(users));
  console.log("step save ");

  // alert("Inscription réussie !");
   window.location.href="pageLogin.html";

  console.log("redirect");
  console.log("val", vali);
  //return true;
}
