import HeroConsultation from "./components/HeroConsultation/HeroConsultation.jsx";
import Benefits from "./components/Benefits/Benefits.jsx";
import Challenges from "./components/Challenges/Challenges.jsx";
import Stats from "./components/Stats/Stats.jsx";
import ProgramFor from "./components/ProgramFor/ProgramFor.jsx";
import WhyChoose from "./components/WhyChoose/WhyChoose.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import MoneyBackSection from "./components/MoneyBackSection/MoneyBackSection.jsx";
import FAQ from "./components/FAQ/FAQ.jsx";
import ScheduleBanner from "./components/ScheduleBanner/ScheduleBanner.jsx";

function App() {
  return (
    <>
      <HeroConsultation />
      <Benefits />
      <Challenges />
      <Stats />
      <ProgramFor/>
      <WhyChoose/>
      <Testimonials />
      <MoneyBackSection/>
      <FAQ />
      <ScheduleBanner/>
    </>
  );
}

export default App;