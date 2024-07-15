import Banner from "./_components/Banner";
import CallToAction from "./_components/CallToAction";
import Dispensary from "./_components/Dispensary";
import Education from "./_components/Education";
import Filter from "./_components/Filter";
import InfoDetail from "./_components/InfoDetail";
import Reason from "./_components/Reason";
import Recently from "./_components/Recently";
import Services from "./_components/Services";
import Testimonial from "./_components/Testimonial";

const HomePage = () => {
  return (
    <main>
      <Banner />
      <Services />
      <Dispensary />
      <Testimonial />
      <Filter />
      <CallToAction />
      <Reason />
      <Recently />
      <InfoDetail />
      <Education />
    </main>
  );
};

export default HomePage;
