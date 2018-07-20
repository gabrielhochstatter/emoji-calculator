class Emoji {
    constructor(emoji, emotionValue) {
        this.emoji = emoji;
        this.emotionValue = emotionValue;
    }
}

class EmojiCalculator {
    constructor(allEmojis) {
        this.allEmojis = allEmojis;
        this.emoValues = this.allEmoValues();
    }
    
    calculate(emoji1, emoji2) {
        let emoSum = this.calculateNewEmoValue(emoji1, emoji2);
        let newActualEmoValue = findClosest(emoSum, this.emoValues)
        let result = this.findByEmoValue(newActualEmoValue);
        return result;
    }

    allEmoValues() {
        let emoValueArray = [];
        for (let emoji of this.allEmojis) {
            emoValueArray.push(emoji.emotionValue);
        };
        return emoValueArray;
    }

    calculateNewEmoValue(emoji1, emoji2) {
        let sum = emoji1.emotionValue + emoji2.emotionValue;
        // if (sum > 1000) {
        //     return 1000;
        // } else if (sum < -1000) {
        //     return -1000;
        // } else {
        //     return sum;
        // }  
        return sum;
    }

    findByEmoValue(emoVal) {
        for (let emoji of this.allEmojis) {
            if (emoVal === emoji.emotionValue) {
                return emoji;
            }
        }
    }

}

var findClosest = (num, array) => {
    let current = array[0];
    let diff = Math.abs(num - current)
    for (let val = 0; val < array.length; val++) {
        let newDiff = Math.abs(num - array[val]);
        if (newDiff < diff) {
            diff = newDiff;
            current = array[val];
        }
    }
    return current;
}

/// POSITIVE FACES
const slightSmileFace = new Emoji("🙂", 100);
const upsideSmileFace = new Emoji("🙃", 120)
const rosySmileFace = new Emoji("😊", 150);
const winkSmileFace = new Emoji("😉", 170);
const grinFace = new Emoji("😀", 200);
const grinFaceBigEyes = new Emoji("😃", 250);
const grinFaceFull = new Emoji("😁", 300);
const grinFaceSweat = new Emoji("😅", 400);
const grinFaceXD = new Emoji("😆", 600);
const tongueSmile = new Emoji("😋", 185);
const coolFace = new Emoji("😎", 115);
const heartEyes = new Emoji("😍", 275);
const kissFace = new Emoji("😗", 125);
const kissFaceHeart = new Emoji("😘", 130);
const kissFaceExtra = new Emoji("😙", 132);
const kissFaceBlush = new Emoji("😚", 135);
const memeFace = new Emoji ("😂", 900);
const roflFace = new Emoji("🤣", 1000);
const hugFace = new Emoji("🤗", 225);
const starryEyed = new Emoji("🤩", 700);
const grinXP = new Emoji("😝", 650);
const pFace = new Emoji("😛", 160);
const winkTongue = new Emoji("😜", 190);
const moneyFace = new Emoji("🤑", 475);
const angelFace = new Emoji("😇", 800);


/// NEUTRAL FACES
const neutralFace = new Emoji("😐", 0);
const thinkingFace = new Emoji("🤔", 10);
const raisedEyebrow = new Emoji("🤨", -10);
const boredFace = new Emoji("😑", -15);
const noMouth = new Emoji("😶", 7);
const rollingEyes = new Emoji("🙄", -30);
const smirkingFace = new Emoji("😏", 35);
const zipperMouth = new Emoji("🤐", -50);
const surpriseFace = new Emoji("😮", 50);
const oohFace = new Emoji("😯", 75);
const sleepyFace = new Emoji("😪", -60);
const relievedHappy = new Emoji("😌", 80);
const droolingFace = new Emoji("🤤", 90);
const notAmused = new Emoji("😒", -35);
const disappointedFace = new Emoji("😔", -85);
const unsureFace = new Emoji("😕", -75);
const astonishedFace = new Emoji("😲", -55);
const monkaS = new Emoji("😳", -20);



/// NEGATIVE FACES
const frowningFace = new Emoji("🙁", -100);
const painFace = new Emoji("😣", -250);
const sadRelief = new Emoji("😥", -110);
const despairFace = new Emoji("😫", -570);
const confoundedFace = new Emoji("😖", -300);
const sadFace = new Emoji("😞", -200);
const worriedFace = new Emoji("😟", -225);
const puffingAnger = new Emoji("😤", -375);
const cryingFace = new Emoji("😢", -275);
const loudCrying = new Emoji("😭", -425);
const anguishedFace = new Emoji("😧", -150);
const blueAnguish = new Emoji("😨", -175);
const despair2 = new Emoji("😩", -500);
const mindBlown = new Emoji("🤯", -360);
const theScream = new Emoji("😱", -600);
const deadFace = new Emoji("😵", -700);
const angryFace = new Emoji("😠", -450);
const redAnger = new Emoji("😡", -750);
const swearingFace = new Emoji("🤬", -900);
const gonnaPuke = new Emoji("🤢", -550);
const pukedEverywhere = new Emoji("🤮", -625);
const specialSauce = new Emoji("🍆", -2000);


/// ALL EMOJI ARRAY:
const allEmoji = [
    neutralFace,
    frowningFace,
    slightSmileFace, 
    upsideSmileFace,
    rosySmileFace,
    winkSmileFace,
    grinFace,
    grinFaceBigEyes,
    grinFaceFull,
    grinFaceSweat,
    grinFaceXD,
    tongueSmile,
    coolFace,
    heartEyes,
    kissFace,
    kissFaceHeart,
    kissFaceExtra,
    kissFaceBlush,
    memeFace,
    roflFace,
    hugFace,
    starryEyed,
    thinkingFace,
    raisedEyebrow,
    grinXP,
    pFace,
    boredFace,
    noMouth,
    rollingEyes,
    smirkingFace,
    zipperMouth,
    painFace,
    surpriseFace,
    sadRelief,
    oohFace,
    sleepyFace,
    despairFace,
    relievedHappy,
    droolingFace,
    winkTongue,
    notAmused,
    disappointedFace,
    unsureFace,
    astonishedFace,
    moneyFace,
    confoundedFace,
    sadFace,
    worriedFace,
    puffingAnger,
    cryingFace,
    loudCrying,
    anguishedFace,
    blueAnguish,
    despair2,
    mindBlown,
    theScream,
    monkaS,
    deadFace,
    angryFace,
    redAnger,
    swearingFace,
    gonnaPuke,
    pukedEverywhere,
    specialSauce,
];

var emojiCalculator = new EmojiCalculator(allEmoji);
