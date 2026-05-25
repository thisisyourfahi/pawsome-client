import { getAddoptionRequestOfYourListings } from "@/api/adoptionServices";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import AdoptionRequestCard from "./AdoptionRequestCard";
import NoAdoptionRequest from "./NoAdoptionRequest";

const AdoptionRequests = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const user = session?.user;

    const receivedAdoptionRequests = await getAddoptionRequestOfYourListings(user?.id);
    return (
        <div className='bg-gray-200 p-4 min-h-screen rounded-sm'>
            {
                receivedAdoptionRequests.length > 0 ? <div className="space-y-4">
                    {
                        receivedAdoptionRequests.map(r => <AdoptionRequestCard key={r._id} adoptionInfo={r}/>)
                    }
                </div> : <>
                    <NoAdoptionRequest />
                </>
            }
        </div>
    );
};

export default AdoptionRequests;