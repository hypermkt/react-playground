import React from "react";
import ReactDom from "react-dom";
import "./index.css";

import { books } from "./books";
import Book from "./Book";

function BookList() {
  return (
    <>
      <div className="booklist">
        {books.map((book) => {
          return <Book key={book.id} {...book} />;
        })}
      </div>
    </>
  );
}

ReactDom.render(<BookList />, document.getElementById("root"));
