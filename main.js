// Phát nhạc khi người dùng tương tác lần đầu
document.addEventListener('click', function() {
    const audio = document.getElementById('bgMusic');
    if (audio) {
        audio.play().catch(e => console.log("Nhạc đang chờ tương tác..."));
    }
}, { once: true });

function toggleMembers() {
    alert("Danh sách thành viên đang cập nhật!");
}