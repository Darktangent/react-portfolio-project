
import project1 from '../assets/face.jpg'
import project2 from '../assets/geoninja.jpg'
import project3 from '../assets/chat.jpg'

const PROJECTS=[
  {
    id:1,
    title:'Face Detection Application',
    description:' A face detection app that utilized Reactjs and JSX for frontend and express (Node.js) for the backend; implemented PostgreSQL for user authentication, and Clarifai API to detect user faces on uploaded images.',
    link:'https://faciem.herokuapp.com',
    image: project1
  },
  {
    id:2,
    title: "Geo Ninja App",
    description:'Created a friend tracking application using Vue.js, cloud firestore database, Google maps API, and the browser’s native geolocation API; the application retrieved user locations and placed them on a map. ',
    link: 'https://tx-geo-ninjas.firebaseapp.com/login',
    image: project2
  },
  {
    id:3,
    title: "Chat Application",
    description:'Created a real-time chat application featuring authentication features; utilized Node.js, Socket IO, JavaScript to create the application and deployed it online on Heroku. ',
    link: 'https://sleepy-river-62384.herokuapp.com',
    image: project3
  }
]
export default PROJECTS;
