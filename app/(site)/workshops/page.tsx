export default function WorkshopPage() {
  return (
    <div className="px-4 py-8">
      <h2 className="mb-8 text-3xl text-center font-display">
        Work Different With AI Workshops
      </h2>
      <div className="flex flex-col mb-8 md:flex-row">
        <div className="w-full px-4 md:w-1/2">
          <img
            src="/path-to-your-image1.jpg"
            alt="Illustration 1"
            className="mb-4 md:mb-0"
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2">
            Welcome to our exclusive Workshops page, designed to demystify the
            AI journey for diverse audiences. Our workshops cater to C-suite
            executives, Salesforce ISVs, and Global System Integrators (GSIs),
            offering pragmatic strategies and actionable roadmaps to ethically
            harness AI.
          </p>
        </div>
      </div>
      <div className="flex flex-col mb-8 md:flex-row-reverse">
        <div className="w-full px-4 md:w-1/2">
          <img
            src="/path-to-your-image2.jpg"
            alt="Illustration 2"
            className="mb-4 md:mb-0"
          />
        </div>
        <div className="w-full px-4 md:w-1/2">
          <p className="mb-2">
            Our workshops provide a clear framework for AI integration. They
            empower executives to navigate AI hype, offer Salesforce ISVs
            insights into the AI landscape, and equip GSIs with innovative tools
            to guide their clients on the AI journey. Explore our workshops and
            learn how to Work Different With AI.
          </p>
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="px-4 py-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-display">
            Rapid Solutions for C-Suite AI Adoption
          </h3>
          <p className="mb-4">Target Audience: Corporate Executives</p>
          <p className="mb-4">
            Key Takeaways: Incremental AI adoption, managing AI risks, tailored
            AI adoption roadmap.
          </p>
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
        <div className="px-4 py-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-display">
            Strategies for Salesforce ISVs
          </h3>
          <p className="mb-4">Target Audience: Salesforce ISVs</p>
          <p className="mb-4">
            Key Takeaways: Navigating AI in Salesforce ecosystem, ethical AI
            integration, launching AI apps on AppExchange.
          </p>
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
        <div className="px-4 py-6 bg-white rounded-lg shadow-lg">
          <h3 className="mb-4 text-xl font-display">
            Advisory Workshop for GSIs
          </h3>
          <p className="mb-4">Target Audience: Global System Integrators</p>
          <p className="mb-4">
            Key Takeaways: AI analysis modeling, governance models, AI pilot
            planning, upselling AI consulting services.
          </p>
          <button className="px-4 py-2 text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}