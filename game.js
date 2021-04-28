var flippedTotal = 0;
var started = false;
var childNdx;
var flippedVals =
    [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]

var matched =
    [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false
    ]



const imgSrcs =
    [
        "https://images.unsplash.com/photo-1556103255-4443dbae8e5a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg",
        "https://images.unsplash.com/photo-1494548162494-384bba4ab999?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZGF3bnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
        "https://www.nature.com/immersive/d41586-021-00095-y/assets/3TP4N718ac/2021-01-xx_jan-iom_tree-of-life_sh-1080x1440.jpeg",
        "https://st.depositphotos.com/1428083/2946/i/600/depositphotos_29460297-stock-photo-bird-cage.jpg"
    ]

function getRandomInteger(max) {
    return Math.floor(Math.random() * max);
}

function isMatching(card1, card2, child1, child2) {
    var x = document.getElementsByTagName("img").item(child1);
    var y = document.getElementsByTagName("img").item(child2);

    if(card1.getAttribute("src") == card2.getAttribute("src"))
    {

    }
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

    HideAllCards();

    return array;
}

function FlipCard(child) {
    if(started)
    {
        childNdx += [child]
        if(flippedTotal > 1)
        {
            HideAllCards();
            flippedTotal = 0;
            childNdx = [];
        }
        let item = document.getElementsByTagName("img").item(child);
        if(item.getAttribute("src") == "img/cardBack.jpg")
        {
            try
            {
                item.setAttribute("src", imgSrcs[child]);
                console.log(`Card ${child} has been flipped`);
                flippedVals[child] = true;
                flippedTotal += 1;
            } catch (e) {
                console.log(e);
            }
        } else
        {
            item.setAttribute("src", "img/cardBack.jpg");
            console.log(`Card ${child} has been flipped back to hide the front.`);
            flippedTotal -= 1;
            flippedVals[child] = false;
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
        flippedVals[i] = false;
    }
}

function StartGame() {
    HideAllCards();
    Shuffle(imgSrcs);
    started = true;
}