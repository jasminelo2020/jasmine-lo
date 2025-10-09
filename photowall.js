const section = document.getElementById('photo-section');
const photos = section.querySelectorAll('.photo');
let activePhoto = null;
let offsetX = 0, offsetY = 0;
let topZ = 1; // stacking order

photos.forEach(photo => {
    photo.addEventListener('click', e => {
    const rect = section.getBoundingClientRect(); // container boundaries

    if (activePhoto === photo) {
        // drop
        activePhoto.classList.remove('dragging');
        activePhoto.style.zIndex = ++topZ;
        activePhoto = null;
        document.removeEventListener('mousemove', movePhoto);
    } else {
        // pick up
        if (activePhoto) {
        activePhoto.classList.remove('dragging');
        document.removeEventListener('mousemove', movePhoto);
        }
        activePhoto = photo;
        activePhoto.classList.add('dragging');
        offsetX = e.clientX - rect.left - photo.offsetLeft;
        offsetY = e.clientY - rect.top - photo.offsetTop;
        document.addEventListener('mousemove', movePhoto);
    }
    });
});

function movePhoto(e) {
    if (!activePhoto) return;
    const rect = section.getBoundingClientRect();
    activePhoto.style.left = (e.clientX - rect.left - offsetX) + 'px';
    activePhoto.style.top = (e.clientY - rect.top - offsetY) + 'px';
}