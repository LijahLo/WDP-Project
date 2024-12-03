// Add event listener to the form
document.getElementById('commentForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Capture input values
    const commentText = document.getElementById('commentText').value;
    const postId = document.getElementById('postId').value; // Example field for associating a comment with a post

    // Create Comment object
    const newComment = {
        commentText,
        postId
    };

    console.log('New Comment:', newComment);
});
