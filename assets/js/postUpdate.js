const html_ = `<a href="https://www.pinterest.com/ninomemories/elysia/" target="_blank">🍀Here.</a>`,
    iwe = ` 🪶`,
    linkNino = "https://www.facebook.com/pythoncplusplusnodejs.anhduccoder";
let infor_posts = [
    {
        tittle: "Happy new year 2024",
        description: "<b>Happy New Year 2024!</b> The new year brings with it hope and joy. Wishing everyone a happy new year filled with good health, happiness, and success. May:<b>Good health: Wishing everyone good health and peace to enjoy life.</b><b>Happiness: Wishing everyone a happy family, full of laughter.</b><b>Success in work: Wishing everyone success in work, study and life.</b><b>Peace and prosperity: Wishing Vietnam peace and prosperity, and to develop stronger and stronger.</b>",
        urlImg: "https://video1.x10.mx/13.mp4",
        dayPost: "2024/03/01" + iwe,
        countView: "0",
        linkSource: "https://www.facebook.com/pythoncplusplusnodejs.anhduccoder",
        hashTag: "#anhduccoder",
        viewCount: Math.floor(2e3 * Math.random())
    },
];
const countPost = infor_posts.length;
document.querySelector(".count_post").innerText = "[" + countPost + "]";
const linkAvatar = "./assets/image/Avt.jpg";

function displayPosts(t) {
    let s = document.getElementById("items_scroll");
    t.forEach(t => {
        let o = document.createElement("div");
        o.innerHTML = `
            <div class="post_item">
                <div class="post_infor">
                    <img src="./assets/image/Avt.jpg" alt="avt" class="post">
                    <div class="iuwyj">
                        <div class="post_name">Nguyen Viet Anh DuC✏️</div>
                        <div class="post_time">${t.dayPost}</div>
                    </div>
                </div>
                <span class="tittle_post">${t.tittle}</span>
                <p class="content_post">${t.description}</p>
                <div class="post_img">
                    ` + imageOrmp3(t.urlImg) + `
                </div>
                <span class="hashtag">${t.hashTag}</span>
                <div class="infor_post_">
                    <div class="view_post">
                        <ion-icon name="eye-outline"></ion-icon>
                        <span class="count_views">${t.viewCount}</span>
                    </div>
                    <a class="source_post" href="${t.linkSource}" target="_blank">
                        <ion-icon name="code-slash-outline"></ion-icon>
                    </a>
                </div>
            </div>
        `, s.appendChild(o)
    })
}

function imageOrmp3(t) {
    return t.includes(".mp4") ? `
            <video class="video_post" controls controlsList="nodownload">
                <source src="${t}" type="video/mp4">
            </video>` : `<img src = "${t}" alt = "avt">`
}
displayPosts(infor_posts);
let totalViewCount = 0;
for (let post of infor_posts) totalViewCount += post.viewCount;
document.getElementById("totalViewCount").innerHTML = "[" + totalViewCount + "]";
