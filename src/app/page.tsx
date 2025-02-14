import Themetoggle from "@/components/shared/theme-toggle";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <div className="p-5">
      <div className="w-100 flex gap-4 justify-end">
        <UserButton/>
<Themetoggle/>
      </div>
     <h1 className="font-geist text-2xl">Hello there if uts working</h1>
     <h1 className="font-barlow text-2xl">Hello there if uts working</h1>
    </div>
  );
}
