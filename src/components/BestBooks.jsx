// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Swal from "sweetalert2";
import Img1 from "../assets/Books/book2.jpg";
import Img2 from "../assets/Books/book1.jpg";
import Img3 from "../assets/Books/book3.jpg";
import Img4 from "../assets/Books/book4.jpg";
import Img5 from "../assets/Books/book5.jpg";
import Img6 from "../assets/Books/book6.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
    {
        id: 1,
        img: Img1,
        title: "His Life will forever be Changed",
        description:
            "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.79.000"
    },
    {
        id: 2,
        img: Img2,
        title: "Who's there",
        description:
            "Who's there ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.90.000"
    },
    {
        id: 3,
        img: Img3,
        title: "Lost Boy",
        description:
            "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.110.000"
    },
    {
        id: 4,
        img: Img4,
        title: "Bumi",
        description:
            "A thrilling journey of discovery and mystery, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.95.000"
    },
    {
        id: 5,
        img: Img5,
        title: "Lumpu",
        description:
            "Unveiling the hidden stories of history, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.85.000"
    },
    {
        id: 6,
        img: Img6,
        title: "Hujan",
        description:
            "An epic tale of courage and exploration, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        price: "Rp.120.000"
    },
];

const BestBooks = () => {
    const [isOrderPopupOpen, setOrderPopupOpen] = useState(false);
    const [selectedBook, setSelectedBook] = useState(null);
    const [formData, setFormData] = useState({
        nama: "",
        alamat: "",
        telepon: "",
        jumlah: 1,
        metodePembayaran: "Tunai"
    });

    const handleOrderPopup = (book) => {
        setSelectedBook(book);
        setOrderPopupOpen(true);
        document.body.style.overflow = "hidden"; // Disable scrolling
    };
    
    const handleClosePopup = () => {
        setOrderPopupOpen(false);
        setFormData({
            nama: "",
            alamat: "",
            telepon: "",
            jumlah: 1,
            metodePembayaran: "Tunai"
        });
        document.body.style.overflow = ""; // Enable scrolling
    };
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleIncrement = () => {
        setFormData((prevState) => ({ ...prevState, jumlah: prevState.jumlah + 1 }));
    };

    const handleDecrement = () => {
        setFormData((prevState) => ({
            ...prevState,
            jumlah: Math.max(1, prevState.jumlah - 1)
        }));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Order submitted:", {
            book: selectedBook,
            ...formData
        });
        handleClosePopup();

        Swal.fire({
            title: "Pesanan Berhasil!",
            text: `Pesanan Anda untuk buku ${selectedBook?.title} telah berhasil dilakukan!`,
            icon: "success",
            confirmButtonText: "OK"
        });
    };

    return (
        <>
            <div id="BestBooks" className="pt-10">
                <div className="container">
                    <div className="text-center mb-20 max-w-[400px] mx-auto">
                        <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">Best Books</p>
                        <h1 className="text-3xl font-bold">Books Shop</h1>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center">
                        {BooksData.map((book, index) => (
                            <div
                                key={index}
                                className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-primary hover:text-white shadow-xl duration-high group max-w-[300px]"
                            >
                                <div className="h-[100px]">
                                    <img
                                        src={book.img}
                                        alt=""
                                        className="max-w-[90px] block mx-auto transform-translate-y-14 group-hover:scale-105 duration-300 shadow-md"
                                    />
                                </div>
                                <div className="p-11 text-center">
                                    <div className="w-full flex items-center justify-center">
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                        <FaStar className="text-yellow-500" />
                                    </div>
                                    <h1 className="text-xl font-bold">{book.title}</h1>
                                    <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">{book.description}</p>
                                    <p className="text-gray-500 group-hover:text-white duration-300 font-bold">{book.price}</p>
                                    <button
                                        onClick={() => handleOrderPopup(book)}
                                        className="bg-primary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:bg-white group-hover:text-primary"
                                    >
                                        Order Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {isOrderPopupOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center position: fixed">
                    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 rounded-lg p-6 w-[90%] max-w-[500px]">
                        <h2 className="text-xl font-bold mb-4">Pesan: {selectedBook?.title}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb- bg-white dark:bg-gray-900 dark:text-white duration-200">
                                <label className="block text-sm font-medium mb-2">Nama</label>
                                <input
                                    type="text"
                                    name="nama"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    className="w-full border rounded p- bg-white dark:bg-gray-900 dark:text-white duration-200"
                                    required
                                />
                            </div>
                            <div className="mb-4 bg-white dark:bg-gray-900 dark:text-white duration-200">
                                <label className="block text-sm font-medium mb-2">Alamat</label>
                                <input
                                    type="text"
                                    name="alamat"
                                    value={formData.alamat}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 bg-white dark:bg-gray-900 dark:text-white duration-200"
                                    required
                                />
                            </div>
                            <div className="mb-4 bg-white dark:bg-gray-900 dark:text-white duration-200">
                                <label className="block text-sm font-medium mb-2">Nomor Telepon</label>
                                <input
                                    type="text"
                                    name="telepon"
                                    value={formData.telepon}
                                    onChange={handleChange}
                                    className="w-full border rounded p-2 bg-white dark:bg-gray-900 dark:text-white duration-200"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-2 text-black bg-white dark:bg-gray-900 dark:text-white duration-200 ">Jumlah</label>
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={handleDecrement}
                                        className="px-3 py-1 bg-white dark:bg-gray-900 dark:text-white duration-200"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        name="jumlah"
                                        value={formData.jumlah}
                                        onChange={handleChange}
                                        min="1"
                                        className="w-16 bg-white dark:bg-gray-900 dark:text-white duration-200 text-center border rounded p-2"
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={handleIncrement}
                                        className="px-3 py-1 bg-white dark:bg-gray-900 dark:text-white duration-200"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="bg-white dark:bg-gray-900 dark:text-white duration-200 block text-sm font-medium mb-2">Metode Pembayaran</label>
                                <select
                                    name="metodePembayaran"
                                    value={formData.metodePembayaran}
                                    onChange={handleChange}
                                    className="bg-white dark:bg-gray-900 dark:text-white duration-200 w-full border rounded p-2"
                                    required
                                >
                                    <option value="Tunai">Bayar di tempat</option>
                                    <option value="GoPay">GoPay</option>
                                    <option value="ShopeePay">ShopeePay</option>
                                    <option value="ATM">Kartu Kredit/debit</option>
                                </select>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    onClick={handleClosePopup}
                                    className="px-4 py-2 bg-white dark:bg-primary dark:text-white duration-200"
                                >
                                    Batal
                                </button>

                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-primary text-white rounded"
                                >
                                    Pesan
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default BestBooks;
