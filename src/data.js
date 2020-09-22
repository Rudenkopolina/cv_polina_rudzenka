import {
    FaGraduationCap,
    FaBriefcase,
    FaIdCard,
    FaInfoCircle,
    FaComments,
    FaChartPie,
    FaTasks,

    FaTelegram,
    FaEnvelope,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

export default {
    about: {
        title: 'about',
        Icon: FaIdCard,
        info: "I'm a software engineer with several years of experience. I am always interested in innovations in the IT sector and always try to learn something new. I am a responsible person and always try to do my best while working on the projects.",
    },
    contacts: {
        title: 'contacts',
        Icon: FaInfoCircle,
        content: [
            { info: 'Belarus, Minsk', Icon: FaMapMarkerAlt },
            { info: 'rudenkopolina@gmail.com', Icon: FaEnvelope },
            { info: '+375 29 873 80 06', Icon: FaPhoneAlt },
            { info: '@rudenkopolina', Icon: FaTelegram },
        ],
    },
    languages: {
        title: 'languages',
        Icon: FaComments,
        content: [
            { info: 'English', subInfo: '(Intermediate B1)' },
            { info: 'Russian', subInfo: '(Native)' },
        ],
    },
    skills: {
        title: 'skills',
        Icon: FaChartPie,
        content: [
            { info: 'JavaScript', grade: 9 },
            { info: 'TypeScript', grade: 6 },
            { info: 'HTML', grade: 9 },
            { info: 'CSS', grade: 9 },
            { info: 'NodeJS', grade: 6 },
            { info: 'React', grade: 8 },
            { info: 'Angular 6', grade: 5 },
            { info: 'React Native', grade: 6 },
            { info: 'Redux', grade: 8 },
            { info: 'MobX', grade: 5 },
            { info: 'WebSockets', grade: 7 },
            { info: 'REST', grade: 9 },
            { info: 'MySQL', grade: 6 },
            { info: 'MongoDB', grade: 6 },
            { info: 'Docker', grade: 5 },
            { info: 'Git', grade: 8 },
            { info: 'Webpack', grade: 6 },
        ],
    },
    education: {
        title: 'education',
        Icon: FaGraduationCap,
        content: [
            {
                title: 'Belarusian State University',
                description: 'Bachelor’s degree Mechanics and Mathematics. Mathematics (Science-Design Activity)',
                date: '2015 - 2019',
            }
        ]
    },
    work: {
        title: 'work experience',
        Icon: FaBriefcase,
        content: [
            {
                title: 'IBA',
                description: 'Full Stack Engineer',
            },
            {
                title: 'Paralect',
                description: 'Full Stack Engineer',
            }
        ]
    },
    projects: {
        title: 'projects',
        Icon: FaTasks,
        content: [
            {
                title: 'Mastermind',
                description: 'Create a simple game in which you have to guess the number',
                responsibilities: 'Create the game and deployd it on github pages',
                technologies: 'ReactJS, Styled-components, HTML5, Semantic UI',
            },
            {
                title: 'Cognitive Accelerate',
                description: 'Building a user-centric means to capture robotic automation opportunities for process transformation with constant feedback loops to improve the understanding of technology capabilities. The tool implements a comprehensive assessment workflow to ease prioritization of opportunities, and enables an exchange of automation opportunities and assets across different areas of the business to grow the portfolio of reusable assets',
                responsibilities: 'Development of the front-end part of the application using React and Redux. Implement pages with responsive markup and UI components with help of Carbon Design library. In addition, I was responsible connect front-end part of application with back-end via REST API. What more, I was responsible for the architecture of the redux-store for better performance',
                technologies: 'ReactJS, Redux, Redux-form, React-router, JSX, HTML5, CSS3, React Carbon Design, Node.js, MongoDB',
            },
            {
                title: 'Taxikon',
                description: 'The application that should help doctors to consult with other doctors during the operation. They can take a photo and post in the application. Other doctors got notifications. They can view photo and answer to some questions, which helps main doctor make a decision. All doctors respond anonymously, which helps to avoid a personal assessment of the results',
                responsibilities: 'Develop React and React Native apps. Come up with an app design',
                technologies: 'React JS, React-router, ES6, JSX, HTML5, CSS3, Material-UI, Webpack2, Docker, Docker Compose, Axios, AWS Cognito, AWS Amplify, React Native, React Navigation, Expo',
            },
            {
                title: 'BoatyBall',
                description: 'This application includes 4 sub-applications, for admin, manager, owner and user. The main idea of the application is that a user traveling on a yacht can rent a mooring ball for a day, near which he can park the yacht and pay immediately through the application. In other sub-applications, the admin, owner and manager can track the number of busy mooring balls, set new pains, change prices and stuff like that',
                responsibilities: 'Development of the front-end part of the application using React and MobX. Work with Google maps and customization of pins on google maps. Connection of payment through Stripe. One of the key project functionalities I worked on were: implementation of FCFS (First Come First Served) balls, which implies that you reserve the ball at any time, but your reservation is only for 24 hours from that moment; the ability to add a VIP status to the user, which allows you to book balls for a certain number of days in advance. Also, my responsibilities included the development of a landing site using GoHugo and Materialize, and the integration of the site with Zoho forms',
                technologies: 'ReactJS, MobX, React-router, ES6, JSX, HTML5, CSS3, Material-UI, Webpack2, Docker, Docker Compose, Axios, Formik, Yup, Date-fns, React-google-maps, React-stripe-elements, Jest, Enzyme',
            },
            {
                title: 'Railway Chat Bot Assistant',
                description: 'NodeJS application that allows a customer to ask for railway schedule and reference information. It can recognize either speech or text messages and handle this communication via phone or chat messenger. The application uses a set of services like Speech2Text, IBM Watson Assistant, etc',
                responsibilities: 'I worked on both back-end and front-end parts of the application, also worked with IBM Watson Assistant, Yandex API, Asterisk. I used Telegram API to expose the application as a chatbot in Telegram channel. I also took part in creation of the NodeJS Application that integrates IBM Watson Assistant with speech recognition and speech synthesis services. Another my responsibility was to lead a sub team that created UI for knowledge base part of the system. This part provides UI to fill and manage knowledge base used by the assistant',
                technologies: 'ReactJS, Redux, React-router, JSX, HTML5, CSS3, Node.js, Express, MySQL, Sequelize, node-telegram-bot-api, axios, IBM Watson Assistant, Asterisk, Yandex SpeechKit, Yandex API, Google SpeechToText, Google TextToSpeech',
            },
            {
                title: 'ML Tag PDF',
                description: 'The main purpose of this project was to allow the user to upload and mark a pdf document. This application was created as a part of bigger RPA process that handles requests from Government Authorities to banks. The whole process includes OCR of the source documents and ML based entity extraction. I worked on UI that was used to validate quality of data extraction',
                responsibilities: 'I created UI tool for rendering and tagging pdf files using react-pdf library, and also changing the markup if needed',
                technologies: 'ReactJS, Node.js, Material-UI, MySQL, Sequelize, Docker',
            },
            {
                title: 'Organizer',
                description: 'An angular based web application allows users to create projects with some tasks, manage it, organize and plan workflows, share it between other users. Application uses Firebase - a Backend-as-a-Service API that lets developers sync and store data in realtime',
                responsibilities: 'I worked on the front-end part of the application, worked with Firebase API, and did database design',
                technologies: 'TypeScript, Angular 6, Firebase, Firestore, Angular Material, ngrx, Angular Animations',
            },
            {
                title: 'ML Tag',
                description: 'The main goal of this project is creating easy to reuse component that provides interface for text annotation and classification. It allows the user to mark named entities in document, classify documents, and also markup entities according to a given form. This is a part of a larger project related to text processing using ML algorithms',
                responsibilities: 'I worked on development of the backend including REST APIs (Node.js, Express, passport, Sequelize, MySQL) and frontend part (React, Redux, semantic-ui-react)',
                technologies: 'React, Redux, Express, Node.js, Sequelize, MySQL, Docker, PassportJS',
            },
            {
                title: 'EasyKFZ',
                description: 'Invoices, offers, orders, internal orders, products, clients for garages',
                responsibilities: 'Creating components for client side by React JS (JSX), calling server side from client by using fetch, setting dynamic and data storing by Redux, setting up portal properties',
                technologies: 'ReactJS, Redux, React-router, JSX, HTML5, CSS3, Node.js, Koa.js, Socket.io, Handlebars, Docker',
            },
            {
                title: 'Takebuddy',
                description: 'Takebuddy is a simple OKR system that allows individual users, teams and eventually companies to sign up and create their OKR`s, track progress',
                responsibilities: 'Creating application for client side by React JS (JSX), setting data storing by Redux',
                technologies: 'ReactJS, Redux, React-router, JSX, HTML5, CSS3, Docker',
            },
        ]
    }
}