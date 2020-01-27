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
            paragraphText: "I was born and raised in California. ",
            image: {
                src: generalImage,
                alt: "Samantha Orcutt in Paris"
            }
        },
        {
            headingText: "Career",
            paragraphText: "",
            image: {
                src: careerImage,
                alt: "Samantha Orcutt in Professional Attire"
            }
        },
        {
            headingText: "Hobbies",
            paragraphText: "This is a section that displays gmy hobbies.",
            image: {
                src: hobbiesImage,
                alt: "Samantha Orcutt on a fishing trip"
            }
        }
        

    ]

}