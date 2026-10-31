import PageHeading from "./PageHeading";
import Subheading from "./Subheading";
import HorizontalRule from "./HorizontalRule";
import welcomeImg from "../assets/images/welcome.jpg";

function Welcome() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 lg:flex-row lg:justify-between lg:px-10 lg:py-12">
        <div className="flex w-full max-w-2xl flex-col items-center gap-4 py-6 xs:px-6">
          <PageHeading>Welcome to Mad Potter,</PageHeading>
          <Subheading>where creativity comes to life.</Subheading>
          <HorizontalRule className="max-w-xs self-center fill-brand-primary/70" />

          <p className="text-justify indent-4 text-lg leading-relaxed font-medium">
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
      </div>
    </section>
  );
}

export default Welcome;
