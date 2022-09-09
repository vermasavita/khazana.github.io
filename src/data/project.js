import { v4 as uuid } from "uuid";

const projectData = [
  {
    id: uuid(),
    script: false,
    img: "https://images.unsplash.com/photo-1525770041010-2a1233dd8152?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNvY2lhbCUyMG1lZGlhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Make Friends | Social Media",
    stack:
      "React, Redux Toolkit, React Router, Cloudinary, Tailwind CSS, Mock Backend",
    fetures:
      "CRUD on posts and comments, filter by trending and date & form validation, follow & unfollow and edit user profile, like & bookmark post",
    liveLink: "https://friiends.netlify.app/login",
    githubLink: "https://github.com/vermasavita/friends",
  },
  {
    id: uuid(),
    script: false,
    img: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "By Book | Ecommerce",
    stack: "React, React Router, UI Book, Mock Backend",
    fetures:
      "Product listing, wishlist & cart management, filters on products, toast notification, authentication, form validation, fully responsive web app",
    liveLink: "https://dashing-longma-66b56e.netlify.app/",
    githubLink: "https://github.com/vermasavita/buy-book",
  },
  {
    id: uuid(),
    script: false,
    img: "https://images.unsplash.com/photo-1551817958-c5b51e7b4a33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dmlkZW98ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    title: "Video Library",
    stack: "React, React Router, UI Book, Mock Backend",
    fetures:
      "Search & filters for videos, playlist management with video added to the playlist when it is created, history, like & watch later management authentication, fully responsive web app",
    liveLink: "https://youtube-two-nu.vercel.app/",
    githubLink: "https://github.com/vermasavita/youtube",
  },
  {
    id: uuid(),
    script: false,
    img: "https://images.unsplash.com/photo-1578450671530-5b6a7c9f32a8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5vdGVzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Note Book | Note App",
    stack: "React, React Router, React Quill, UI Book, Mock Backend",
    fetures:
      "CRUD operations on notes, archive & trash managment, label management, pin-unpin notes, colored notes, filter notes, authentication, form validation, fully responsive web app",
    liveLink: "https://note-buk.vercel.app/",
    githubLink: "https://github.com/vermasavita/note-buk",
  },
  {
    id: uuid(),
    script: false,
    img: "https://images.unsplash.com/photo-1656312193617-b8d43d0b9535?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGRlc2lnbiUyMGNvbXBvbmVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "UI Book | Component Library",
    stack: "HTML, CSS, JavaScript",
    fetures: "Light weight component library having 17+ in-built components",
    liveLink: "https://uibook.netlify.app/",
    githubLink: "https://github.com/vermasavita/UI-Book",
  },

  {
    id: uuid(),
    script: true,
    img: "https://images.unsplash.com/photo-1513885785268-beb7ade082c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d2lzaCUyMGNhcmRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Collect Birthday Cards | Google Script",
    stack: "JavaScript",
    fetures:
      "Send mail to collect birthday cards or wishes from a respective team members",
    liveLink:
      "https://docs.google.com/spreadsheets/d/10ag_GRIhkNWGkjscOweDdR8-AY6vv1RYonmtmTRXkPQ/edit#gid=0",
  },
];

export { projectData };
