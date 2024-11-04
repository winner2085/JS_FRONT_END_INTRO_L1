//Stores text and button in variables
const textElement = document.querySelector("#text");
const changeColorButton = document.querySelector("#changeColorButton");

function changeTextColor(){
    const colors = ["red", "orange", "yellow", "green", "blue", "purple", "pink", "brown", "black"];
    changeColorButton.addEventListener("click", () => {
        const randomColor = colors[Math.floor(Math.random()* colors.length)];
        textElement.style.color = randomColor;
    });
}
changeTextColor();

//---------------------------------------//
const pictureElement = document.getElementById("toggle-image");
function changePicture(){
    const images = [
        "https://i.guim.co.uk/img/media/5d3da3fc2c5de789cd7bff885ddfbcf15d729209/0_244_4080_2448/master/4080.jpg?width=1200&quality=85&auto=format&fit=max&s=ee25b1f254d221eeb6768bab0e3afbd6",
        "https://cdn.theatlantic.com/thumbor/OgQgHFiqAd92pArI1zjmcUHjoSc=/144x0:2411x1700/1200x900/media/img/mt/2017/06/shutterstock_319985324/original.jpg",
        "https://cdn.mos.cms.futurecdn.net/Kv3YN5bJSZgkT48yETpUi6-1200-80.jpg",
        "https://www.dakinhumane.org/files/content/Blog/September%2023/Willow.png",
        "https://www.humanesociety.org/sites/default/files/2018/06/cat-217679.jpg",
        "https://cats.com/wp-content/uploads/2024/02/96E4B546-9BE7-4977-9A29-05F2D9BB47BC_1_102_a-e1711411797978.jpeg",
        "https://www.salisbury.sa.gov.au/assets/images/Services/_800x418_crop_center-center_82_none/Services-Pets-Animals-Cats-01.jpg?mtime=1626181965"
    ];
    
    let currentIndex = 0
    
    pictureElement.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % images.length;
        pictureElement.src = images[currentIndex];
    });
}

changePicture()


//---------------------------------------//