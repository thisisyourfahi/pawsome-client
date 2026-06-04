import { getAllPets } from "@/api/petServices";
import Banner from "@/components/hompage/Banner";
import FeaturedPets from "@/components/hompage/FeaturedPets";
import PetCareTips from "@/components/hompage/PetCareTips";
import WhyAdopt from "@/components/hompage/WhyAdopt";

export default async function Home() {
  const allPets = await getAllPets();
  const pets = allPets.slice(0, 6);
  return (
    <div className="space-y-10">
      <Banner />
      <FeaturedPets pets={pets}/>
      <WhyAdopt />
      <PetCareTips />
    </div>
  );
}
