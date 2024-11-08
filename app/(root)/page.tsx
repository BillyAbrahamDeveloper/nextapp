import StartupCard, { StartupCardType } from '@/components/StartupCard';
import SearchForm from '../../components/SearchForm';
// import { client } from '@/sanity/lib/client';
import { STARTUPS_QUERY } from '@/sanity/lib/queries';
import { sanityFetch, SanityLive } from '@/sanity/lib/life';

const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: posts } = await sanityFetch({ query: STARTUPS_QUERY, params });

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

      <SanityLive />
    </>
  );
};

export default Home;
