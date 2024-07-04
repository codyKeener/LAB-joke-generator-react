import Jokes from '../components/Jokes';

function Home() {
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '20vh',
          padding: '30px',
          maxWidth: '400px',
          margin: '0 auto',
        }}
      >
        <h1>Welcome Home!</h1>
      </div>
      <Jokes />
    </>
  );
}

export default Home;
