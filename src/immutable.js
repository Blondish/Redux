import { produce } from "immer";

const book = {
  title: "Harry Potter"
};

function publish(book) {
  return produce(book, draftBook => {
    draftBook.isPublished = true;
    draftBook.author = "ana May";
  });
}

const newBook = publish(book);
console.log(newBook);
console.log(book);
