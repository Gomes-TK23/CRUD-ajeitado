function Login(){
    var usuario = document.getElementById("login").value;
    var senha = document.getElementById("senha").value;

    if(usuario === "admin" && senha === "123"){
        //alert('ola') 
        window.location.href = '/put.html';
    }else{
        alert('off')
        //window.location.href = '/login.html';
    }
}

