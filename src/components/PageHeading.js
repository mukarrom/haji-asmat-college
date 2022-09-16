function PageHeading({ children }) {
  return (
    <div
      style={{
        background: 'url(http://kodeforest.net/html/uoe/images/inrbg.jpg)',
        backgroundSize: 'cover',
      }}
    >
      <div className="w-full py-10 bg-black bg-opacity-70 flex justify-evenly items-center text-white uppercase">
        {children}
      </div>
    </div>
  );
}

export default PageHeading;
