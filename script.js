$(function () {
    $('[data-toggle="popover"]').popover()
  })
  
$('#modalExemplo').on('shown.bs.modal', function (event) {
  $("#testebotao").trigger("click");  
});

  $("#testebotao").on("click",function(){
  console.log("button inside modal clicked");
  
  
  });

function mudarTexto(idTexto){
  let atual = document.getElementById('textoModel');
  atual.innerText = idTexto;

};

function mudarImagem(idImagem){
  document.getElementById("imgIcone").src="icons/"+idImagem+".png";
  
}

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

// FIREBASE REALTIMEDATABASE

var database = firebase.database();

// CRIAR

function writeUserData(userId, name, email, imageUrl) {
  firebase.database().ref('users/' + userId).set({
    username: name,
    email: email,
    profile_picture : imageUrl
  });
}

function writeNewPost(uid, username, picture, title, body) {
  // A post entry.
  var postData = {
    author: username,
    uid: uid,
    body: body,
    title: title,
    starCount: 0,
    authorPic: picture
  };

  // Get a key for a new Post.
  var newPostKey = firebase.database().ref().child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
 

  return firebase.database().ref().update(updates);
}

function nextPage(idActualDiv, idNextDiv) {
  document.getElementById(idActualDiv).classList.add('hidden')
  document.getElementById(idNextDiv).classList.remove('hidden')
}