const CardCircle = ({ color }) => {
  return (
    <span
      className={`border border-full border-${color} inline-blobk relative  w-10 h-10 mr-4  rounded-full bg-light-theme shadow-light-theme dark:bg-dark-theme dark:shadow-dark-theme`}
    >
      <span
        className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 inline-block w-8 h-8 rounded-full bg-${color}`}
      ></span>
    </span>
  );
};

export default CardCircle;
