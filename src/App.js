import Header from './components/Header';
import Title from './components/Title';
import Resume from './components/Resume';
import Form from './components/Form';

function App() {
  return (
    <>
      <Header />
      <Title />

      <main className='App'>
        <Resume />
        <Form />
      </main>
    </>
  );
}

export default App;
