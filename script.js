document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#ff4757', '#2ed573', '#1e90ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});
