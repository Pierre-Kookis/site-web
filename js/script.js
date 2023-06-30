function login(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre
    
    // Récupérer les valeurs du formulaire
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Vérifier les noms d'utilisateur et les mots de passe
    if (username === 'admin1' && password === 'mdp1') {
      window.location.href = 'page1.html'; // Redirection vers la page 1
    } else if (username === 'admin2' && password === 'mdp2') {
      window.location.href = 'page2.html'; // Redirection vers la page 2
    } else if (username === 'admin3' && password === 'mdp3') {
      window.location.href = 'page3.html'; // Redirection vers la page 3
    } else if (username === 'admin4' && password === 'mdp4') {
      window.location.href = 'page4.html'; // Redirection vers la page 4
    } else if (username === 'admin5' && password === 'mdp5') {
      window.location.href = 'page5.html'; // Redirection vers la page 5
    } else if (username === 'admin6' && password === 'mdp6') {
      window.location.href = 'page6.html'; // Redirection vers la page 6
    } else if (username === 'admin7' && password === 'mdp7') {
      window.location.href = 'page7.html'; // Redirection vers la page 7
    } else if (username === 'admin8' && password === 'mdp8') {
      window.location.href = 'page8.html'; // Redirection vers la page 8
    } else if (username === 'admin9' && password === 'mdp9') {
      window.location.href = 'page9.html'; // Redirection vers la page 9
    } else if (username === 'admin10' && password === 'mdp10') {
      window.location.href = 'page10.html'; // Redirection vers la page 10
    } else if (username === 'admin11' && password === 'mdp11') {
      window.location.href = 'page11.html'; // Redirection vers la page 11
    } else if (username === 'admin12' && password === 'mdp12') {
      window.location.href = 'page12.html'; // Redirection vers la page 12
    } else if (username === 'admin13' && password === 'mdp13') {
      window.location.href = 'page13.html'; // Redirection vers la page 13
    } else if (username === 'admin14' && password === 'mdp14') {
      window.location.href = 'page14.html'; // Redirection vers la page 14
    } else if (username === 'admin15' && password === 'mdp15') {
      window.location.href = 'page15.html'; // Redirection vers la page 15
    } else if (username === 'admin16' && password === 'mdp16') {
      window.location.href = 'page16.html'; // Redirection vers la page 16
    } else if (username === 'admin17' && password === 'mdp17') {
      window.location.href = 'page17.html'; // Redirection vers la page 17
    } else if (username === 'admin18' && password === 'mdp18') {
      window.location.href = 'page18.html'; // Redirection vers la page 18
    } else if (username === 'admin19' && password === 'mdp19') {
      window.location.href = 'page19.html'; // Redirection vers la page 19
    } else if (username === 'admin20' && password === 'mdp20') {
      window.location.href = 'page20.html'; // Redirection vers la page 20
    } else if (username === 'admin21' && password === 'mdp21') {
      window.location.href = 'page21.html'; // Redirection vers la page 21
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect !');
    }
  }
