import Link from "next/link";
import { Medal } from "lucide-react";
import { Button } from "@/components/ui/button";

const MarktingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center px-2">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-x-2 uppercase rounded-full shadow-sm border p-4 bg-amber-100 text-amber-600">
          <Medal className="size-6" />
          <p>No 1 task managment</p>
        </div>
        <h1 className="text-center text-3xl md:text-6xl text-neutral-800 my-5">
          <strong>Taskify helps team move</strong>
        </h1>
        <div className="w-fit px-4 py-2 rounded-md bg-gradient-to-r from-fuchsia-500 to-pink-500">
          <h2 className="text-3xl md:text-6xl text-white">
            <strong>Work forward.</strong>
          </h2>
        </div>
      </div>
      <div className="max-w-xs md:max-w-2xl text-center mx-auto mt-5">
        <p className="md:text-xl text-neutral-500">
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is unique -
          accomplish it all with Taskify.
        </p>
      </div>
      <Button asChild className="mt-5" size="lg">
        <Link href="/sign-up">Get Taskify for free</Link>
      </Button>
    </div>
  );
};

export default MarktingPage;
