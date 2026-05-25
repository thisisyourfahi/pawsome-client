'use client'
import { deleteAnAdoption, rejectAdoptionRequest } from "@/api/adoptionServices";
import { Ban, TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const RejectRequestModal = ({pet, adoptionId}) => {
    const { petName } = pet;
    const router = useRouter();

    const handleReject = async (e) => {
        const response = await rejectAdoptionRequest(adoptionId);
        if (response.ok) {
            toast.success('Adoption request has been rejected.');
            router.refresh();
        } else {
            toast.error('Something went wrong. Please refresh and try again.');
            router.refresh();
        }
    }

    return (
        <AlertDialog>
            <Button
                variant='outline'
                size='sm'
                className='rounded-sm bg-white'
            > <Ban />
                Reject
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 rounded-sm">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Heading>Reject <strong>Adoption Request</strong>?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                Reject adoption request for <strong>{petName}</strong>. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className={'rounded-sm'} slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleReject} className={'rounded-sm'} slot="close" variant="danger">
                                Reject
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default RejectRequestModal;