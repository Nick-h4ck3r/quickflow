import Link from "next/link";

const WorkTogether = () => {
  return (
    <div className="pt-2">
      <div className="px-2 sm:px-0">
        <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gray-900 p-5 py-10 dark:bg-blue-950 sm:p-10 sm:py-14 md:py-16">
          <div className="relative flex flex-col items-center text-center">
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl md:text-5xl xl:text-6xl">
              {" "}
              Let's works on something togheter.{" "}
            </h1>
            <p className="mt-10 max-w-xl text-base text-gray-300">
              Ready to take your projects to the next level? Let's collaborate
              and turn your vision into reality. Whether you need custom
              features, integrations, or consultations, I'm here to help.
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                href="https://nikhilkadam.vercel.app"
                className="font-display flex h-12 items-center gap-x-3 rounded-full bg-white px-8 text-gray-900 hover:bg-gray-100/90"
              >
                Explore my portfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkTogether;
