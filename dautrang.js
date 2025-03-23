// Nút mũi tên quay về đầu trang
const scrollToTopButton = document.getElementById('scrollToTop');
// Hiện nút khi cuộn xuống
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});
// Cuộn lên đầu trang khi bấm nút
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});