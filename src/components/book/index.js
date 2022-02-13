function Book({ ObjectBook }) {
  return <img src={ObjectBook.icon_svg} alt={`book ${ObjectBook.color}`} />;
}

export default Book;
