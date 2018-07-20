describe("EmojiCalculator", function(){
    var mockEmoji;
    var mockEmoji2;
    var mockEmoji3;
    var mockEmoji4;
    var MockEmojis;
    var testCalculator;
    beforeEach(function(){
        mockEmoji = {
            emoji: "🤣",
            emotionValue: 1000
        };
        mockEmoji2 = {
            emoji: "😀",
            emotionValue: 100
        };
        mockEmoji3 = {
            emoji: "🙂",
            emotionValue: 50
        };
        mockEmoji4 = {
            emoji: "😞",
            emotionValue: -200
        };
        mockEmoji5 = {
            emoji: "😐",
            emotionValue: 0
        };
        mockEmoji6 = {
            emoji: "🙁",
            emotionValue: -55
        };
        mockEmoji7 = {
            emoji: "😣",
            emotionValue: -300
        }
        MockEmojis = [mockEmoji, mockEmoji2];
        allMockEmojis = [
            mockEmoji,
            mockEmoji2,
            mockEmoji3,
            mockEmoji4,
            mockEmoji5,
            mockEmoji6,
            mockEmoji7
        ]
    })

    describe("allEmoValues", function(){
        it("returns an array of all the emovalues from an array of Emoji instances passed in", function(){
            var testCalculator = new EmojiCalculator(MockEmojis); 
            var expectedArray = [1000, 100];
            var actualArray = testCalculator.allEmoValues();

            var expectedJSON = JSON.stringify(expectedArray);
            var actualJSON = JSON.stringify(actualArray);
            expect(actualJSON).toEqual(expectedJSON); 
        });
    });

    describe("calculateNewEmoValue", function(){
        it("adds the emovalue of the two emojis passed to it", function(){
            var testCalculator = new EmojiCalculator(MockEmojis); 
            expect(testCalculator.calculateNewEmoValue(mockEmoji2, mockEmoji3)).toEqual(150);
            expect(testCalculator.calculateNewEmoValue(mockEmoji2, mockEmoji4)).toEqual(-100);
        });

        // it("should return 1000 if sum is >1000", function(){
        //     var testCalculator = new EmojiCalculator(MockEmojis);
        //     expect(testCalculator.calculateNewEmoValue(mockEmoji, mockEmoji2)).toEqual(1000);
        // });

        // it("should return -1000 if sum is <-1000", function(){
        //     var testCalculator = new EmojiCalculator(MockEmojis);
        //     var mockSadEmoji = {
        //         emotionValue: -1000
        //     };
        //     expect(testCalculator.calculateNewEmoValue(mockSadEmoji, mockEmoji4)).toEqual(-1000);
        // });
    });

    describe("findByEmoValue", function(){
        it("should return the emoji object with the matching emo val", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis);
            expect(testCalculator.findByEmoValue(100)).toEqual(mockEmoji2);
        });

        it("should return the emoji object with the matching emo val", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis);
            expect(testCalculator.findByEmoValue(-200)).toEqual(mockEmoji4);
        });
    });

    describe("calculate", function(){
        it("should find the emoji with the closest emovalue to the sum of both emojis emovals", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis);
            expect(testCalculator.calculate(mockEmoji3, mockEmoji6)).toEqual(mockEmoji5);
        });

        it("should find the emoji with the closest emovalue to the sum of both emojis emovals", function(){
            var testCalculator = new EmojiCalculator(allMockEmojis);
            expect(testCalculator.calculate(mockEmoji4, mockEmoji6)).toEqual(mockEmoji7);
        });
    });

    describe("findClosest", function(){
        var testArray = [-100, -70, -25, 0, 100, 135, 1000];

        it("returns the value in array closest to input number", function(){
            expect(findClosest(0, testArray)).toEqual(0);
        });

        it("returns the value in array closest to input number 2", function(){
            expect(findClosest(-24, testArray)).toEqual(-25);
        });

        it("returns the value in array closest to input number 2", function(){
            expect(findClosest(128, testArray)).toEqual(135);
        });

        it("returns the value in array closest to input number 2", function(){
            expect(findClosest(1280, testArray)).toEqual(1000);
        });
    })
});