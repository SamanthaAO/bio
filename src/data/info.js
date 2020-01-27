import generalImage from "../assets/images/general.jpg";
import careerImage from "../assets/images/career.jpg";
import hobbiesImage from "../assets/images/hobbies.jpg";


export const info = {
    column1: {
        span: 3,
        position: 1,
    },
    column2: {
        span: 9,
        position: 4,
    },
    heading: {
        tag: "h2",
        size: 3
    },
    paragraph: {
        size: 1
    },

    sections: [
        {
            headingText: "General",
            paragraphText: "I was born and raised in California. I moved up to Seattle for college and fell in love with the area and have never looked back, besides from 2 years when I lived in the UK (because I am impartial to all the rainy grey places). I currently live in Bellevue with my dog (Phoebe), cat (Fievil), and husband. ",
            image: {
                src: generalImage,
                alt: "Samantha Orcutt in Paris"
            }
        },
        {
            headingText: "Career",
            paragraphText: 
            "I graduated from UW cum laude with a degree in Environmental Studies. After graduation I started a job as an office coordinator/ legal assistant at a wealth management firm in downtown Seattle. In this position I was in charge of solving any problem that was affecting the office and these issues often ended up being technical in nature. Loving the challenge that tech provided me, and wanting to find ways to further improve the client interfaces that I was working with I decided to enroll myself in UW's full stack coding bootcamp. The bootcamp was one of the most challenging things I ever did, and I look forward to continuing to push myself in the same way that the bootcamp did as I continue to explore this and ever expanding field.",
            image: {
                src: careerImage,
                alt: "Samantha Orcutt in Professional Attire"
            }
        },
        {
            headingText: "Hobbies",
            paragraphText: "I love the outdoors, and most activities that are associated with it. I particularly enjoy hiking and fishing. When the weather is not ideal for going outside I am a huge fan of my switch board games. I also love to travel anywhere and everywhere.",
            image: {
                src: hobbiesImage,
                alt: "Samantha Orcutt on a fishing trip"
            }
        }
        

    ]

}