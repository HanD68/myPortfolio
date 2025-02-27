'use strict';

const images = [
    {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/C0zDWAPFT9A.jpg', description: '猫の画像1'},
    {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/fEK4jvgnApg.jpg', description: '猫の画像2'},
    {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/egfS7HzgKcc.jpg', description: '猫の画像3'},
    {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/e-S23SJzFqs.jpg', description: '猫の画像4'},
    {src: 'https://learnwithnakamura.s3.ap-northeast-1.amazonaws.com/javascript/Hnwm8ktAd6E.jpg', description: '猫の画像5'}
];

let currentIndex = 0;

// ギャラリー初期化
document.addEventListener("DOMContentLoaded", function() {
    const mainImage = document.getElementById('main_image');
    const thumbnails = document.getElementById('thumbnails');

    // メイン画像の表示
    mainImage.innerHTML = `
        <img id="gallery-main-img" src="${images[0].src}" alt="${images[0].description}">
        <p id="gallery-description">${images[0].description}</p>
    `;

    // サムネイル画像の生成
    images.forEach((imgData, index) => {
        let thumbnailImage = document.createElement('img');
        thumbnailImage.setAttribute('src', imgData.src);
        thumbnailImage.setAttribute('alt', imgData.description);
        thumbnailImage.classList.add('thumbnail');

        // クリックでメイン画像を変更
        thumbnailImage.addEventListener('click', () => {
            document.getElementById('gallery-main-img').src = imgData.src;
            document.getElementById('gallery-description').textContent = imgData.description;
            currentIndex = index; // ライトボックス用に現在の画像を記録
        });

        thumbnails.appendChild(thumbnailImage);
    });
});

// カウントダウン

function countdown(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000 / 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

const goal = new Date(2025, 6, 8);

function recalc() {
    const counter = countdown(goal);
    document.getElementById('day').textContent = counter[0];
    document.getElementById('hour').textContent = counter[1];
    document.getElementById('min').textContent = String(counter[2]).padStart(2, '0');
    document.getElementById('sec').textContent = String(counter[3]).padStart(2, '0');
    refresh();  
}

function refresh() {
    setTimeout(recalc, 1000);
}
recalc();