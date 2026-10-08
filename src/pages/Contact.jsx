import VisitUs from "../components/VisitUs";
import BlobCarousel from "../components/BlobCarousel";

function Contact() {
  return (
    <div className="w-full bg-contact bg-cover bg-fixed pt-4 pb-28 lg:pb-32">
      <VisitUs />

      <div className="lg:py-8">
        <BlobCarousel />
      </div>
    </div>
  );
}

export default Contact;
