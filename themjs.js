// Hiện nút khi cuộn xuống
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


// Cuộn lên đầu trang khi bấm nút 
scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



//Nút chia sẻ
document.addEventListener("DOMContentLoaded", function () {
    const shareButton = document.getElementById("shareButton");
    const shareBox = document.getElementById("shareBox");
    const closeShareBox = document.getElementById("closeShareBox");
    const shareLink = document.getElementById("shareLink");
    const copyLink = document.getElementById("copyLink");
    const shareFacebook = document.getElementById("shareFacebook");
    const shareTwitter = document.getElementById("shareTwitter");
    const shareEmail = document.getElementById("shareEmail");

    const currentUrl = window.location.href;

    if (shareTwitter && shareEmail && currentUrl) {
        shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        shareTwitter.href = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}`;
        shareEmail.href = `mailto:?subject=Check%20this%20out&body=${encodeURIComponent(currentUrl)}`;
    }

    shareButton.addEventListener("click", function (event) {
        event.stopPropagation();
        shareBox.classList.toggle("hidden");
        shareLink.value = currentUrl;
    });

    closeShareBox.addEventListener("click", function (event) {
        event.stopPropagation();
        shareBox.classList.add("hidden");
    });

    document.addEventListener("click", function (event) {
        if (!shareBox.contains(event.target) && !shareButton.contains(event.target)) {
            shareBox.classList.add("hidden");
        }
    });

    copyLink.addEventListener("click", function (event) {
        try {
            shareLink.select();
            document.execCommand("copy");
            alert("Đã sao chép link!");
        } catch (err) {
            alert("Lỗi khi sao chép link.");
        }
    });

});