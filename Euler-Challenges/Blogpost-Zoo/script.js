var postTitle, postText, postUndertitle;


function getFormValues() {
    postTitle = document.getElementById("post-title").value;
    postUndertitle = document.getElementById("post-undertitle").value;
    postText = document.getElementById("post-text").value;
}

function setPostValues() {
    document.querySelector(".post-title").innerHTML = postTitle;
    document.querySelector(".post-undertitle").innerHTML = postUndertitle;
    document.querySelector(".post-text").innerHTML = postText;
    var post1 = new BlogPost(postTitle, postUndertitle, postText);
    console.log(post1);

}




function saveFormValues() {
    getFormValues();
    setPostValues();

}



var BlogPost = function(postTitle, postUndertitle, postText) {
    this.postTitle = postTitle;
    this.postUndertitle = postUndertitle;
    this.postText = postText;
}

