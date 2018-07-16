class Emoji {
    constructor(unicode, emotionValue) {
        this.unicode = unicode;
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
        for (var emoji of this.allEmojis) {
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
}