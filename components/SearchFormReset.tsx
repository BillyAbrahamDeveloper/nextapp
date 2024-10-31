'use client';

import Link from 'next/link';
import { CiCircleRemove } from 'react-icons/ci';

const SearchFormReset = () => {
  const reset = () => {
    const form = document.querySelector('.search-form') as HTMLFormElement;

    if (form) form.reset();
  };

  return (
    <button type='reset' onClick={reset}>
      <Link href='/' className='search-btn text-white'>
        <CiCircleRemove size={70} />
      </Link>
    </button>
  );
};

export default SearchFormReset;
