import React from 'react'

function App() {
  // CONFIGURACIÓN DE WHATSAPP
  // Cambia el 584120000000 por el número real (incluyendo el código de país 58)
  const whatsappLink = "https://wa.me/584148501150?text=Hola%20Viajes%20Berkana,%20deseo%20informaci%C3%B3n%20sobre%20sus%20paquetes%20tur%C3%ADsticos";

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* Navbar Superior */}
      <nav className="bg-white border-b border-gray-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-plane-departure text-berkana-cyan text-2xl"></i>
            <span className="text-2xl font-black text-berkana-cyan tracking-tighter">
              VIAJES<span className="text-berkana-dark">BERKANA</span>
            </span>
          </div>
          
          <ul className="hidden md:flex gap-8 text-gray-600 font-semibold uppercase text-xs tracking-widest">
            <li className="hover:text-berkana-cyan cursor-pointer transition">Inicio</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Destinos</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Promociones</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Contacto</li>
          </ul>

          {/* BOTÓN WHATSAPP REDIRECCIONABLE */}
          <a 
            href={whatsappLink}
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition shadow-md text-sm flex items-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000" 
          className="absolute w-full h-full object-cover"
          alt="Playa Principal"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-6xl font-black mb-4 drop-shadow-lg uppercase">
            Tu aventura comienza aquí
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light drop-shadow-md">
            Expertos en destinos inolvidables.
          </p>
          
          {/* Buscador */}
          <div className="bg-white p-4 rounded-xl shadow-2xl max-w-4xl mx-auto text-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
              <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 p-2">
                <span className="text-[10px] font-bold text-berkana-cyan uppercase flex items-center gap-1">
                  <i className="fa-solid fa-location-dot"></i> ¿A dónde?
                </span>
                <input type="text" placeholder="Destino" className="w-full outline-none text-sm p-1" />
              </div>
              <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 p-2">
                <span className="text-[10px] font-bold text-berkana-cyan uppercase flex items-center gap-1">
                  <i className="fa-solid fa-calendar-days"></i> Fecha
                </span>
                <input type="date" className="w-full outline-none text-sm p-1" />
              </div>
              <div className="flex flex-col p-2">
                <span className="text-[10px] font-bold text-berkana-cyan uppercase flex items-center gap-1">
                  <i className="fa-solid fa-user-group"></i> Personas
                </span>
                <select className="w-full outline-none text-sm bg-transparent p-1">
                  <option>1 Persona</option>
                  <option>2 Personas</option>
                  <option>Familia</option>
                </select>
              </div>
              <button className="bg-berkana-gold text-white font-black py-3 rounded-lg hover:bg-yellow-600 transition flex items-center justify-center gap-2">
                <i className="fa-solid fa-magnifying-glass"></i>
                BUSCAR VIAJE
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sección de Promociones */}
      <section className="container mx-auto py-16 px-4 text-left">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="text-berkana-cyan font-bold uppercase tracking-widest text-sm italic">Ofertas del mes</span>
            <h2 className="text-3xl md:text-4xl font-black text-berkana-dark">DESTINOS POPULARES</h2>
          </div>
          <button className="text-berkana-cyan font-bold border-b-2 border-berkana-cyan hover:text-berkana-dark transition">Ver todos</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Margarita */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Margarita" />
              <div className="absolute top-4 right-4 bg-berkana-gold text-white px-4 py-1 rounded-full font-bold shadow-md text-xs">
                Desde $199
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white text-left">
                <h3 className="text-2xl font-bold text-white">Isla de Margarita</h3>
                <p className="text-sm opacity-90 font-light flex items-center gap-2 text-white">
                  <i className="fa-solid fa-hotel text-xs"></i> Vuelo + Hotel + Traslados
                </p>
              </div>
            </div>
          </a>

          {/* Card 2: Los Roques */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
              <img src="https://ospreyexpeditions.com/wp-content/uploads/2024/10/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Los Roques" />
              <div className="absolute top-4 right-4 bg-berkana-cyan text-white px-4 py-1 rounded-full font-bold shadow-md text-xs">
                Full Day
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white text-left">
                <h3 className="text-2xl font-bold text-white">Los Roques</h3>
                <p className="text-sm opacity-90 font-light flex items-center gap-2 text-white">
                  <i className="fa-solid fa-ship text-xs"></i> Experiencia Premium
                </p>
              </div>
            </div>
          </a>

          {/* Card 3: Canaima */}
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
            <div className="relative h-80 overflow-hidden rounded-2xl shadow-lg">
              <img src="https://lirp.cdn-website.com/a109d03d/dms3rep/multi/opt/IMG_0145-min-640w.JPG" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" alt="Canaima" />
              <div className="absolute top-4 right-4 bg-berkana-gold text-white px-4 py-1 rounded-full font-bold shadow-md text-xs">
                Aventura
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 text-white text-left">
                <h3 className="text-2xl font-bold text-white">Canaima</h3>
                <p className="text-sm opacity-90 font-light flex items-center gap-2 text-white">
                  <i className="fa-solid fa-mountain-sun text-xs"></i> Salto Ángel y Excursiones
                </p>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4 text-left">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Columna 1: Info */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <i className="fa-solid fa-plane-up text-berkana-cyan text-xl"></i>
                <span className="text-2xl font-black text-berkana-cyan tracking-tighter">
                  VIAJES<span className="text-white">BERKANA</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Hacemos realidad el viaje de tus sueños con la mejor asesoría y los destinos más exclusivos de Venezuela y el mundo.
              </p>
            </div>

            {/* Columna 2: Enlaces */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-b-2 border-berkana-cyan inline-block">Enlaces</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="hover:text-berkana-cyan cursor-pointer transition">Sobre Nosotros</li>
                <li className="hover:text-berkana-cyan cursor-pointer transition">Preguntas Frecuentes</li>
                <li className="hover:text-berkana-cyan cursor-pointer transition">Términos y Condiciones</li>
              </ul>
            </div>

            {/* Columna 3: Contacto */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-b-2 border-berkana-cyan inline-block">Contacto</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-center gap-2"><i className="fa-solid fa-location-dot text-berkana-cyan"></i> Caracas, Venezuela</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-phone text-berkana-cyan"></i> +58 (412) 000-0000</li>
                <li className="flex items-center gap-2"><i className="fa-solid fa-envelope text-berkana-cyan"></i> info@viajesberkana.com</li>
              </ul>
            </div>

            {/* Columna 4: Redes */}
            <div>
              <h4 className="text-lg font-bold mb-6 border-b-2 border-berkana-cyan inline-block">Síguenos</h4>
              <div className="flex gap-4 mb-6">
                <a href="https://www.instagram.com/viajesberkana/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition cursor-pointer">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition cursor-pointer">
                  <i className="fa-brands fa-facebook-f text-lg"></i>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition cursor-pointer">
                  <i className="fa-brands fa-tiktok text-lg"></i>
                </div>
              </div>
              <p className="text-xs text-gray-500 italic">Síguenos en @viajesberkana para ofertas diarias.</p>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-xs">
            <p>© {new Date().getFullYear()} Viajes Berkana. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App