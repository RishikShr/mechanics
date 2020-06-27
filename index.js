const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const caption = document.querySelector(".caption");



previews.forEach((preview) => { 
   
    preview.addEventListener("click", () => {
   modal.classList.add("open");
   original.classList.add("open");
   //! dynamic change text and image
   const originalSrc = preview.getAttribute('data-original');
   original.src=`./images/${originalSrc}`; 
   const altText = preview.alt;
   caption.textContent=altText; // Changing textcontent to alt so class caption contains alttext as paragraph
    }); 
    
});

modal.addEventListener('click', (e)=>{
if(e.target.classList.contains('modal')){
    modal.classList.remove("open");
    original.classList.remove("open");
}
});
