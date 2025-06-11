'use client';
import ParallaxBG from './ParallaxBG';
import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import EventsCard from './EventsCard';
import events from './Events.json';
import Link from 'next/link';

export default function EventsPage() {
  const [search, setSearch] = useState('');
  const [dayFilter, setDayFilter] = useState('ALL');
  const [categoryFilter, setCategoryFilter] = useState('ALL');

  const handleDayClick = () => {
    const order = ['ALL', 'DAY 1', 'DAY 2', 'DAY 3', 'DAY 4'];
    const next = order[(order.indexOf(dayFilter) + 1) % order.length];
    setDayFilter(next);

    if (
      (next === 'DAY 3' || next === 'DAY 4') &&
      categoryFilter === 'INTRA'
    ) {
      setCategoryFilter('ALL');
    }

    if (
      (next === 'DAY 1' || next === 'DAY 2') &&
      categoryFilter === 'INTER'
    ) {
      setCategoryFilter('ALL');
    }
  };

  const handleCategoryClick = () => {
    const cycle = ['ALL', 'INTRA', 'INTER'];
    const next = cycle[(cycle.indexOf(categoryFilter) + 1) % cycle.length];

    if (
      (dayFilter === 'DAY 3' || dayFilter === 'DAY 4') &&
      next === 'INTRA'
    ) {
      setCategoryFilter('ALL');
      return;
    }

    if (
      (dayFilter === 'DAY 1' || dayFilter === 'DAY 2') &&
      next === 'INTER'
    ) {
      setCategoryFilter('ALL');
      return;
    }

    setCategoryFilter(next);
  };

  const filteredEvents = useMemo(() => {
    return events.filter((e) => {
      const nameMatch =
        e.eventname.toLowerCase().includes(search.toLowerCase()) ||
        e.event.toLowerCase().includes(search.toLowerCase());

      const dayMatch =
        dayFilter === 'ALL' || e.day.toUpperCase() === dayFilter.replace(' ', '');

      const categoryMatch =
        categoryFilter === 'ALL' || e.category.toUpperCase() === categoryFilter;

      return nameMatch && dayMatch && categoryMatch;
    });
  }, [search, dayFilter, categoryFilter]);

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <ParallaxBG />
      </div>

      <div className="relative z-10">
        <h1 className="mt-[5vh] mb-0 text-[9vh] font-ransom text-center text-white">EVENTS</h1>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center font-ys mb-[2vh]"
        >
          <p className="text-white mb-2 text-[1.8vh]">
            30 vibrant events await — a celebration where fire and ice, logic and art, boldly coexist
          </p>
          <div className="relative flex items-center">
            <input
              type="text"
              placeholder="Search epic quests here"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-3 pr-12 rounded-lg bg-white text-black placeholder-black border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            />
            <button
              className="absolute right-3 text-black hover:text-blue-500 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap gap-[6vw] justify-center items-center mb-10 font-ys uppercase tracking-wide font-bold text-[1.7vh]"
        >
          {[
            {
              type: 'button',
              label: `Day: ${dayFilter}`,
              onClick: handleDayClick,
            },
            {
              type: 'link',
              label: 'Brochure',
              href: '/Brochure',
            },
            {
              type: 'button',
              label: `Category: ${categoryFilter}`,
              onClick: handleCategoryClick,
            },
          ].map((btn, idx) =>
            btn.type === 'button' ? (
              <motion.button
                key={idx}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                onClick={btn.onClick}
                className="px-4 py-2 bg-[#111827] text-white border border-gray-400 rounded-lg shadow-md transition"
              >
                {btn.label}
              </motion.button>
            ) : (
              <motion.a
                key={idx}
                whileHover={{
                  scale: 1.1,
                  boxShadow: '0 4px 15px rgba(255, 255, 255, 0.3)',
                  backgroundColor: '#000000',
                  color: '#ffffff',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#111827] text-white border border-gray-400 rounded-lg shadow-md transition"
              >
                {btn.label}
              </motion.a>
            )
          )}
        </motion.div>
      </div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: -20 }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-y-16 place-items-center"
      >
        {filteredEvents.map((event, idx) => (
          <motion.div key={idx} transition={{ duration: 0.3 }} whileHover={{ scale: 1.1 }}>
           <EventsCard
              {...event}
              eventPageLink={`/events/${event.eventname.toLowerCase().replace(/\s+/g, "-")}`}
            />

          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
