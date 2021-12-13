import { connectCurrentRefinements } from 'react-instantsearch-dom';
import React from 'react';
const ClearRefinements = ({ items, refine }) => (
  <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" onClick={() => refine(items)} disabled={!items.length}>
    <svg xmlns="http://www.w3.org/2000/svg" className="h-[1.25rem] w-[1.25-rem] inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
</svg> Clear
  </button>
);

const Clear = connectCurrentRefinements(ClearRefinements);

export default Clear;