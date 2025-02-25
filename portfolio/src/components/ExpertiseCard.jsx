export const ExpertiseCard = ({ title, description, image }) => {
  return (
    <>
      <div className="bg-red-900 flex flex-col items-center justify-center text-center px-12 py-14 sm:px-16 sm:py-6 md:px-22 md:py-8 rounded-3xl text-white hover:scale-102 duration-600 shadow-[12px_12px_0px_0px_rgba(0,0,0,0.3)]">
        <img
          src={image}
          alt=""
          className="h-16 sm:h-20 md:h-24 mb-2 rounded-full object-fit bg-white"
        />
        <p className="text-2xl font-semibold mb-4">{title}</p>
        <p className="text-lg">{description}</p>
      </div>
    </>
  );
};
