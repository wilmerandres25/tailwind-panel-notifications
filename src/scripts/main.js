const notReadCount = ()=> {
    return document.querySelectorAll('.not-read').length; 
}

const countDownNotRead = (el, n) => {

    if (n === 0) {
        el.classList.remove('number');
        el.innerHTML = '';
    } else el.innerHTML = n;

}

const markAll = document.querySelector('#mark-all');

const posts = document.querySelectorAll('.post');

posts.forEach((post, pos) => {

    post.addEventListener('click', ()=>{

        document.querySelectorAll('.post')[pos].classList.remove('post-not-read');
        post.querySelector('.status').classList.remove('not-read');
        countDownNotRead(document.querySelector('#new-posts-number'), notReadCount());
        
    });

});

markAll.addEventListener('click', function(){
    
    const notReadElements = document.querySelectorAll('.not-read');
    const postNotReadElements = document.querySelectorAll('.post-not-read');
    const newPostsNumber = document.querySelector('#new-posts-number');
    
    notReadElements.forEach(notReadElement => {
        notReadElement.classList.remove('not-read');
    });

    postNotReadElements.forEach(postNotReadElement => {
        postNotReadElement.classList.remove('post-not-read');
    });

    countDownNotRead(newPostsNumber, notReadCount());
});