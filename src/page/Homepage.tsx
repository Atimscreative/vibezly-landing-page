import About from "@/components/home-components/About";
// import Hero from "@/components/home-components/Hero";
// import Partnership from "@/components/home-components/Partnership";
// import Roadmap from "@/components/home-components/Roadmap";
// import Socials from "@/components/home-components/Socials";
// import Team from "@/components/home-components/Team";
// import Tokenomics from "@/components/home-components/Tokenomics";
// import Utilities from "@/components/home-components/Utilities";

export default function Homepage() {
  return (
    <>
      {/* <Hero /> */}
      <About />
      {/* <Utilities /> */}
      {/* <Tokenomics /> */}
      {/* <Team /> */}
      {/* <Partnership /> */}
      {/* <Roadmap/> */}
      {/* <Socials /> */}
    </>
  );
}

/* 

<div class="parent">
        <div class="div3">3</div>
    <div class="div4">4</div>
    <div class="div5">5</div>
    <div class="div6">6</div>
</div>
    

.parent {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(6, 1fr);
    gap: 25px;
}
    
.div3 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
}

.div4 {
    grid-column: span 6 / span 6;
    grid-row: span 3 / span 3;
    grid-column-start: 1;
    grid-row-start: 4;
}

.div5 {
    grid-column: span 4 / span 4;
    grid-row: span 6 / span 6;
    grid-column-start: 7;
    grid-row-start: 1;
}

.div6 {
    grid-column: span 3 / span 3;
    grid-row: span 3 / span 3;
    grid-column-start: 4;
    grid-row-start: 1;
}
        
*/
