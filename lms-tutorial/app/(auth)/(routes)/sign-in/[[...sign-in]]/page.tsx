import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex">
      <Image 
        alt="Login Image"
        src='/login.jpg'
        width={1024}
        height={720}
        className="w-[300px] rounded-xl max-md:hidden"
      />
      <SignIn />;
    </div>
  )
  
}
