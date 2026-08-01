import PageHeader from "../components/PageHeader";
import Services from "../sections/Services";
import WhyChooseUs from "../sections/WhyChooseUs";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="What We Build"
        title="Fencing Services for Homes, Businesses & Farms"
        crumb="Services"
      />
      <Services full />
      <WhyChooseUs />
    </>
  );
}
