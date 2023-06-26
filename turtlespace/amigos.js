function showDetails(name) {
    // ...
  
    // Adicionar a classe 'active' ao elemento clicado
    var friends = document.querySelectorAll('.friend-details');
    friends.forEach(function(friend) {
      friend.classList.remove('active');
    });
    var clickedFriend = document.querySelector('.friend-details[data-name="' + name + '"]');
    clickedFriend.classList.add('active');
  
    // Exibir a página de detalhes
    document.getElementById('details').style.display = 'block';
  }
  