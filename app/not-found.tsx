import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

 
export default function NotFound() {
  return (
    <main className="flex  flex-col items-center justify-center gap-2 h-screen ">
      <h1 className='text-gray-600 text-8xl f'>404</h1>
      <h2 className="text-xl font-semibold">Oops page not found</h2>
      <p className="text-gray-500 max-w-[40ch] text-center">We regret to inform you that the Pavyon you're searching for seems to be beyond our grasp. We apologize for any inconvenience this may cause.</p>
      <Link href="/" className=" group flex mx-auto mt-14 items-center justify-center bg-gray-600 text-black rounded-full px-8 py-5 text-lg transition-transform duration-300">
          <ArrowLeftIcon className="h-5 w-5 mr-2 transform -rotate-45 transition-transform duration-300 group-hover:rotate-0" />
            Go back
        </Link>
    </main>
  );
}
