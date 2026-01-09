animals = [
    { id: 1, ten: "Cáo", anh: "img/fox/fox_8.jfif", mota: "cáo là cáo", thuvien: ["img/fox/fox_1.jfif", "img/fox/fox_2.jfif", "img/fox/fox_3.jfif",
        "img/fox/fox_4.jfif", "img/fox/fox_5.jfif", "img/fox/fox_6.jfif", "img/fox/fox_7.jfif"
    ] },
    { id: 2, ten: "Gấu Túi", anh: "img/koala/koala_8.jfif", mota: "gấu túi có cái túi", thuvien: ["img/koala/koala_1.jfif", "img/koala/koala_2.jfif", "img/koala/koala_3.jfif",
        "img/koala/koala_4.jfif", "img/koala/koala_5.jfif", "img/koala/koala_6.jfif", "img/koala/koala_7.jfif"
    ] },
    { id: 3, ten: "Gấu Mèo", anh: "img/raccoon/raccoon_8.jfif", mota: "gấu là con mèo", thuvien: ["img/raccoon/raccoon_1.jfif", "img/raccoon/raccoon_2.jfif", "img/raccoon/raccoon_3.jfif",
        "img/raccoon/raccoon_4.jfif", "img/raccoon/raccoon_5.jfif", "img/raccoon/raccoon_6.jfif", "img/raccoon/raccoon_7.jfif"
    ] },
    { id: 4, ten: "Cá Mập", anh: "img/shark/shark_8.jfif", mota: "cá bị mập", thuvien: ["img/shark/shark_1.jfif", "img/shark/shark_2.jfif", "img/shark/shark_3.jfif",
        "img/shark/shark_4.jfif", "img/shark/shark_5.jfif", "img/shark/shark_6.jfif", "img/shark/shark_7.jfif"
    ] },
    { id: 5, ten: "Sói", anh: "img/wolf/wolf_7.jfif", mota: "sói cô độc", thuvien: ["img/wolf/wolf_1.jfif", "img/wolf/wolf_2.jfif", "img/wolf/wolf_3.jfif",
        "img/wolf/wolf_4.jfif", "img/wolf/wolf_5.jfif", "img/wolf/wolf_6.jfif", "img/wolf/wolf_8.jfif"
    ] }
];

const animalListDiv = document.getElementById('animalList');

if (animalListDiv) {
    animals.forEach(animal => {
        const card = document.createElement('div');
        card.className = 'animal-card';
        card.innerHTML = `
            <img src="${animal.anh}" alt="${animal.ten}">
            <h3>${animal.ten}</h3>
        `;
        
        card.onclick = function() {
        
            localStorage.setItem('selectedAnimal', JSON.stringify(animal));
          
            window.location.href = 'detail.html';
        };
        animalListDiv.appendChild(card);
    });
}