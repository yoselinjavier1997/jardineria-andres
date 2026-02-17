// Pequeñas interacciones: año dinámico, galería modal y smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const href = a.getAttribute('href');
    if(href.length>1){
      e.preventDefault();
      const el = document.querySelector(href);
      if(el) el.scrollIntoView({behavior:'smooth', block:'start'});
    }
  });
});

// Galería modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.gallery-grid img').forEach(img=>{
  img.addEventListener('click', ()=>{
    const src = img.dataset.large || img.src;
    modalImg.src = src;
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden','false');
  });
});

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e)=>{
  if(e.target === modal) closeModal();
});
function closeModal(){
  modal.style.display = 'none';
  modal.setAttribute('aria-hidden','true');
  modalImg.src = '';
}
