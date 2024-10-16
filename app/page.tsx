import { About, FAQ, Landing, Workflow, Services, Testimonials, CalltoAction, WhyWebcodge } from "@/Components/export";



export default function Home() {
  return (
    <main className="lg:mt-48 mt-40 ">
      <Landing/>
      <Services/>
      <About/>
      <Workflow/>
      <Testimonials/>
      <WhyWebcodge/>
      <FAQ/>
      <CalltoAction/> 
    </main>
  );
}
