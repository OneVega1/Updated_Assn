"use client";
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';

const initialCards = [
  { id: 1, title: 'Identify the top 3 customers based on total Sale value across all locations.', date: 'Jan 24, 2024', url: '/practice' },
  { id: 2, title: 'Identify outliers in sales data based on the z-score of the sales value.', date: 'Jan 24, 2024', url: '/usebar1' },
  { id: 3, title: 'Calculate the percentage increase or decrease in sales value of 2023 compared to the 2021 to 2022', date: 'Jan 24, 2024', url: '/usebar1/usebar2' },
  { id: 4, title: 'From weekdays and weekends of 2023 in which highest "Sale_Value" increases', date: 'Jan 24, 2024', url: '/usebar1/usebar3' },
  { id: 5, title: 'Sort details from Highest to lowest of Sale_Value in Karnataka from 2021 January to 2022 January.', date: 'Jan 24, 2024', url: '/usebar1/usebar4' },
  { id: 6, title: 'Identify the top-selling items in terms of total sales value in the first half of 2023.', date: 'Jan 24, 2024', url: '/usebar1/usebar5' },
  { id: 7, title: 'Calculate the average SELLING_RATE for each item and display highest SELLING_RATE', date: 'Jan 26, 2024', url: '/usebar1/usebar6' },
  { id: 8, title: 'Calculate the total sales value for each item based on the Prod_Code ATTB100', date: 'Jan 30, 2024', url: '/usebar1/usebar7' },
  // Add more cards as needed
];

export default function Home() {
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
          <h1 className="mb-8" style={{ color: "white" }}><b>BCF Board 1</b></h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cards.map(card => (
              <Link key={card.id} href={card.url} legacyBehavior>
                <a target="_blank" className="bg-purple-500 p-4 rounded text-white block">
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
                </a>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
