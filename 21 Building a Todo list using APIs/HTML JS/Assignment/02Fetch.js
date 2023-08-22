// que
// Fetch
// Send Feedback
// Fetch all the posts from here https://jsonplaceholder.typicode.com/posts and log the title and body of the first ten posts. Use await to call async functions.


async function fetchPosts() {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        let posts = await res.json();
        posts = posts.slice(0, 10);
        for (const post of posts) {
            console.log(`Title: ${post.title}\nBody: ${post.body}`);
        }
    } catch (e) {
        console.log(e);
    }
}

fetchPosts();


// async function fetchPosts() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();

//         for (let i = 0; i < 10; i++) {
//             const post = data[i];
//             console.log(`Title: ${post.title}`);
//             console.log(`Body: ${post.body}`);
//             console.log('-----------------------');
//         }
//     } catch (error) {
//         console.error('Error fetching posts:', error);
//     }
// }

// fetchPosts();