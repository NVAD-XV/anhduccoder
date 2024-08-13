// document.getElementById('mode-link').onclick = toggleDarkMode;
// function toggleDarkMode() {
//     var body = document.querySelector('body');
//     body.classList.toggle('light-mode');
// }

function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var menuNavbarRight = document.querySelector('.menu-navbar-right');
    menuToggle.classList.toggle('active');
    menuNavbarRight.classList.toggle('open');
}


// Thêm sự kiện click vào body
document.body.addEventListener('click', function(event) {
    var menuNavbarRight = document.querySelector('.menu-navbar-right');
    var menuToggle = document.querySelector('.menu-toggle');
    var listS = document.querySelector('.list');
    var liS = document.querySelector('.limenuRight');

    if (menuNavbarRight.contains(event.target) || liS.contains(event.target)) {
        menuNavbarRight.classList.remove('open');
        menuToggle.classList.remove('active');
    }
});


// ____________________________________ [ Dem so nguoi vo trang ca nhan ]____________________________________________________
// function updateVisitCount(count) {
//     document.getElementById('visitCount').textContent = count;
// }

// // Hàm để lấy số lượt truy cập từ Local Storage
// function getVisitCount() {
//     const count = localStorage.getItem('visitCount');
//     return count ? parseInt(count) : 0;
// }

// // Hàm để tăng số lượt truy cập và cập nhật lại trong Local Storage
// function increaseVisitCount() {
//     const currentCount = getVisitCount();
//     const newCount = currentCount + 1;
//     localStorage.setItem('visitCount', newCount);
//     updateVisitCount(newCount);
// }

// // Khi trang được tải lên, ta sẽ cập nhật số lượt truy cập lên giao diện
// document.addEventListener('DOMContentLoaded', function() {
//     const currentCount = getVisitCount();
//     updateVisitCount(currentCount);
// });
// increaseVisitCount();






window.addEventListener('load', () => {
    const loaderWrapper = document.querySelector('.loader-wrapper');
    const content = document.querySelector('.content');

    setTimeout(() => {
        loaderWrapper.style.display = 'none'; // Ẩn loader khi trang đã tải xong
        content.style.display = 'block'; // Hiển thị nội dung trang web
    }, 1980); // Thời gian mẫu, bạn có thể điều chỉnh theo ý muốn
});


// Lấy tham chiếu đến phần tử cần ẩn
var element = document.querySelector('.loader');

// Đợi animation hoàn thành sau 3 lần lặp
element.addEventListener('animationiteration', function () {
    element.classList.add('hidden');
});




// document.addEventListener('DOMContentLoaded', function() {
//     const fadeElements = document.querySelectorAll('.fade-in');

//     // Thêm một sự kiện transitionend để loại bỏ lớp CSS "fade-in" sau khi hoàn thành hiệu ứng xuất hiện
//     fadeElements.forEach(element => {
//         element.addEventListener('transitionend', () => {
//             element.classList.remove('fade-in');
//         });
//     });

//     // Kích hoạt hiệu ứng xuất hiện bằng cách thiết lập opacity và transform
//     fadeElements.forEach(element => {
//         element.style.opacity = 1;
//         element.style.transform = 'translateY(0)';
//     });
// });

// Sử dụng GitHub API để lấy avatar
const username = "tokisakininovn";
const apiUrl = `https://api.github.com/users/${username}`;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const avatarUrl = data.avatar_url;
        const avatarElement = document.getElementById("my_avt");
        avatarElement.src = avatarUrl;
    })
    .catch(error => {
    console.error('>> Error: ', error);
    });
setInterval(fetch, 10000);
 