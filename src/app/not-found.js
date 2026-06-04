import { Button } from '@heroui/react'
import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='text-center space-y-2 mt-[20vh]'>
            <h2 className='text-3xl font-bold'>404! Page Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">
                <Button
                    variant='outline'
                    size='sm'
                    className='rounded-sm border-[#810B38] text-[#810B38] hover:bg-linear-to-r hover:from-[#ff0062] hover:to-[#A8124A] hover:text-white transition-all duration-200'
                > 
                    Return Home
                </Button>
            </Link>
        </div>
    )
}