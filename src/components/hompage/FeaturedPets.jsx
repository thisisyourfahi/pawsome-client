import PetCard from "../shared/PetCard";

const FeaturedPets = ({ pets }) => {
    return (
        <div className='p-4 max-w-4xl mx-auto space-y-4'>
            <p className="text-3xl font-bold">Featured Pets</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    pets.map(pet => <PetCard key={pet._id} pet={pet}></PetCard>)
                }
            </div>
        </div>
    );
};

export default FeaturedPets;

