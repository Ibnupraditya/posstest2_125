
	const tombol = document.getElementById("daftar")
tombol.onclick = daftar;

function daftar(e){
    e.preventDefault();
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("user").value;
        const pass = document.getElementById("pw").value;

localStorage.setItem("nama",nama);
localStorage.setItem("username",email);
localStorage.setItem("password",pass);

alert("berhasil mendaftar akun")
window.location.href = "../login/alert.html";
    }
