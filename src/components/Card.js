function Card({ cardHeading, children }) {
  return (
    <div>
      <div className="h-96 shadow-xl m-5 bg-base-100 rounded-2xl rounded-tl-none overflow-clip pb-14">
        <div className="bg-primary w-full text-white rounded-tr-2xl rounded-bl-2xl">
          {cardHeading}
        </div>
        <div className="px-3 pt-5 pb-10 h-full overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
export default Card;
