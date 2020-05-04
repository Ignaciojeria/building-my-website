
var image_pool = [
    "url('./assets/stars-cover-2.jpg')",
    "url('./assets/stars-cover-3.jpg')",
    "url('./assets/stars-cover.jpg')"
]

function sleep(ms) {
return new Promise(resolve => setTimeout(resolve, ms));
}

async function changeBackground(){
    var i = 0;
    while(true){
        await sleep(20000);
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