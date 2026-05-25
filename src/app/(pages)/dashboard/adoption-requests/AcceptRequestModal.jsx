'use client'
import { acceptAdoptionRequest, deleteAnAdoption } from "@/api/adoptionServices";
import { Check } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AcceptRequestModal = ({pet, adoptionId}) => {
    const { petName } = pet;
    const router = useRouter();

    const handleAccept = async (e) => {
        const response = await acceptAdoptionRequest(adoptionId);
        if (response.ok) {
            toast.success('Adoption request has been accepted.');
            router.refresh()
        } else {
            toast.error('Something went wrong. Please refresh and try again.')
            router.refresh()
        }
    }

    return (
        <AlertDialog>
            <Button
                variant='outline'
                size='sm'
                className='rounded-sm bg-white'
            > <Check />
                Accept
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 rounded-sm">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Heading>Accept Adoption Request <strong>{petName}</strong>?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Footer>
                            <Button className={'rounded-sm'} slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleAccept} className={'rounded-sm'} slot="close" variant="primary">
                                Accept
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default AcceptRequestModal;