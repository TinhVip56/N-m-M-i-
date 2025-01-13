function jumpCapybara() {
    const capybara = document.querySelector('.capybara');
    capybara.classList.add('jump');
    
    // Khôi phục trạng thái sau 0.5s
    setTimeout(() => {
        capybara.classList.remove('jump');
    }, 500);
}
