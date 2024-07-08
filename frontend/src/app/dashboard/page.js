"use client";
import Head from 'next/head';
import { useState } from 'react';

const initialCards = [
  { id: 1, title: 'Prompt 1', date: 'Jan 24, 2024' },
  { id: 2, title: 'Prompt 2', date: 'Jan 24, 2024' },
  { id: 3, title: 'Prompt 3', date: 'Jan 24, 2024' },
  { id: 4, title: 'Prompt 4', date: 'Jan 24, 2024' },
  { id: 5, title: 'Saathi ', date: 'Jan 24, 2024' },
  { id: 6, title: 'Saathi ', date: 'Jan 24, 2024' },
  { id: 7, title: 'Cement ', date: 'Jan 26, 2024' },
  { id: 8, title: 'College', date: 'Jan 30, 2024' },
  // Add more cards as needed
];

export default function Dashboard() {
  const [cards, setCards] = useState(initialCards);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    const filteredCards = initialCards.filter(card =>
      card.title.toLowerCase().includes(value)
    );
    setCards(filteredCards);
  };

  return (
    <div style={{ backgroundColor: "purple", minHeight: "100vh" }}>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div className="flex">
        {/* <aside className="w-1/4 bg-purple-800 p-4 text-white">
          <h1 className="text-xl font-semibold mb-4">Sidebar</h1>
          <nav>
            <Link href="/" className="block py-2 px-4 text-white hover:bg-gray-700">
              Dashboard
            </Link>
            <div className="mt-1">
              <button
                className="flex justify-between w-full py-2 px-4 text-white hover:bg-gray-700 focus:outline-none"
                onClick={toggleDropdown}
              >
                <span>Dropdown</span>
                <svg
                  className={`w-4 h-4 ${isOpen ? 'transform rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={isOpen ? 'M19 9l-7 7-7-7' : 'M5 15l7-7 7 7'}
                  />
                </svg>
              </button>
              {isOpen && (
                <div className="pl-4">
                  <Link href="/page1" className="block py-2 px-4 text-white hover:bg-gray-700">
                    Page 1
                  </Link>
                  <Link href="/page2" className="block py-2 px-4 text-white hover:bg-gray-700">
                    Page 2
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </aside> */}
        <main className="flex-1 p-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Search prompts"
              value={searchTerm}
              onChange={handleSearch}
              className="p-2 rounded w-full"
            />
          </div>
          <h1 className="mb-8" style={{color:"white"}}><b>BCF Board 1</b></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map(card => (
              <div key={card.id} className="bg-purple-500 p-4 rounded text-white">
                <div>{card.date}</div>
                <div>{card.title}</div>
                <div className="mt-4">
                  <svg width="100" height="50" viewBox="0 0 100 50">
                    <rect width="10" height="30" x="5" y="10" fill="#fff" />
                    <rect width="10" height="20" x="20" y="20" fill="#fff" />
                    <rect width="10" height="40" x="35" y="5" fill="#fff" />
                    <rect width="10" height="25" x="50" y="15" fill="#fff" />
                    <rect width="10" height="35" x="65" y="10" fill="#fff" />
                    <rect width="10" height="15" x="80" y="25" fill="#fff" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
