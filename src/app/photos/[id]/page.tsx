'use client'
import React from "react";
import { PhotoParams } from "./type";
import { card } from "@/data/card";
import Image from "next/image";

/**
 * 照片详情页面组件
 * @param {Object} props - 组件属性
 * @param {Promise<PhotoParams>} props.params - 路由参数
 * @returns {JSX.Element} 照片详情页面组件
 */
async function Photos({ params }: { params: Promise<PhotoParams> }) {
  const resolvedParams = await params;
  const cardObject = card.find((item) => item.id === parseInt(resolvedParams.id))!;
  
  return (
    <div className="container mx-auto px-6">
      <div>
        <Image
          src={cardObject.src}
          alt={cardObject.alt}
          width={200}
          height={200}
          className="mx-auto"
        />
        <div className="bg-gray-200 border-black border-dashed rounded-xl border-2 p-2 mt-16">
            <p><strong>title</strong>: {cardObject.alt}</p>
            <p>
                In shadows deep, where silence dwells, A spark of thought in quiet
                swells. Through winding paths of joy and pain, Each step a loss,
                each loss a gain. The river flows, yet stays the same, Its fleeting
                waves elude our claim. Embrace the now, let fear take flight, For
                truth burns brightest in the night. No map can chart the soul`s
                terrain, Yet seeking shapes what shall remain. In every end, a seed
                is sown, From fleeting dust, eternity`s grown. So walk with wonder,
                heart unbound, In life`s vast weave, all truths are found.
            </p>
        </div>
      </div>
    </div>
  );
}

export default Photos;
