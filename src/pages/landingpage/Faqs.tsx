import { useState } from "react";
import { IoChevronDownSharp } from "react-icons/io5";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

export default function Faqs(): JSX.Element {
  const [selected, setSelected] = useState<number | null>(null);

  function toggle(i: number): void {
    setSelected(selected === i ? null : i);
  }

  const faqs: FaqItem[] = [
    {
      id: 0,
      question: "What are image categories?",
      answer:
        "Yes, we offer both delivery and takeout options. You can place your order through [insert platform] or by calling us directly.",
    },
    {
      id: 1,
      question: "What are royalty images?",
      answer:
        "Absolutely, we offer catering services for events of all sizes. Please contact us for more information and custom menu options.",
    },
    {
      id: 2,
      question: "What are image categories?",
      answer:
        "We accept cash, credit/debit cards, and mobile payment methods such as Apple Pay and Google Pay.",
    },
    {
      id: 3,
      question: "What are image categories?",
      answer:
        "Yes, we accept reservations for dining in. You can make a reservation online through our website or by calling us directly.",
    },
  ];

  return (
    <section className="lg:px-[70px] lg:py-28 px-5 py-20 text-primary_black font-open_sauce">
      <div className="lg:w-[774px] m-auto">
        <p className="text-[35px] leading-[36px] font-semibold text-center mb-10">
          Frequently asked questions
        </p>
        <div>
          {faqs.map((item) => (
            <div key={item.id}>
              <div
                className="flex justify-between items-center cursor-pointer border-b-2 border-[#181818] py-5"
                onClick={() => toggle(item.id)}
              >
                <div className="flex items-center gap-4">
                  <h3 className="leading-[36px] text-[#4B4B4B]">{item.question}</h3>
                </div>
                <div className="relative border-accent p-1">
                  <IoChevronDownSharp
                    className={`${
                      selected === item.id ? "rotate-180" : "rotate-0"
                    } absolute top-[50%] -translate-y-[50%] transition-all duration-200 ease-linear text-black`}
                  />
                </div>
              </div>
              <div
                className={
                  selected === item.id
                    ? `h-auto max-h-[999px] duration-300 py-5`
                    : `max-h-0 overflow-hidden duration-300`
                }
              >
                <p className="font-normal text-sm">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
