




const url = 'https://apis.scrimba.com/bored/api/activity'
fetch(url)
    .then(res => res.json())
    .then(data => {
        document.getElementById('activity-name').textContent = data.activity
    })