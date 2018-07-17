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
const grinningFace = new Emoji("😀", 100)


/// NEUTRAL FACES
const neutralFace = new Emoji("😐", 0)


/// NEGATIVE FACES
const frowningFace = new Emoji("☹️", -100)