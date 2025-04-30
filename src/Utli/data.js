import frontend from '../assets/Frontend.png'
import backend from '../assets/Backend.png'
import tools from '../assets/Tools.png'
import database from '../assets/Database.png'
import soft from '../assets/SoftSkills.png'


export const SKILLS=[
    {
        title:"Frontend",
        icon:frontend,
        Skills:[
            {skill:"HTML5", percentage:"80%"},
            {skill:"CSS3", percentage:"90%"},
            {skill:"JavaScript", percentage:"75%"},
            {skill:"React.js", percentage:"70%"},
 ],
    },
    {
        title:"Backend",
        icon:backend,
        Skills:[
            {skill:"C#", percentage:"80%"},
            {skill:".Net", percentage:"70%"},
            {skill:"Java", percentage:"50%"},
                {skill:"Python", percentage:"50%"},

        ],
    },
    {
        title:"Tools",
        icon:tools,
        Skills:[
            {skill:"Git & GitHub", percentage:"50%"},
            {skill:"Visual Studio Code", percentage:"75%"},
            {skill:"Webpack", percentage:"60%"},
            {skill:"Responsive Design", percentage:"70%"},
        ],
    },
    {
        title:"Database",
        icon:database,
        Skills:[
            {skill:"SQL", percentage:"80%"},
            {skill:"Firebase", percentage:"50%"},
        ],
    },
    {
        title:"Soft Skills",
        icon:soft,
        Skills:[
            {skill:"Problem-Solving", percentage:"70%"},
            {skill:"Collaboration", percentage:"60%"},
            {skill:"Attention to Detail", percentage:"50%"},
        ],
    },
    // {
    //     title:"Other",
    //     icon:"./assets/Other.png",
    //     Skills:[
    //         {skill:"Cloud Computing", percentage:"50%"},
    //         {skill:"Cybersecurity", percentage:"40%"},
    //         {skill:"Data Science", percentage:"30%"},
    //     ],
    // }
]

export const PROJECTS = [
    {
      title: "Food-App",
    useTechnologies: "HTML, CSS, JavaScript",
    projectLink: "https://food-app-s.netlify.app/",
    responsibilities: [
      "Developed a fully responsive Food App which includes features like a header, footer, food listings with images, and detailed information about each food item.",
      "Designed an intuitive user interface with proper layout and styling to enhance the user experience.",
      "Focused on displaying all key components found in a real-world food application, including menu sections, item descriptions, and visual elements.",
      "Gained experience in structuring HTML content, using CSS for layout and responsiveness, and JavaScript for interactivity."
    ]
    },
    {
      title: "Login-Page",
      useTechnologies: "HTML, CSS, JavaScript",
      responsibilities: [
        "This page includes a basic login form with fields for email and password, along with proper input validation and error handling. The main goal of this project was to understand form handling, user authentication logic, and styling using HTML, CSS, and JavaScript. This project helped me strengthen my frontend skills and provided hands-on experience in creating real-world UI components."

      ]
    },
    {
      title: "Shopping Cart System",
      useTechnologies: "React.js, Tailwind CSS, Firebase",
      responsibilities: [
        "This Shopping Cart App is a full-stack e-commerce application built with React.js for the frontend, Tailwind CSS for responsive styling, and Firebase for the backend services such as real-time database and authentication."
      ]
    },
    {
      title: "CRUD Application with Authentication",
      useTechnologies: "React.js, Tailwind CSS,Java",
      responsibilities: [
        "This is a full-stack CRUD (Create, Read, Update, Delete) application developed using React.js for the frontend and Java (Spring Boot) for the backend APIs. The application also includes Login and Registration pages for user authentication."
        ]
    },
    {
      title: "Full-Stack CRUD Application ",
      useTechnologies: "HTML, CSS,Reactjs, Asp.Net",
      responsibilities: [
        "This is a full-stack CRUD (Create, Read, Update, Delete) application developed using React.js for the frontend, .NET (C#) for backend APIs, and SQL Server as the database. The UI was styled using basic HTML and CSS."
          ]
    },
    
  ];
  