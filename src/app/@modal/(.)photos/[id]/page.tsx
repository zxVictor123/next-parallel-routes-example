'use client'
import React, { useEffect, useState } from 'react'
import { card } from '@/data/card'
import { PhotoParams } from '@/app/photos/[id]/type'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

/**
 * 照片模态框组件
 * @param {Object} props - 组件属性
 * @param {Promise<PhotoParams>} props.params - 路由参数
 * @returns {JSX.Element} 照片模态框组件
 */
function PhotosModal({params}: {params: Promise<PhotoParams>}) {
    const router = useRouter()
    const [cardObject, setCardObject] = useState<typeof card[0] | null>(null)
    
    useEffect(() => {
        params.then(resolvedParams => {
            const found = card.find(item => item.id === parseInt(resolvedParams.id))!
            setCardObject(found)
        })
    }, [params])
    
    if (!cardObject) return null

    return (
        <div className='flex justify-center items-center fixed inset-0 bg-gray-600/30' onClick={router.back}>
            <Image src={cardObject.src} alt={cardObject.alt} width={200} height={200} onClick={(e) => e.stopPropagation()}/>
        </div>
    )
}

export default PhotosModal