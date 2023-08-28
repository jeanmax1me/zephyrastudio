import Clients from "./components/Clients"
import Container from "./components/Container"
import FadeIn from "./components/FadeIn"


function page() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
          Elevate Your Online Presence
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
          Dream it, design it, deliver it. Zephyra Studio is your gateway to turning digital aspirations into reality. With a fusion of creativity and expertise, we sculpt websites that resonate with your vision and leave an indelible mark on the online landscape.
          </p>
        </FadeIn>
      </Container>
      <Clients />
    </main>
  )}

export default page