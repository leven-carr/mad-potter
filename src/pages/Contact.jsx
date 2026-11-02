import PageWrapper from "../components/PageWrapper";
import VisitUs from "../components/VisitUs";
import BlobCarousel from "../components/BlobCarousel";

function Contact() {
  return (
    <PageWrapper className="bg-contact bg-cover bg-fixed">
      <VisitUs />

      <div className="lg:py-6">
        <BlobCarousel />
      </div>
    </PageWrapper>
  );
}

export default Contact;
