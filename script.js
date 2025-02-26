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

// クッキーの確認とパネルの削除
const agree = Cookies.get('cookie-agree');
const panel = document.getElementById('privacy-panel');

if (agree === 'yes') {
    document.body.removeChild(panel); // クッキー承認後にパネルを非表示
} else {
    document.getElementById('agreebtn').onclick = function() {
        Cookies.set('cookie-agree', 'yes', { expires: 7 });
        document.body.removeChild(panel); // 承認ボタンをクリックしたらパネルを非表示
    };
}