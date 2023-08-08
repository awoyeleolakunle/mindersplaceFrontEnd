
const userCategory = document.getElementById('parentCategoryId')


userCategory.addEventListener('click', ()=>{
localStorage.setItem("userCategory", "PARENT");
window.location.href="parent/loading-logo.html"

})