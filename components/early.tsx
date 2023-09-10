import Image from "next/image";
import IconLeader from "@/public/images/icon-leader.png";
import IconPixie from "@/public/images/icon-pixie.png";
import IconRaceahead from "@/public/images/icon-raceahead.png";

export default function Early() {
  return (
    <div className="py-10">
      {/* Section Title */}
      <div className="text-center">
        <h1 className="mx-3 text-3xl font-semibold">For the Early Adopters</h1>
        <hr className="w-1/4 mx-auto my-4 border-t-2" />
      </div>

      {/* Content Cards */}
      <div className="container grid grid-cols-1 gap-8 mx-auto md:grid-cols-3">
        {/* Card 1: Be Part of the Vanguard */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconLeader}
              alt="Be Part of the Vanguard"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">
            Be Part of the Vanguard
          </h2>
          <p>
            Join a community of forward-thinkers who recognize the
            transformative power of AI. Be part of the vanguard that sets the
            trend rather than following it.
          </p>
        </div>

        {/* Card 2: First Mover Benefits */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image
              src={IconRaceahead}
              alt="First Mover Benefits"
              height={200}
            />
          </div>
          <h2 className="mb-4 text-xl font-semibold">First Mover Benefits</h2>
          <p>
            Being an early adopter comes with its own set of advantages. From
            exclusive access to new features to dedicated support, experience
            the benefits of being a first mover in the AI space.
          </p>
        </div>

        {/* Card 3: Influence the Future */}
        <div className="p-6 rounded-lg shadow-md bg-slate-600">
          <div className="flex justify-center mb-4">
            <Image src={IconPixie} alt="First Mover Benefits" height={200} />
          </div>
          <h2 className="mb-4 text-xl font-semibold">Influence the Future</h2>
          <p>
            Your feedback and insights can directly influence the next wave of
            AI innovations. Contribute to shaping a future where AI is both
            effective and ethical.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="mt-10 text-center">
        <button className="px-8 py-2 text-white bg-bourbon-500 rounded-lg hover:bg-bourbon-600">
          Join the Early Adopters Club
        </button>
      </div>
    </div>
  );
}