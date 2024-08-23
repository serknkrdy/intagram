document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Formun varsayılan gönderim davranışını engeller

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Bu kısımda, kullanıcı adını ve şifreyi bir API'ye gönderebilirsiniz.
    // Şimdilik, sadece basit bir uyarı göstereceğiz.
    alert(`Username: ${username}\nPassword: ${password}`);
});
