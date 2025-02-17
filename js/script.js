document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    alert(`予約ありがとうございます！\n名前: ${name}\nメール: ${email}\n希望日: ${date}`);
});
