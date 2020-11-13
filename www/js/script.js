
var image_pool = [
    "url('./images/stars-cover-2.jpg')",
    "url('./images/stars-cover-3.jpg')",
    "url('./images/stars-cover.jpg')"
]

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeBackground(){
    var i = 0;
    while(true){
        await sleep(7000);
        let background = document.getElementById('cover_id');
        background.classList.remove("background-picture");
        await sleep(10);
        background.classList.add("background-picture");
        
        if(image_pool.length==i){
            i=0;
        }

        let image = image_pool[i];
        background.style.backgroundImage = image;
        
        i=i+1;
        
        }
}

changeBackground();