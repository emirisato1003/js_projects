const activityName = document.getElementById('activity-name');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    document.getElementById('title').textContent = 'FunBot🎮'
    const url = 'https://apis.scrimba.com/bored/api/activity';
    fetch(url)
        .then(res => res.json())
        .then(data => {
            activityName.textContent = data.activity;
        });
})

