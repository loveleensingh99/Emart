export const Heading = ({ text }) => {
  return (
    <h3 className="mb-8 text-2xl  font-bold leading-none tracking-tighter text-neutral-600 md:text-4xl lg:text-3xl   text-center">
      {text || "Type Heading Here"}
    </h3>
  );
};
