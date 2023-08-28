import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";


function Clients() {
    return (
        <div className="mt-24 rounded-[2rem] bg-yolo py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <Container>
                <FadeIn classname="flex items-center gap-x-8">
                    <h2 className="text-center font-display text-lg font-semibold tracking-widest text-white sm:text-left">Your Project, Our Priority.</h2>
                    <div className="h-px flex-auto bg-neutral-200" />
                </FadeIn>
            </Container>
        </div>
    )
}

export default Clients;