function LandingPageSection({ heading, description, linkText, image }) {
  let layoutClass = linkText ? "" : "flex-row-reverse";
  let addBgColorClass = linkText ? "bg-pink-shade-1" : "bg-secondary";
  return (
    <section
      className={`p-5 flex flex-col-reverse justify-center items-center sm:flex sm:flex-row sm:justify-around sm:items-center sm:${layoutClass} ${addBgColorClass}`}
    >
      <section className="m-2.5 sm:w-1/3 flex flex-col gap-5 sm:items-start items-center">
        <h1 className="text-22px sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          {heading}
        </h1>
        <p className="text-gray-shade-1 text-lg md:text-xl lg:text-2xl">
          {description}
        </p>
        {linkText ? (
          <a
            href="/"
            className="p-3 text-sm md:text-md text-secondary bg-black-shade-1 rounded-3xl font-bold hover:bg-black-shade-2 active:bg-black-shade-3 flex justify-center items-center sm:w-fit w-40"
          >
            <span>{linkText}</span>
          </a>
        ) : null}
      </section>
      <img className="m-5 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/3" src={image} />
    </section>
  );
}
export default LandingPageSection;
