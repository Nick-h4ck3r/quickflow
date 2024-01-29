import React from "react";

type Props = {};

const FAQs = (props: Props) => {
  const questionAnswers = [
    {
      question: "Is Quickflow an open-source application?",
      answer:
        "Yes, Quickflow is an open-source note-taking app. You can explore, contribute, and customize the code on our GitHub repository. Visit our GitHub to get involved and stay updated with the latest developments.",
    },
    {
      question: "What makes Quickflow different from other note-taking apps?",
      answer:
        "Quickflow stands out with its real-time collaboration, intuitive Notion-style editor, and versatile features like infinite document hierarchy and file management. It's designed for seamless, efficient, and personalized note-taking.",
    },
    {
      question: "Can I use Quickflow on my mobile device?",
      answer:
        "Absolutely! Quickflow is fully responsive, ensuring a smooth experience on your mobile device. Work on the go without compromising productivity.",
    },
    {
      question: "How secure is Quickflow for storing sensitive information?",
      answer:
        "Quickflow prioritizes security with robust authentication features, ensuring your data is safe. Feel confident in using Quickflow for both personal and professional note-taking needs.",
    },
  ];

  return (
    <section className="w-full max-w-5xl scroll-mt-24 md:py-20" id="faq">
      <div className="mx-6 grid grid-cols-1 gap-12 lg:grid-cols-3">
        <div className="text-start">
          <p className="text-4xl font-semibold tracking-tighter text-gray-900 dark:text-white lg:text-6xl">
            FAQ
          </p>
          <p className="mx-auto mt-4 max-w-xs text-sm text-gray-500 dark:text-gray-400">
            Frequent questions & answers
          </p>
        </div>

        <div className="flex flex-col gap-6 text-start text-base text-gray-400 lg:col-span-2">
          {questionAnswers.map((item, index) => (
            <details key={index}>
              <summary className="text-base font-medium tracking-tight text-gray-900 dark:text-white">
                {item.question}
              </summary>
              <p className="pt-4 text-sm text-gray-500 dark:text-gray-400">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
