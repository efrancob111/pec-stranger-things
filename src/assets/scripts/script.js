let likes = 0;
let dislikes=0;

const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

const dislikeBtn = document.getElementById("dislikeBtn");
const dislikeCount = document.getElementById("dislikeCount");
likeCount.textContent= likes;
dislikeCount.textContent=dislikes;

likeBtn.addEventListener("click", () => {
  likes++;
  likeCount.textContent = likes;
});

dislikeBtn.addEventListener("click", () => {
  dislikes++;
  dislikeCount.textContent = dislikes;
});