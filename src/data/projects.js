import returnZeroFont from "../../public/assets/projects/return-zero-font.png";
import retrunZeroDashboard from "../../public/assets/projects/return-zero-dashboard.png";
import myYoutube from "../../public/assets/projects/my-youtube.png";
import flightBooking from "../../public/assets/projects/flight-booking.png";
import blog from "../../public/assets/projects/blog.png";
import colorGeneretor from "../../public/assets/projects/color.png";
import converter from "../../public/assets/projects/converter.png";
import blogEjs from "../../public/assets/projects/blog-multi-author.png";
import studentEarn from "../../public/assets/projects/student-earn.png";
import quiz from "../../public/assets/projects/quiz.png";
import bloodBank from "../../public/assets/projects/blood-bank.png";
import cryptoDashboard from "../../public/assets/projects/crypto-dashboard.png";
import cryptoLanding from "../../public/assets/projects/crypto-landing.png";
import todoMern from "../../public/assets/projects/todo-mern.png";
import todoNext from "../../public/assets/projects/todo-next.png";
import portfolio from "../../public/assets/projects/portfolio.png";
import clock from "../../public/assets/projects/clock.png";
import eCommerceDashboard from "../../public/assets/projects/e-commerce-dashboard.png";

const myProjects = [
  {
    id: 1,
    name: "Advance Blog Application - ( MERN )",
    overview:
      "An Blog Application. User can create a new blog, edit and delete. Reader can comment. Admin can all post edit and delete",
    tech: ["js", "ts", "next", "redux", "node", "exress", "mongo"],
    live: "https://advanced-blog.netlify.app",
    repo: "https://github.com/imranBappy/advanced-blog-application.git",
    img: blog,
  },
  {
    id: 2,
    name: "Blog Application - ( Full Stack )",
    overview:
      "An Blog Application. User can create a new blog, edit and delete. Reader can line, dislike, comment,reply, search and filter",
    tech: ["html", "css", "js", "node", "express", "mongo"],
    // live: 'https://number-system.netlify.app',
    repo: "https://github.com/imranBappy/my-blog",
    img: blogEjs,
  },
  {
    id: 3,
    name: "Return Zero University - ( MERN )",
    overview:
      "An Education Institu Management System (EIMS) is a comprehensive software solution that is designed to streamline and automate the day-to-day operations of educational institutions.",
    tech: ["js", "react", "node", "express", "mongo"],
    live: "https://return-zero.netlify.app/",
    repo: "https://github.com/imranBappy/ERP",
    img: returnZeroFont,
  },
  {
    id: 6,
    name: "E-Commerce Dashbard ",
    overview:
      "An e-commerce dashbard . admin can all status in his bussness and admin can filter",
    tech: ["html", "css", "js", "react", "redux"],
    live: "https://tubular-eclair-5ddd76.netlify.app/",
    repo: "https://github.com/imranBappy/shopify-dashboard.git",
    img: eCommerceDashboard,
  },
  {
    id: 42,
    name: "University Dashboard - ( MERN )",
    overview:
      "An Education Institu Management System (EIMS) is a comprehensive software solution that is designed to streamline and automate the day-to-day operations of educational institutions.",
    tech: ["js", "react", "node", "express", "mongo"],
    live: "https://dashboard-return-zero.netlify.app",
    repo: "https://github.com/imranBappy/ERP",
    img: retrunZeroDashboard,
  },
  {
    id: 5,
    name: "Imran's Note - ( MERN )",
    overview:
      "An to application. Imran can create todo, complate todo and delete todo",
    tech: ["html", "css", "js", "react", "node", "express", "mongo"],
    live: "https://imran-task.netlify.app",
    repo: "https://github.com/imranBappy/Todo-With-MERN-Stack.git",
    img: todoMern,
  },
  {
    id: 7,
    name: "Student Job - ( Server Less ) ",
    overview:
      "An only earnign site. User can subsrib package and earn money by watching ad video",
    tech: ["html", "css", "js", "react", "firebase"],
    live: "https://awesome-euler-8eab2c.netlify.app/",
    repo: "https://github.com/imranBappy/students_job_client.git",
    img: studentEarn,
  },

  {
    id: 9,
    name: "Online Blood Bank - ( Server Less - Application ) ",
    overview:
      "An online blood bank. User can create account and login search doner",
    tech: ["html", "css", "js", "react", "firebase"],
    live: "https://blood-bank-alpha.vercel.app/",
    repo: "https://github.com/imranBappy/blood-bank",
    img: bloodBank,
  },

  {
    id: 10,
    name: "Flight Booking App - ( Fontend )",
    overview:
      "An light Booking App. User can book a flight ticket and see the ticket details",
    tech: ["js", "react", "redux"],
    live: "https://roaring-daffodil-65ea24.netlify.app/",
    repo: "https://github.com/imranBappy/flight-book",
    img: flightBooking,
  },
  {
    id: 11,
    name: "Max Broker Dashboard - ( Fontend ) ",
    overview:
      "An admin dashboard. Admin can see all details such as earning status, total income, Passive Income and other information",
    tech: ["html", "css", "js", "react"],
    live: "https://hungry-lamport-0aea3c.netlify.app",
    repo: "https://github.com/imranBappy/max-broker.git",
    img: cryptoDashboard,
  },
  {
    id: 12,
    name: "Bvarb - ( Fontend App ) ",
    overview:
      "An crypto animation landing page. there are many section such as, hero section,  Arbitrage section, Who we are section and other section",
    tech: ["html", "css", "js"],
    live: "https://hardcore-goldwasser-7e462c.netlify.app/",
    repo: "https://github.com/imranBappy/Bvarb.git",
    img: cryptoLanding,
  },
  {
    id: 13,
    name: "Software Enginner Imran - ( Fontend ) ",
    overview:
      "An portfolio website. Use can change theme light and dark. There are many section  hero, Services section, Portofolio section and others",
    tech: ["html", "tailwind", "ts", "next"],
    live: "https://imran-portfolio-ia06mizqv-imranbappy.vercel.app",
    repo: "https://github.com/imranBappy/nextjs-portfolio.git",
    img: portfolio,
  },
  {
    id: 14,
    name: "TASKIFY - ( Fontend ) ",
    overview:
      "An todo application. Imran can create todo, complate todo and delete todo",
    tech: ["html", "css", "ts", "react"],
    live: "https://bd-todo.netlify.app/",
    repo: "https://github.com/imranBappy/todo-app",
    img: todoNext,
  },
  {
    id: 15,
    name: "Color Generator - ( Fontend ) ",
    overview:
      "An color generator. User can genetator dynamic color and set background",
    tech: ["html", "css", "js"],
    live: "https://color-generator-2023.netlify.app/",
    repo: "https://github.com/imranBappy/color-generator.git",
    img: colorGeneretor,
  },
  {
    id: 16,
    name: "Number converter system - ( Fontend ) ",
    overview:
      "An number converter system. User can any number system to any number system in real time and text to binary and binary to text",
    tech: ["html", "css", "js"],
    live: "https://number-system.netlify.app",
    repo: "https://github.com/imranBappy/number-converter-system-web-app.git",
    img: converter,
  },
  {
    id: 17,
    name: "Clock - ( Fontend ) ",
    overview: "An digital clock. Evebody can watch time",
    tech: ["html", "css", "js"],
    live: "https://zen-newton-841dbe.netlify.app",
    repo: "https://github.com/imranBappy/Digital-clock",
    img: clock,
  },
];

export default myProjects;
