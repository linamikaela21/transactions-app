import { Link } from "@nextui-org/react";
import Image from "next/image";
import NextLink from "next/link";

export const NotfoundPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full justify-center font-mono flex flex-col">
        <div className="flex justify-center" >
          <Image alt="Not Found" height={800} src="/notFound.jpg" width={800} />
        </div>
        <NextLink className="flex justify-center" href="/">
          <Link className="text-3xl pt-6 cursor-pointer" color="secondary">
            Go back to home
          </Link>
        </NextLink>
      </div>
    </main>
  );
};

export default NotfoundPage;
