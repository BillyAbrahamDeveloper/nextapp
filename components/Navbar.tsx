import Link from 'next/link';
import { auth, signIn, signOut } from '@/auth';

const Navbar = async () => {
  const session = await auth();

  return (
    <header className='px-5 py-3 bg-white shadow-sm font-sans'>
      <nav className='flex justify-between items-center'>
        <Link href='/' className='text-3xl  font-extrabold text-black'>
          Blog<span className=' text-[#EE2B69]'>Me</span>
        </Link>

        <div className='flex items-center gap-5 text-black font-extrabold uppercase'>
          {session && session.user ? (
            <>
              <Link href='/startup/create' className=''>
                <span>Create</span>
              </Link>

              <Link href={`/user/${session?.user.id}`} className=''>
                <span>{session.user.name}</span>
              </Link>

              <form
                action={async () => {
                  'use server';
                  await signOut();
                }}
              >
                <button type='submit'>Log out</button>
              </form>
            </>
          ) : (
            <>
              <form
                action={async () => {
                  'use server';
                  await signIn();
                }}
              >
                <button type='submit' className='text-gray-600'>
                  {' '}
                  Login
                </button>
              </form>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
