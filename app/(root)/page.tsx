import StartupCard from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';

interface StartupCardType {
  _id: number;
  title: string;
  author: object;
  image: string;
  view: number;
  category: string;
  description: string;
  _createdAt: string;
}

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: 1,
      title: 'Hello',
      author: { _id: 1, name: 'John Doe' },
      image:
        'https://images.unsplash.com/photo-1730041871382-11a33780c8df?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      view: 55,
      category: 'Robots',
      description: 'This is a description',
      _createdAt: new Date(),
    },
  ];

  return (
    <>
      {/* Hero landing Section */}

      <section className='pink_container'>
        <h1 className='heading m-auto '>
          PITCH YOUR STARTUP,
          <br /> CONNECT WITH ENTREPRENEURS
        </h1>
        <p className='sub-heading !max-w-3xl'>
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      {/* Startups Section */}

      <section className='section_container'>
        <p className='text-30-semibold'>
          {query ? `Search Results for "${query}"` : 'All Startups'}
        </p>

        <ul className='mt-7 card_grid'>
          {posts?.length > 0 ? (
            posts.map((post: StartupCardType) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className='no-results'>No Startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default Home;
