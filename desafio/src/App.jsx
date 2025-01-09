import React from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import './App.module.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Section 
        id="home" 
        title="Venha fazer parte da maior rede de doação de livros!" 
        subtitle="Doe livros e inspire futuros leitores." 
        image="img/livro.png" 
      />
      <Section 
        id="doacao" 
        title="Doação"
      >
        <form>
          <input type="text" name="titulo" placeholder="Título do Livro" />
          <input type="text" name="autor" placeholder="Autor" />
          <input type="text" name="genero" placeholder="Gênero" />
          <button type="submit">Doar</button>
        </form>
      </Section>
      <Footer />
    </div>
  );
}

export default App;
