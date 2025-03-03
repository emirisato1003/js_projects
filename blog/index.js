fetch("https://apis.scrimba.com/jsonplaceholder/posts", { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
        const postsArr = data.slice(0, 5);
        const posts = postsArr.map(post => {
            return (`<div class="singlePost">
        <h1>${post.title}</h1>
        <p>${post.body}</p>
    </div>`);
        });
        document.getElementById('blog').innerHTML = posts.join('');
    });
