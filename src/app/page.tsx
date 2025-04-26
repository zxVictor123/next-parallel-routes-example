import Card from "@/components/Card/Card";

import daisy from '../../public/daisy.png'
import deeeee from '../../public/deeeee.png'
import hed from '../../public/hed.png'
import pris from '../../public/pris.png'
import tail from '../../public/tail.png'
import vercel from '../../public/vercel.png'
import ant from '../../public/ant.png'
import magic from '../../public/magic.png'

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
        <div className="flex gap-4">
            <Card src={daisy} alt="daisy" width={50} height={50} title= "daisy UI" content="daisy UI" buttonContent="Learn" />
            <Card src={deeeee} alt="deeeee" width={50} height={50} title= "deepseek" content="deepseek" buttonContent="Learn" />
            <Card src={hed} alt="hed" width={40} height={40} title= "headless UI" content="headless UI" buttonContent="Learn" />
            <Card src={pris} alt="pris" width={35} height={35} title= "prisma" content="prisma" buttonContent="Learn" />
        </div>
        <div className="flex gap-4">
            <Card src={tail} alt="tail" width={50} height={50} title= "tailwind CSS" content="tailwind CSS" buttonContent="Learn" />
            <Card src={vercel} alt="vercel" width={50} height={50} title= "vercel" content="vercel" buttonContent="Learn" />
            <Card src={ant} alt="ant" width={50} height={50} title= "typescript" content="typescript" buttonContent="Learn"/>
            <Card src={magic} alt="magic" width={45} height={45} title= "magic" content="magic" buttonContent="Learn" />
        </div>
    </div>
  );
}
