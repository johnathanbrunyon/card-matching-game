var flippedTotal = 0;
var started = false;

const imgSrcs =
    [
        "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
    ]

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function Shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function FlipCard(child) {
    if(started)
    {
        if(flippedTotal > 1)
        {
            HideAllCards();
            flippedTotal = 0;
        }
        let item = document.getElementsByTagName("img").item(child);
        if(item.getAttribute("src") == "img/cardBack.jpg")
        {
            try
            {
                item.setAttribute("src", imgSrcs[child]);
                console.log(`Card ${child} has been flipped`);
                flippedTotal += 1
            } catch (e) {
                console.log(e);
            }
        } else
        {
            item.setAttribute("src", "img/cardBack.jpg");
            console.log(`Card ${child} has been flipped back to hide the front.`);
            flippedTotal -= 1;
        }
    } else {
        console.log("Game must be started");
    }
}

function RevealCards() {
    var i;
    for(i = 0; i < 9; i++)
    {
        document.getElementsByTagName("img").item(i).setAttribute("src", imgSrcs[i]);
    }
}

function HideAllCards() {
    let i;
    for(i = 0; i < 9; i++)
    {
        document.getElementsByTagName("img").item(i).setAttribute("src", "img/cardBack.jpg");
    }
}

function StartGame() {
    HideAllCards();
    Shuffle(imgSrcs);
    started = true;
}