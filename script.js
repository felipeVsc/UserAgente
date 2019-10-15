function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
};

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
};

function nextPage(idActualDiv, idNextDiv) {
  document.getElementById(idActualDiv).classList.add('hidden')
  document.getElementById(idNextDiv).classList.remove('hidden')
};

var firebaseConfig = {
  apiKey: "AIzaSyB2_RDWk68PRh8Y58MJ0CbN8BkuPNTh1JU",
  authDomain: "agentetein.firebaseapp.com",
  databaseURL: "https://agentetein.firebaseio.com",
  projectId: "agentetein",
  storageBucket: "agentetein.appspot.com",
  messagingSenderId: "166401056761",
  appId: "1:166401056761:web:fd693f486b88eb13eda728"
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

// login user

var btLogar = document.getElementById("btLogar");
btLogar.addEventListener("click", function(){
  document.getElementById("emailLogin") == "";
  
  var emailLogin = document.getElementById("emailLogin").value;
  var senhaLogin = document.getElementById("senhaLogin").value;
  var docRefLogin = firestore.collection("users").doc(emailLogin);
  console.log("testado");
  docRefLogin.get().then(function(doc) {
      if (doc && doc.exists){
        const myData = doc.data();
        if (myData.senhaUsuario == senhaLogin){
          console.log(myData.emailUsuario);
          doc.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });

        // mudar pagina

        document.getElementById("btPageEnviarNot").addEventListener("click", function(){
          // nova pag

          document.getElementById("btMsgUsrNtf").addEventListener("click", function(){
            var docRef = firestore.collection("notificacoes").doc(emailUsuario); 
            docRef.set({
              emailUsuario: document.getElementById("emailUsuario").value,
              msgUsrNtf: document.getElementById("msgUsrNtf").value
            })

        })
      
          })
          
        else{
          console.log("senha errada");
        }
      }
    }).catch(function (error){
      console.log("error");
    })
  });


// VARIAVEIS CADASTRO //

document.getElementById("linkCadastrar").addEventListener("click", function(){
  document.getElementById("login").classList.add('hidden');
  document.getElementById("cadastro").classList.remove('hidden');
  
  var btCadastrar = document.getElementById("btCadastrar");

  btCadastrar.addEventListener("click", function(){
    console.log("clicado");
    document.getElementById("emailUsuario").value == "";
    var emailUsuario = document.getElementById("emailUsuario").value;
    var docRef = firestore.collection("users").doc(emailUsuario); 
    
    if(document.getElementById("senhaUsuario").value == document.getElementById("senhaUsuarioRepetir").value){
      docRef.set({
        nomeUsuario: document.getElementById("nomeUsuario").value,
        emailUsuario: document.getElementById("emailUsuario").value,
        senhaUsuario: document.getElementById("senhaUsuario").value,
        numSusUsuario: document.getElementById("numSusUsuario").value,
        cepUsuario: document.getElementById("cepUsuario").value,
        numeroUsuario: document.getElementById("numeroUsuario").value,
        enderecoUsuario: document.getElementById("enderecoUsuario").value
        
    
      })
    }
    else{
      alert("senha errada");
    }
  });
})
 









