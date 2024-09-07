function LandingPageSection({ heading, description, linkText, image }) {
  let layoutClass = linkText ? "" : "flex-row-reverse";
  let addBgColorClass = linkText ? "bg-pink-shade-1" : "bg-secondary";
  return (
    <section
      className={`p-5 flex justify-around items-center ${layoutClass} ${addBgColorClass}`}
    >
      <section className="m-2.5 w-1/3 flex flex-col gap-5 items-start">
        <h1 className="text-4xl font-bold">{heading}</h1>
        <p className="text-gray-shade-1 text-xl">{description}</p>
        {linkText ? (
          <a
            href="/"
            className="p-2.5 text-md text-secondary bg-black-shade-1 rounded-3xl font-bold hover:bg-black-shade-2 active:bg-black-shade-3 flex justify-center items-center"
          >
            <span>{linkText}</span>
          </a>
        ) : null}
      </section>
      <img className="m-5 w-1/3" src={image} />
    </section>
  );
}
export default LandingPageSection;
