import { TestBank } from "../util/test/types";



export const designPrinciplesBank: TestBank = {
    topic: "Design Principles",
    multipleChoice: [
        {
            type: "multiple-choice",
            question: "Which design principle is primarily about giving extra visual weight to the most important message?",
            options: ["Alignment", "Hierarchy", "Repetition", "Proximity"],
            answer: 1,
            aiResponses: [
                "Alignment is about lining elements up, not about signaling importance.",
                "Correct! Hierarchy focuses attention on the most important message first [8 basic design principles, pg. 6-8].",
                "Repetition ties a design together but does not by itself prioritize information.",
                "Proximity groups related items but is not the main tool for emphasizing importance."
            ]
        },
        {
            type: "multiple-choice",
            question: "What does the principle of proximity help you achieve in a layout?",
            options: [
                "Adding as many colors as possible",
                "Grouping related elements together",
                "Ensuring perfect symmetry",
                "Maximizing font variety"
            ],
            answer: 1,
            aiResponses: [
                "No, proximity is unrelated to color count.",
                "Correct! Proximity helps group related elements and declutter the design [8 basic design principles, pg. 13].",
                "Symmetry is related to balance, not proximity.",
                "Proximity is about grouping, not using many different fonts."
            ]
        },
        {
            type: "multiple-choice",
            question: "Which statement best describes negative space (white space) in design?",
            options: [
                "It is wasted space that should be filled with graphics.",
                "It creates shapes and helps highlight key information.",
                "It should only be used around text, never images.",
                "It is another term for background color."
            ],
            answer: 1,
            aiResponses: [
                "Actually, white space is not wasted; it is a powerful design tool.",
                "Correct! Negative space creates structure and draws attention to important content [8 basic design principles, pg. 20].",
                "It applies to text and images alike, not just text.",
                "Background color can be part of white space, but the concept is broader."
            ]
        }
    ],

    freeResponse: [
        {
            type: "free-response",
            question: "Explain how alignment improves the appearance and clarity of a design.",
            correctTerms: ["alignment", "sharp", "ordered", "connection", "center", "left", "right"],
            aiResponse:
                "A strong answer mentions that alignment gives a sharp, ordered appearance by lining elements up (center, left, right, or aligned to other objects) so they feel visually connected and easier to scan [8 basic design principles, pg. 3-4]."
        },
        {
            type: "free-response",
            question: "How can contrast be used to accentuate important elements in a graphic?",
            correctTerms: ["contrast", "opposition", "color", "size", "bold", "emphasis"],
            aiResponse:
                "A good answer would say that contrast uses opposites—like dark vs. light colors, thick vs. thin lines, or bold vs. regular text—to make key elements stand out and draw the viewer’s eye [8 basic design principles, pg. 8-10]."
        },
        {
            type: "free-response",
            question: "Describe the role of color in supporting design and brand identity.",
            correctTerms: ["color", "emotion", "brand", "three shades", "consistency"],
            aiResponse:
                "An effective response explains that color communicates emotion, supports brand recognition, and should be used consistently—often by choosing about three shades and sticking to them across designs [8 basic design principles, pg. 18-19]."
        }
    ],

    trueFalse: [
        {
            type: "true-false",
            question: "Repetition of colors, fonts, or shapes can help people remember your brand and unify your design.",
            answer: "true",
            aiResponse: "True. Repetition reinforces brand identity and ties different parts of a design together [8 basic design principles, pg. 11-13]."
        },
        {
            type: "true-false",
            question: "Balance in design always means creating perfectly symmetrical layouts.",
            answer: "false",
            aiResponse:
                "False. Balance can be symmetrical or asymmetrical; asymmetrical balance uses contrast to guide the eye [8 basic design principles, pg. 15-17]."
        },
        {
            type: "true-false",
            question: "Negative space should be avoided because it makes a design look empty.",
            answer: "false",
            aiResponse:
                "False. Negative space is essential; it helps highlight important elements and keeps designs from feeling cluttered [8 basic design principles, pg. 20]."
        }
    ],

    sentenceCompletion: [
        {
            type: "sentence-completion",
            question: "Design ________ helps you create a clear path for the viewer’s eye by emphasizing the most important message first.",
            answer: "hierarchy",
            aiResponse: "This is called visual 'hierarchy' [8 basic design principles, pg. 6-8]."
        },
        {
            type: "sentence-completion",
            question: "Repeating colors, fonts, or shapes in different graphics creates visual ________.",
            answer: "consistency",
            aiResponse: "Repetition supports visual consistency across your content [8 basic design principles, pg. 11-13]."
        },
        {
            type: "sentence-completion",
            question: "Leaving parts of a layout intentionally blank uses ________ space to support the design.",
            answer: "negative",
            aiResponse: "That blank area is known as 'negative' space or white space [8 basic design principles, pg. 20]."
        }
    ],

    selection: [
        {
            type: "select-all",
            question: "Which of the following are among the eight basic design principles discussed in the article?",
            options: [
                "Alignment",
                "Hierarchy",
                "Repetition",
                "Drop shadows",
                "Negative space",
                "Proximity"
            ],
            answers: [0, 1, 2, 4, 5],
            aiResponses: [
                "✅ Alignment is one of the core principles [8 basic design principles, pg. 3-4].",
                "✅ Hierarchy is another key principle [8 basic design principles, pg. 6-8].",
                "✅ Repetition is explicitly included [8 basic design principles, pg. 11-13].",
                "❌ Drop shadows are a technique, not one of the eight named principles.",
                "✅ Negative space (white space) is a principle on the list [8 basic design principles, pg. 20].",
                "✅ Proximity is covered as an organizational principle [8 basic design principles, pg. 13-15]."
            ]
        },
        {
            type: "select-all",
            question: "Which techniques can help you create strong visual hierarchy?",
            options: [
                "Using larger or bolder fonts",
                "Placing key information higher on the page",
                "Using shapes to frame important content",
                "Randomly changing alignment",
                "Making all text the same size"
            ],
            answers: [0, 1, 2],
            aiResponses: [
                "✅ Larger or bolder fonts help important text stand out [8 basic design principles, pg. 6].",
                "✅ Higher placement on the page gives content more emphasis [8 basic design principles, pg. 6].",
                "✅ Framing with shapes can focus attention on central points [8 basic design principles, pg. 6].",
                "❌ Random alignment usually weakens hierarchy.",
                "❌ If all text is the same size, hierarchy is lost."
            ]
        },
        {
            type: "select-all",
            question: "Which statements describe good use of color in design?",
            options: [
                "Use color to support your message and emotions.",
                "Stick to a small set of brand colors for consistency.",
                "Always use every color in the rainbow for interest.",
                "Be mindful of contrast so text stays legible.",
                "Ignore how color makes people feel."
            ],
            answers: [0, 1, 3],
            aiResponses: [
                "✅ Color should reinforce the message and emotional tone [8 basic design principles, pg. 17-18].",
                "✅ Limiting yourself to a brand palette keeps designs cohesive [8 basic design principles, pg. 19].",
                "❌ Too many colors usually makes designs chaotic.",
                "✅ Contrast between text and background helps readability [8 basic design principles, pg. 8-10].",
                "❌ Designers should absolutely consider the emotional effect of color."
            ]
        }
    ]
};
