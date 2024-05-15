let likeNumber = document.getElementById("howmany") 
let post = document.getElementById("firstPost");  
let postsBox = document.getElementById("postsBox")  
let text = document.getElementById("text"); 
let comment = document.getElementById("comment")  
let comments = document.getElementById("comments")  
let imgurls = [  
    "найдите его.jpg", 
    "нашелся.jpg", 
    "теперь тусуем.jpg", 
]  
let textIT = [  
    "Помогите найти его🙏", 
    "Нашелся", 
    "теперь тусуем🤘", 
]  
for(let i = 1; i < 100; i++){  
    newtext = textIT[i%3] 
    text.innerHTML = newtext 
    console.log(textIT[i%3]) 
    newpost = post.cloneNode(true);  
    imgpost = newpost.getElementsByClassName("img")[0]  
    imgpost.setAttribute("src", imgurls[i%3])  
    postsBox.appendChild(newpost);  
} 
function like(element) {
    let likeNumber = element.parentElement.querySelector(".howmany");
    let c = parseInt(likeNumber.textContent);
    c++;
    likeNumber.textContent = c;
}
function addcomment(){ 
    let input = comment.value  
    let addme = document.createElement("p") 
    addme.innerHTML = "d.askarbaev:" + input 
    comments.appendChild(addme) 
}
document.getElementById("comment").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); 
        addcomment();
        document.getElementById("comment").value = "";
    }
});
