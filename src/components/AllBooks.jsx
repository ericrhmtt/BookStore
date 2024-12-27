// eslint-disable-next-line no-unused-vars
import React from "react";
import Book1 from "../assets/books/book7.jpg";
import Book2 from "../assets/books/book6.jpg";
import Book3 from "../assets/books/book4.jpg";
import Book4 from "../assets/Books/book5.jpg";
import Book5 from "../assets/Books/book1.jpg";
import { FaStar } from "react-icons/fa6";

const booksData = [
  {
    id: 1,
    img: Book1,
    title: "HELLO",
    rating: 5.0,
    author: "Tereliya",
  },
  {
    id: 2,
    img: Book2,
    title: "HUJAN",
    rating: 4.5,
    author: "Tereliye",
  },
  {
    id: 3,
    img: Book3,
    title: "BUMI",
    rating: 4.7,
    author: "Tereliye",
  },
  {
    id: 4,
    img: Book4,
    title: "LUMPU",
    rating: 4.4,
    author: "Tereliye",
  },
  {
    id: 5,
    img: Book5,
    title: "Who's There",
    rating: 4.5,
    author: "Someone",
  },
];

const Books = () => {
  return (
    <>
        <div id="TerndingBooks"></div>
      <div  className="mt-14 mb-12 ">
        <div  className="container">
          {/* header */}
          <div  data-aos="slide-up" className="text-center mb-10 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Top Books for you
            </p>
            <h1 className="text-3xl font-bold">Top Books</h1>
            <p className="text-xs text-gray-400">
            Buku-Buku Pilihan dengan Cerita yang Tak Terlupakan
            </p>
          </div>

          {/* Body section */}
          <div>
            <div data-aos="slide-up" data-aos-duration="300" className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* Card */}
              {booksData.map(({ id, img, title, rating, author }) => (
                <div key={id} className="div space-y-3">
                  <img
                    src={img}
                    alt=""
                    className="h-[220px] w-[150px] object-cover rounded-md "
                  />
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-gray-700">{author}</p>
                    <div className="flex items-center gap-1">
                      <FaStar className="text-yellow-500" />
                      <span>{rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Books;