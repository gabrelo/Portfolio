/* Set width of all animated text to match container */
let parent = document.querySelectorAll('.animate-text');
for(let i = 0; i < parent.length; i++) {
  parent[i].style.width = parent[i].children[0].clientWidth + "px"; 
};

var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

alert