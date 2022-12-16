import Header from './components/Header';
import Title from './components/Title';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <Header />
      <Title />

      <main className='App'>
        <Resume />
      </main>
    </>
  );
}

export default App;
