document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.querySelector('.profile-posts');

    const posts = [
        'post1.png',
        'post2.png',
        'post3.png',
        'post4.png',
        'post5.png'
    ];

    posts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        
        const img = document.createElement('img');
        img.src = post;
        img.alt = 'Post Image';
        
        postElement.appendChild(img);
        postsContainer.appendChild(postElement);
    });
});
