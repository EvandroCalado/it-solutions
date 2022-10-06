const galleryImage = document.querySelectorAll('.gallery-image');

galleryImage.forEach(item => {
    item.addEventListener('click', () => {
        const modal = document.querySelector('.modal');
        console.log(modal)
        // if (item.className = 'um' ) {
        //     modal.style.display = 'block'
        //     modal.img1.style.display = 'block'
        // }
        
    })
})