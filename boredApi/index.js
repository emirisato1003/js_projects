const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const url = 'https://apis.scrimba.com/bored/api/activity';
    fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById('activity-name').textContent = data.activity;
        document.getElementById('title').textContent = 'FunBot🎮'
        document.querySelector('main').classList = 'fun'
        });
})

