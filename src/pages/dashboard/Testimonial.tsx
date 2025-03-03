export default function Testimonial(): JSX.Element {
  return (
    <section className="lg:h-[287px] bg-white rounded-3xl overflow-hidden shadow font-inter flex lg:flex-row flex-col">
      <div
        style={{
          background: `url('https://images.unsplash.com/photo-1565884280295-98eb83e41c65?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
        }}
        className="lg:w-[35%] lg:h-full h-[176px]"
      ></div>
      <div className="text-primary_black py-9 px-8 grid place-items-center flex-1">
        <div className="lg:w-[571px] grid lg:block gap-5">
          <p className="lg:text-[35px] text-[25px] lg:leading-[42px] leading-[30px] font-bold">
            “How I Ranked from Beginner to Alpha in 3 months”
          </p>
          <p>
            Learn how professional photographer, Alex Uzor, made success and
            ranked from beginner to alpha in just 3 months.
          </p>
          <div className="flex justify-end">
            <button className="text-accent outline-none italic text-xl font-semibold leading-6">
              ...read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
