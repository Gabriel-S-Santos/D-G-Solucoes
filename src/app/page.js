// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-gray-100 text-black font-popping">
      <Head>
        <title>D&G Soluções</title>
      </Head>

      {/* Navbar */}
      <nav className="fixed w-full bg-gray-950 text-white flex justify-between items-center px-10 py-4">
        <div className="text-2xl font-bold">D&G</div>
        <div className="space-x-4">
          <a href="#home" className="hover:underline">Home</a>
          <a href="#about" className="hover:underline">Sobre Nós</a>
          <a href="#services" className="hover:underline">Nossos Serviços</a>
          <a href="#contact" className="hover:underline">Fale Conosco</a>
        </div>
      </nav>

      {/* Home Section */}
      {/*<section id="home" className="h-screen bg-cover bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/Images/bg_img.avif')" }}>*/}
      <section id="home" className="h-screen bg-cover bg-center bg-gray-950 flex items-center justify-center text-center">
        <div className=" text-white p-6 rounded">
          <h1 className="text-6xl font-bold py-2">Nós somos a D&G Soluções!</h1>
          <p className="text-xl mt-4 py-2">Empresa especializada em detalhes, para embelezar sua obra</p>
          <a href="#about" className="mt-6 my-2 inline-block bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">Venha nos conhecer</a>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="about" className="py-16 px-6 flex mx-40 flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">Sobre Nós</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        </div>
        <div className="md:w-1/2">
          <img src="/Images/banner.png" alt="Sobre Nós" className="rounded" />
        </div>
      </section>

      {/* Nossos Serviços */}
      <section id="services" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Conheça um pouco dos nossos serviços!</h2>
        <div className="carousel-container">
          {/* Use biblioteca de carrossel como Swiper.js */}
        </div>
      </section>

      {/* Nossos Parceiros */}
      <section id="partners" className="py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Parceiros</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <img src="/logo1.png" alt="Parceiro 1" className="max-w-full h-auto" />
          <img src="/logo2.png" alt="Parceiro 2" className="max-w-full h-auto" />
          {/* Adicionar mais logos aqui */}
        </div>
      </section>

      {/* Fale Conosco */}
      <section id="contact" className="py-16 px-6 text-center">
        <a href="https://wa.me/SEU_NUMERO" className="inline-block bg-blue-700 text-white px-6 py-3 rounded text-lg hover:bg-blue-800">Faça seu orçamento!</a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-white text-center py-4">
        D&G Soluções | Desenvolvido por Gabriel Santos
      </footer>
    </div>
  );
}
