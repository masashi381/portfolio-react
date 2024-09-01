import HomeContainer from "../components/home/HomeContainer";
import About from "../components/about/About";
import Work from "../components/work/Work";
import Contacts from "../components/contact/Contacts";
import NotFound from "../components/common/NotFound";
import { Routes, Route } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Main({ getSkills, getProjects }) {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeContainer getSkills={getSkills} getProjects={getProjects} />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
