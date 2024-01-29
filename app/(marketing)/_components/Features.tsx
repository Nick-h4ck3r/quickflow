"use client";

const Features = () => {
  const features = [
    {
      name: "Real-time Database",
      description:
        "Experience seamless collaboration with real-time updates. Your data, always in sync, ensuring you're on the same page with your team.",
    },
    {
      name: "Notion-Style Editor",
      description:
        "Enjoy a familiar editing experience, but with the power of Quickflow. Streamlined, efficient, and designed for ultimate productivity.",
    },
    {
      name: "Light and Dark Mode",
      description:
        "Personalize your workspace with a choice of light or dark mode. Quickflow adapts to your preferences, making work easy on your eyes.",
    },
    {
      name: "Infinite Documents",
      description:
        "Organize your thoughts limitlessly. Quickflow allows you to create an endless hierarchy of documents, ensuring your ideas flow freely.",
    },
    {
      name: "Recover & Soft Delete",
      description:
        "Mistakes happen. Quickflow lets you recover deleted content, offering a safety net for your valuable information.",
    },
    {
      name: "Privacy Focused",
      description:
        "Keep your data secure. Quickflow prioritizes your privacy with robust authentication features.",
    },
    {
      name: "Seamless Files Management",
      description:
        "Effortlessly manage your files with Quickflow. Upload, delete, and replace documents seamlessly within the platform.",
    },
    {
      name: "Full Mobile Responsiveness",
      description:
        "Work on the go. Quickflow is fully responsive, adapting to your device, so you can be productive anytime, anywhere.",
    },
    {
      name: "Publish Your Note to the Web",
      description:
        "Share your ideas effortlessly. Quickflow allows you to publish your notes to the web, reaching a broader audience.",
    },
  ];

  return (
    <section
      aria-labelledby="feature-five"
      id="feature-five"
      className="scrollbar-none overflow-y-auto dark:text-white lg:h-screen py-24"
    >
      <div className="mx-auto max-w-7xl px-8 md:px-12 lg:flex lg:px-16 xl:px-36">
        <div className="lg:w-1/2">
          <div className="top-0 pb-16 pt-8 lg:sticky">
            <div>
              <div className="md:pr-12 lg:pr-24">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-black dark:text-white sm:text-4xl">
                  Why choose Quickflow over 100's of other note taking apps?
                  </p>
                  <p className="mt-4 max-w-xl text-lg tracking-tight text-gray-600 dark:text-gray-400">
                  the unique qualities that make Quickflow stand out among the sea of note-taking apps.
                  </p>
                </div>

                <div className="mt-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:justify-start">
                  <a
                    href="#_"
                    className="inline-flex w-full items-center justify-center rounded-full border-2 border-black bg-black px-6 py-2.5 text-center text-sm font-medium text-white duration-200 hover:border-black hover:bg-transparent hover:text-black focus:outline-none focus-visible:outline-black focus-visible:ring-black dark:border-white dark:bg-white dark:text-black dark:hover:border-white/70 dark:hover:bg-transparent dark:hover:text-white dark:focus-visible:outline-white dark:focus-visible:ring-white lg:w-auto"
                  >
                    Get Quickflow Free
                  </a>
                  <a
                    href="https://github.com/Nick-h4ck3r/quickflow"
                    className="inline-flex items-center justify-center text-sm font-medium text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600 dark:text-gray-400 dark:hover:text-blue-500"
                  >
                    Learn more &nbsp; →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2">
          <div className="flex-shrink-0">
            <div>
              <ul
                className="mt-6 grid list-none grid-cols-1 gap-6 lg:mt-0 lg:gap-8"
                role="list"
              >
                {features.map((feature, index) => (
                  <li
                    key={index}
                    className="cursor-default rounded-lg border p-4 backdrop-blur-sm duration-200 hover:border-black/20 dark:hover:border-white/10"
                  >
                    <div>
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-black dark:bg-black dark:text-white">
                        ❖
                      </div>
                      <p className="mt-3 text-lg font-medium leading-6 text-black dark:text-white">
                        {feature.name}
                      </p>
                    </div>
                    <div className="mt-2 text-base text-gray-500 dark:text-gray-400">
                      {feature.description}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
