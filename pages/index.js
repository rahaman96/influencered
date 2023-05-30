import BrandsHeader from "@/components/BrandsnBees/BrandsHeader";
import BrandsMain from "@/components/BrandsnBees/BrandsMain";
import Header from "@/components/Header/Header";
import { HeaderPage } from "@/components/Header/HeaderPage";
import About from "@/components/Home/About";
import Footer from "@/components/Home/Footer";
import Helping from "@/components/Home/Helping";
import HeroSection from "@/components/Home/HeroSection";
import Influencer from "@/components/Home/Influencer";
import ServiceSection from "@/components/Home/ServiceSection";

export default function Home() {
  return (
    <>
      <div>

      
        {/* Ecommerce start */}

        {/* <HeaderPage />
        <HeroSection />
        <Helping />
        <ServiceSection />
        <Influencer /> */}

        {/* Ecommerce start */}




        {/* BrandsnBees start */}
        <div>
          <BrandsHeader />
          <Helping />
          <BrandsMain />
        </div>
        {/* BrandsnBees End */}

        {/* <About /> */}
        <Footer />
      </div>
    </>
  );
}
