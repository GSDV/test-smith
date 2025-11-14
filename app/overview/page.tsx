import Button from "@components/Button";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            <div className="flex space-x-32 mb-8">
                <Image src="/foxes.svg" alt="Fox" width={200} height={200} />
                <Image src="/colours.svg" alt="Fox" width={160} height={160} />
                <div className="mb-5">
                    <Image src="/krattz.svg" alt="Fox" width={170} height={170} />
                </div>
            </div>
            <div className="bg-gray-200 rounded-lg p-6 mb-16 w-[80%]">
                <p className="text-lg">
                    You’ve shown great mastery in your knowledge of Foxes! You got most questions involving foxes correct. You made several mistakes dealing with colours, though. Review Lecture 3 to learn more about the different kinds of colours! You also need to study more about Wild Krattz, as there were lots of questions on that topic you’d missed. Review lectures 4-5 to learn more about the topic. 
                </p>
            </div>
            <div className="flex space-x-56">
                <Link href="/test"><Button>Do another</Button></Link>
                <Link href="/config"><Button>Change Settings</Button></Link>
            </div>
        </div>
    );
};
export default Page;