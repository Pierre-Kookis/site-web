function login(event) {
    event.preventDefault(); // Empêche le formulaire de se soumettre
    
    // Récupérer les valeurs du formulaire
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // Vérifier les noms d'utilisateur et les mots de passe
    if (username === 'admin1' && password === 'mdp1') {
      window.location.href = 'sit1/page.html'; // Redirection vers la page 1
    } else if (username === 'utilisateur2' && password === 'mdp2') {
      window.location.href = 'page2.html'; // Redirection vers la page 2
    } else if (username === 'utilisateur3' && password === 'mdp3') {
      window.location.href = 'page3.html'; // Redirection vers la page 3
    } else {
      alert('Nom d\'utilisateur ou mot de passe incorrect !');
    }
  }