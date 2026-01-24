import Hero from "../components/home/Hero";
import MaterialsOverview from "../components/home/OverviewMaterials";
import WhySaat from "../components/home/WhySaat";
import SupplyPreview from "../components/home/SupplyPreview";
import CallToAction from "../components/home/CallToAction";
import ContactPreview from "../components/home/ContactPreview";

const Home = () => {
  return (
    <>
      <Hero />
      <MaterialsOverview />

      <WhySaat />
      <SupplyPreview />
      <CallToAction />
      <ContactPreview />
    </>
  );
};

export default Home;
