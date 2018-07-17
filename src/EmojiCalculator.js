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

    allEmoValues() {
        let emoValueArray = [];
        for (let emoji of this.allEmojis) {
            emoValueArray.push(emoji.emotionValue);
        };
        return emoValueArray;
    }

    calculate(emoji1, emoji2) {
        let emoSum = this.calculateNewEmoValue(emoji1, emoji2);
        let newActualEmoValue = findClosest(emoSum, this.emoValues)
        let result = this.findByEmoValue(newActualEmoValue);
        return result;
    }

    calculateNewEmoValue(emoji1, emoji2) {
        let sum = emoji1.emotionValue + emoji2.emotionValue;
        if (sum > 1000) {
            return 1000;
        } else if (sum < -1000) {
            return -1000;
        } else {
            return sum;
        }  
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




/// NEUTRAL FACES
const neutralFace = new Emoji("😐", 0)


/// NEGATIVE FACES
const frowningFace = new Emoji("☹️", -100)


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

];

var emojiCalculator = new EmojiCalculator(allEmoji);
