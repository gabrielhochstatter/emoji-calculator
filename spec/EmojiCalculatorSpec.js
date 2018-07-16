describe("EmojiCalculator", function(){
    var mockEmoji;
    var mockEmoji2;
    var mockEmoji3;
    var mockEmoji4;
    var allMockEmojis;
    var testCalculator;
    beforeEach(function(){
        mockEmoji = {
            unicode: "doesnt matter",
            emotionValue: 1000
        };
        mockEmoji2 = {
            unicode: "doesnt matter",
            emotionValue: 100
        };
        mockEmoji3 = {
            unicode: "doesnt matter",
            emotionValue: 50
        };
        mockEmoji4 = {
            unicode: "doesnt matter",
            emotionValue: -200
        };
        allMockEmojis = [mockEmoji, mockEmoji2];
    })

    describe("allEmoValues", function(){
        it("returns an array of all the emovalues from an array of Emoji instances passed in", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis); 
           var expectedArray = [1000, 100];
           var actualArray = testCalculator.allEmoValues();

           var expectedJSON = JSON.stringify(expectedArray);
           var actualJSON = JSON.stringify(actualArray);
           expect(actualJSON).toEqual(expectedJSON); 
        });
    });

    describe("calculateNewEmoValue", function(){
        it("adds the emovalue of the two emojis passed to it", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis); 
            expect(testCalculator.calculateNewEmoValue(mockEmoji2, mockEmoji3)).toEqual(150);
            expect(testCalculator.calculateNewEmoValue(mockEmoji2, mockEmoji4)).toEqual(-100);
        });
    });
});