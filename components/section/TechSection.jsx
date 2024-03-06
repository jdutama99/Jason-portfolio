import Image from 'next/image';
import AWS from '@/public/assets/tech/AWS.svg';
import Git from '@/public/assets/tech/Git.svg';
import JavaScript from '@/public/assets/tech/JavaScript.svg';
import NextJs from '@/public/assets/tech/NextJs.svg';
import ReactJs from '@/public/assets/tech/ReactJs.svg';
import MongoDB from '@/public/assets/tech/MongoDB.svg';

export default function TechSection() {
  return (
    <div className='grid place-items-center grid-cols-3 md:grid-cols-6 items-center bg-[#041755] text-4xl px-20 lg:px-32  py-6 md:py-9 justify-between gap-6'>
      <div>
        <Image src={AWS} alt='hero-image' width={50} height={35} />
      </div>
      <div>
        <Image src={Git} alt='hero-image' width={70} height={35} />
      </div>
      <div>
        <Image src={JavaScript} alt='hero-image' width={100} height={35} />
      </div>
      <div>
        <Image src={NextJs} alt='hero-image' width={100} height={35} />
      </div>
      <div>
        <Image src={ReactJs} alt='hero-image' width={100} height={35} />
      </div>
      <div>
        <Image src={MongoDB} alt='hero-image' width={100} height={35} />
      </div>
    </div>
  );
}
