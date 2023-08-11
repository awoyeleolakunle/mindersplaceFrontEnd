
const parentCategory = document.getElementById('parentCategoryId')

const minderCategory = document.getElementById('minderCategoryId')


parentCategory.addEventListener('click', ()=>{
localStorage.setItem("parentUserCategory", "PARENT");
window.location.href="parent/loading-logo.html"

})

minderCategory.addEventListener('click', ()=>{
    localStorage.setItem("minderUserCategory", "MINDER")
    window.location.href = "minder/loading-logo.html"
})