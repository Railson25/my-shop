import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex">
      <SignUp />
      <Image 
        alt="Login Image"
        src='/login.jpg'
        width={1024}
        height={720}
        className="w-[300px] rounded-xl max-md:hidden"
      />

    </div>
  )
  
}
