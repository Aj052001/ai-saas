import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Landing() {
  return (
    <>
     <div>Landing (unprotedted)

     <div>
      <Link href={"/sign-in"}>
      
      <Button>Sign-In</Button>
      </Link>
      <Link href={"/sign-up"}>
      
      <Button>Registers</Button>
      </Link>
      </div>
     </div>
      
    </>
    
  )
}
  