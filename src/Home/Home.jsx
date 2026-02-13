// src/pages/Home.jsx

import Footer from "../components/Footer/Footer";
import SearchBar from "../components/SearchBar/SearchBar";
import Blogs from "../Sections/Blogs/Blogs";
import DownloadApp from "../Sections/DownloadApp/DownloadApp";
import FAQs from "../Sections/FAQs/FAQs";
import OurFamilies from "../Sections/OurFamilies/OurFamilies";
import PatientCaring from "../Sections/PatientCaring/PatientCaring";
import Specialists from "../Sections/Specialists/Specialists";
import Specialization from "../Sections/Specialization/Specialization";
import HeroSlider from "../components/HeroSlider/HeroSlider";   // ← new import

export default function Home() {
  return (
    <>
      {/* Hero slider / promotional carousel – comes first */}
      <HeroSlider />

      {/* Main search bar – usually placed right after or overlapping hero */}
      <SearchBar />

      {/* Rest of the sections in the order shown in screenshots */}
      <Specialization />
      <Specialists />
      <PatientCaring />
      <OurFamilies />
      <FAQs />
      <DownloadApp />
      <Blogs />

      {/* Footer always last */}
      <Footer />
    </>
  );
}

