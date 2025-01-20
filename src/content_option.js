import movie from './assets/images/movie.png'
import clothe from './assets/images/clothe.png'
import belissimo from './assets/images/bellissimo.png'
import shopping from './assets/images/shopping.png'
const logotext = "FULL_STACK DEVELOPER";
const meta = {
    title: "Umidjon Izzatullayev",
    description: "I’m Full stack devloper(Nodejs+Vue/Reactjs), currently studying in Tashkent",
};

const introdata = {
    title: "I’m Umidjon Izzatullayev",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop websites",
    },
    description: "As a hardworking student, I am seeking a position where I can showcase my skills and gain valuable experience. I am looking for a job that will allow me to share my new ideas for the company's growth.",
    your_img_url: "https://images.pexels.com/photos/5496464/pexels-photo-5496464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
};

const dataabout = {
    title: "Short Info",
    aboutme: "I am 21 years old, 3rd-year university student. I am searching for a job that suits my experiences.",
};
const worktimeline = [{
        edutitle: "Westiminster International university",
        where: "Tashkent",
        date: "2022",
    },
    {
        edutitle: "Najot Ta'lim",
        where: "Tashkent",
        date: "2023",
    }
];

const skills = [{
        name: "Javascript",
        value: 90,
    },
    {
        name: "HTML/CSS",
        value: 85,
    },
    {
        name: "Vuejs",
        value: 70,
    },
    {
        name: "React",
        value: 60,
    },
    {
        name: "Typescript",
        value: 85,
    },
    {
        name: "Tailwindcss",
        value: 80,
    },
    {
        name: "Sass",
        value: 95,
    },
    {
        name: "MySql/NoSql",
        value: 85,
    },
    {
        name: "Nodejs",
        value: 85,
    },
    {
        name: "Nestjs",
        value: 95,
    },
    {
        name: "Nextjs",
        value: 75,
    },
];

const services = [{
        title: "Backend Developer",
        description: "I can work with Nodejs, Nestjs for backend development",
    },
    {
        title: "Frontend Develpoer",
        description: "I can work with Vuejs, Reactjs for frontend development",
    }
];

const dataportfolio = [{
        img: movie,
        description: "The movie website done with TMDB",
        link: "https://bild-tick.vercel.app",
    },
    {
        img: clothe,
        description: "The clothing website done with Redux",
        link: "https://elegant-seven-zeta.vercel.app",
    },
    {
        img: belissimo,
        description: "The restaurant backend swagger done with Bellissimo's original website UI",
        link: "http://3.65.218.182:3010/api",
    },
    {
        img: shopping,
        description: "The shopping backend swagger, still working on its frontend part. It is group work",
        link: "https://shaxriyorbek.uz/api/docs",
    }
];

const contactConfig = {
    YOUR_EMAIL: "umidizzatullayev1717@gmail.com",
    YOUR_FONE: "+(998) 99-418-50-35",
    description: "@Umidjon_Izzatullayev",
    YOUR_SERVICE_ID: "service_6fk7tod",
    YOUR_TEMPLATE_ID: "template_idk80js",
    YOUR_USER_ID: "ytLvpgAYTPmAc-Nk9",
};

const socialprofils = {
    github: "https://github.com/Umidjon1717",
    linkedin: "https://linkedin.com/in/umid-izzatullayev-5a1a972b2",
    twitter: "https://t.me/Umidjon_Izzatullayev",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};