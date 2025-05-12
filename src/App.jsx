import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header.jsx";
import Showcase from "./components/Showcase.jsx";
import Infoservis from "./components/Infoservis.jsx";
import Team from "./components/Team.jsx";
import Register from "./components/Register.jsx";
import Register2 from "./components/Register2.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Partners from "./components/Partners.jsx";
import Media from "./components/Media.jsx";
import Comments from "./components/Comments.jsx";
import Question from "./components/Question.jsx";
import Counsel from "./components/Counsel.jsx";
import Footer from "./components/Footer.jsx";
import { AuthProvider } from "./components/context/AuthContext.jsx";
import Cource from "./components/Pages/Cource.jsx";
import Contact from "./components/Pages/Contact.jsx";

const queryClient = new QueryClient();

// const App = () => {
//   return (
//     <QueryClientProvider client={queryClient}>
//       <Router>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <AuthProvider>
//                   <Header />
//                   <Showcase />
//                   <Infoservis />
//                   <Team />
//                   <Partners />
//                   <Media />
//                   <Comments />
//                   <Question />
//                   <Counsel />
//                   <Footer />
//                   {/* ikkinchi sahifa */}
//                   <Route path="/cource" element={<Cource />} />
//                   {/* 3 - sahifa */}
//                   <Route path="/contact" element={<Contact />} />
//                 </AuthProvider>
//               </>
//             }
//           />
//           <Route path="/register" element={<Register />} />
//           <Route path="/register2" element={<Register2 />} />
//         </Routes>
//       </Router>
//     </QueryClientProvider>
//   );
// };

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <AuthProvider>
                <Header />
                <Showcase />
                <Infoservis />
                <Team />
                <Partners />
                <Media />
                <Comments />
                <Question />
                <Counsel />
                <Footer />
              </AuthProvider>
            }
          />

          {/* 👇 Contact sahifasi uchun to‘g‘ri route */}
          <Route path="/contact" element={<Contact />} />

          {/* 👇 Cource sahifasi uchun to‘g‘ri route (agar u ham alohida bo‘lsa) */}
          <Route path="/cource" element={<Cource />} />

          {/* Boshqa sahifalar */}
          <Route path="/register" element={<Register />} />
          <Route path="/register2" element={<Register2 />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
