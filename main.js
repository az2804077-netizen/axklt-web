function getUsers(){
    return JSON.parse(localStorage.getItem("users")) || {};
}

function saveUsers(data){
    localStorage.setItem("users", JSON.stringify(data));
}

function register(){
    let u = document.getElementById("regUser").value;
    let p = document.getElementById("regPass").value;

    if(!u || !p){
        alert("Nhập đầy đủ!");
        return;
    }

    let users = getUsers();

    if(users[u]){
        alert("Tài khoản đã tồn tại!");
        return;
    }

    users[u] = p;
    saveUsers(users);

    alert("Tạo tài khoản thành công!");
    showLogin();
}

function login(){
    let u = document.getElementById("user").value;
    let p = document.getElementById("pass").value;

    let users = getUsers();

    if(users[u] === p){
        localStorage.setItem("currentUser", u);
        window.location.href = "home.html";
    }else{
        alert("Sai tài khoản!");
    }
}

function logout(){
    localStorage.removeItem("currentUser");
    window.location.href = "index.html";
}

function showRegister(){
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("registerBox").style.display = "block";
}

function showLogin(){
    document.getElementById("registerBox").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
}

function showInvite(){
    alert("🔥 Ai vào quân đoàn thì kb id: 7918047424");
}

function showUsers(){
    let users = getUsers();
    let text = "<h3>Danh sách tài khoản:</h3>";

    for(let u in users){
        text += "<p>" + u + "</p>";
    }

    document.getElementById("list").innerHTML = text;
}