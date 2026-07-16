export default function TermsAndConditions({data}:any) {
  return (
    <section className=" w-[95%] sm:w-[93%] py-4 md:w-[91.666667%] mx-auto flex flex-col gap-6 sm:gap-8 md:gap-10 print:w-full print:gap-4
        focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 " tabIndex={0}
    >
      {/* Header */}
      <div className="flex flex-col">
        <h1 className=" text-center py-4 text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-gray-700" >
          Terms &amp; Conditions - {data.companyName}
        </h1>

        <p className=" mt-3sm:mt-4 text-[13px] xs:text-sm sm:text-base text-gray-700 leading-7 print:text-black">
          {data.intro}
        </p>
      </div>

      {/* Sections */}
      {data.sections.map((section:any, index:any) => (
        <div key={index} className="flex flex-col gap-2 sm:gap-3" >
          <h2 className=" text-base xs:text-lg sm:text-xl md:text-2xl font-semibold leading-snug text-gray-700"
          >
            {section.heading}
          </h2>

          <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-1.5 sm:gap-2 text-gray-700">
            {section.points.map((point:any, i:any) => (
              <li key={i} className=" text-[13px] xs:text-sm sm:text-baseleading-6 sm:leading-7" >
                {point}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}