import PageWrapper from "../components/ui/PageWrapper";
import VisitUs from "../components/features/contact/VisitUs";
import BlobCarousel from "../components/features/contact/BlobCarousel";
import CouponButton from "../components/common/CouponButton";

function Contact() {
  return (
    <PageWrapper className="bg-contact bg-cover bg-fixed">
      <VisitUs />

      <div className="lg:py-6">
        <BlobCarousel />
      </div>
      <CouponButton />
    </PageWrapper>
  );
}

export default Contact;
