import Container from "./Container"
import FadeIn from "./FadeIn"
import SectionIntro from "./SectionIntro"
import StylizedImage from "./StylizedImage"
import pic from "/public/servicespic.jpg"

function Services() {
  return (
    <>
      <SectionIntro eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40">
        <p>With an unwavering commitment, we guide you in recognizing, delving into, and seizing emerging opportunities that pave the way for growth and success.</p>
      </SectionIntro>
      <Container className="mt-16">
<div className="lg:flex lg-items-center lg-justify-end">
  <div className="flex justify-center lg:w-1/2 lg-justify-end lg:pr-12">
    <FadeIn className="w-[33.75rem] flex-none lg-w-[45rem]">
      <StylizedImage src={pic}
      sizes="(min-width: 1024px) 41rem, 31rem"
      className="justify-center lg:justify-end"
      />
    </FadeIn>
    </div>
</div>
      </Container>
    </>
  )
}

export default Services