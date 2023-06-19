'using strict';

const commentSection = document.querySelector('.comment-section');

const removeLastCommentBorder = function(){
    const lastComment = commentSection.lastElementChild;
    lastComment.style.borderBottom = "none";
    console.log(lastComment);
}
removeLastCommentBorder();
console.log('Initial setup');