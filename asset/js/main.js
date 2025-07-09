document.querySelectorAll('.box-btn .btn').forEach(button => {
  button.addEventListener('click', (event) => {
    // Ngăn chặn sự kiện bong bóng lên dropdown
    event.stopPropagation();
    // Lấy phần tử cha chứa lời mời kết bạn
    const friendRequest = button.closest('.menu-avatar__container');

    if (button.textContent.trim() === 'Delete') {
      // Xóa lời mời khi nhấn Delete
      friendRequest.style.display = 'none';
    } else if (button.textContent.trim() === 'Confirm') {
      // Xóa lời mời khi nhấn Confirm
      friendRequest.style.display = 'none';
      alert('Đã chấp nhận lời mời kết bạn!');
    }
  });
});