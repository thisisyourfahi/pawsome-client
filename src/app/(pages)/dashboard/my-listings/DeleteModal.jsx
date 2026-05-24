'use client'
import { deleteAPet } from "@/api/petServices";
import { TrashBin } from "@gravity-ui/icons";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const DeleteModal = ({pet}) => {
    const { _id, petName } = pet
    const router = useRouter();

    const handleDelete = async () => {
        const response = await deleteAPet(_id);
        if (response.ok) {
            toast.success(`${petName} has been deleted successfully!`);
            router.refresh('/dashboard/my-listings')
        }
    }
    return (
        <AlertDialog>
            <Button
                variant='outline'
                size='sm'
                className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
            > <TrashBin />
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-100 rounded-sm">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Heading>Delete <strong>{petName}</strong> permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>{petName}</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button className={'rounded-sm'} slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} className={'rounded-sm'} slot="close" variant="danger">
                                Delete Pet
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteModal;