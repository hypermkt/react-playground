import React from "react";

// 名前が大切: children
const Book = ({ img, title, author }) => {
  // const { img, title, author } = props;
  // console.log(props);
  // const Book = ({ img, title, author, children }) => {
  // const { img, title, author } = props;
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    console.log("Hello World");
  };
  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <>
      <article
        className="book"
        onMouseOver={() => {
          console.log(author);
        }}
      >
        <img src={img} alt="" />
        <h1
          onClick={() => {
            console.log(title);
          }}
        >
          {title}
        </h1>
        <h4>{author}</h4>
        <button type="button" onClick={clickHandler}>
          reference example
        </button>
        <button type="button" onClick={() => complexExample(author)}>
          more complex example
        </button>
      </article>
    </>
  );
};

export default Book;
