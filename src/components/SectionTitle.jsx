const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center md:w-5/12 my-8">
      <p className="text-slate-700 mb-2">---{subHeading}---</p>
      <h3 className="text-4xl uppercase border-y-4 py-4 font-serif">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
