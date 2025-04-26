'use client'
import React from 'react'
import { card } from '@/data/card'
import { PhotoParams } from '@/app/photos/[id]/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'


function PhotosModal({params}: {params: PhotoParams}) {
    const router = useRouter()
    const cardObject = card.find(item => item.id === +params.id)!

    return (
        <div className='flex justify-center items-center fixed inset-0 bg-gray-600/30' onClick={router.back}>
            <Image src={cardObject.src} alt={cardObject.alt} width={200} height={200} onClick={(e) => e.stopPropagation()}/>
        </div>
    )
}

export default PhotosModal