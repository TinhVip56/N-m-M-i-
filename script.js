function showMessage() {
    var message = document.getElementById('message');
    message.style.opacity = 1;
    // Thêm hiệu ứng "VIP" khi nhấn nút
    var button = document.querySelector('button');
    button.style.backgroundColor = "#ff0066"; // Màu sắc thay đổi khi nhấn
    button.style.transform = "scale(0.95)";
    setTimeout(function() {
        button.style.transform = "scale(1)"; // Khôi phục lại kích thước sau khi nhấn
    }, 100);
}
