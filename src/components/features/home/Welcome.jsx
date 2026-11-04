import LayoutWrapper from "@/components/ui/LayoutWrapper";
import PageHeading from "@/components/ui/PageHeading";
import Subheading from "@/components/ui/Subheading";
import HorizontalRule from "@/components/ui/HorizontalRule";
import welcomeImg from "@/assets/images/welcome.jpg";

function Welcome() {
  return (
    <section className="w-full">
      <LayoutWrapper className="lg:flex-row lg:justify-between">
        <div className="flex w-full max-w-2xl flex-col items-center gap-4 py-6">
          <div className="flex w-full flex-col items-center gap-4 px-6">
            <PageHeading>Welcome to Mad Potter,</PageHeading>
            <Subheading>where creativity comes to life.</Subheading>
            <HorizontalRule className="max-w-xs self-center fill-brand-primary/70" />
          </div>

          <p className="text-justify indent-4 text-lg leading-relaxed font-medium lg:px-6">
            At Mad Potter you can choose from hundreds of pottery pieces such as
            bowls, mugs, picture frames, banks, and more. We'll help you design
            and paint the perfect piece for your home or to give as a gift. Mad
            Potter offers a fun and inviting atmosphere for everyone, from
            birthday parties to bridal showers to scout troops!
          </p>
        </div>

        <img
          src={welcomeImg}
          alt=""
          className="w-full max-w-sm rounded-2xl shadow-lg"
        />
      </LayoutWrapper>
    </section>
  );
}

export default Welcome;
