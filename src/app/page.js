import { getAllPets } from "@/api/petServices";
import Banner from "@/components/hompage/Banner";
import FeaturedPets from "@/components/hompage/FeaturedPets";
import PetCarTips from "@/components/hompage/PetCarTips";
import WhyAdopt from "@/components/hompage/WhyAdopt";
import Image from "next/image";

export default async function Home() {
  const allPets = await getAllPets();
  const pets = allPets.slice(0, 6);
  return (
    <div className="space-y-10">
      <Banner />
      <FeaturedPets pets={pets}/>
      <WhyAdopt />
      <PetCarTips />
    </div>
  );
}
