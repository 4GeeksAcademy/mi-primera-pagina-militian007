import React, { useState, useRef } from 'react'

function App() {
  const [datosViaje, setDatosViaje] = useState({ origen: '', destino: '', fecha: '', personas: '1 Persona' });
  const scrollRef = useRef(null);
  const numeroCallCenter = "584148501150"; // Cambia por tu número real

  // Función para las flechas del carrusel
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') { current.scrollBy({ left: -350, behavior: 'smooth' }); }
    else { current.scrollBy({ left: 350, behavior: 'smooth' }); }
  };

  // Envío a WhatsApp
  const enviarCotizacion = (e) => {
    e.preventDefault();
    const { origen, destino, fecha } = datosViaje;
    if(!origen || !destino || !fecha) { alert("Completa los datos para cotizar"); return; }
    const mensaje = `Hola Viajes Berkana! 👋%0A%0AQuiero cotizar un viaje:%0A📍 *Origen:* ${origen}%0A🏁 *Destino:* ${destino}%0A📅 *Fecha:* ${fecha}`;
    window.open(`https://wa.me/${numeroCallCenter}?text=${mensaje}`, '_blank');
  };

  // 7 Promos de Instagram (Data para el carrusel)
  const promosInstagram = [
    { id: 1, titulo: "Pto. La Cruz", noches: "3 Noches", precio: "185", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUC98HMH9VF_-v_yDS_E6-bk60HwtA05Ha4w&s", tag: "Oferta" },
    { id: 2, titulo: "Morrocoy Premium", noches: "2 Noches", precio: "220", img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxGiMLFYNXa3vgRQxHTp4yxQPrPt9aTwb3dE-YYP42j5X5pXkilJFPItp6XMghXKmG2yOOgREz5trRWVUPifdDctoEmZhznTkLcUbtQCbVvQ3n6y61B4LAfaNF1aOqjYocMGTSsLm3JxiKwHucL-QQGNVYzEjAcT7DRRmOxCXa7Oh2O2ZHvFO2tVdUMWbn/s1000/Parque-Nacional-Morrocoy-travel_turismo_venezuela.jpg", tag: "Full Day" },
    { id: 3, titulo: "Mérida Nevada", noches: "4 Noches", precio: "350", img: "https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1580493463932-NSJ7M1XNO9K687IN3CPV/Pueblo-de-merida-venezuela.jpg?format=1000w", tag: "Aventura" },
    { id: 4, titulo: "Isla de Coche", noches: "3 Noches", precio: "290", img: "https://www.felizviaje.com/wp-content/uploads/2020/08/coche4.jpg", tag: "All Inclusive" },
    { id: 5, titulo: "La Tortuga", noches: "2 Noches", precio: "195", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34bfjcPFgG2aVc6rET8cUirrWzo5vwZoSnA&s", tag: "Exclusivo" },
    { id: 6, titulo: "Choroní Mágico", noches: "2 Noches", precio: "115", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiw607CMDpd92P46hYuetcq5FaAW33Pc59Pg&s", tag: "Relax" },
    { id: 7, titulo: "Roraima Expedition", noches: "6 Noches", precio: "550", img: "https://www.hike-venezuela.com/media/roraima-north-large.jpg", tag: "Trekking" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      
      {/* 1. NAVBAR COMPLETO */}
      <nav className="bg-white border-b border-gray-100 p-4 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center text-left">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-plane-departure text-berkana-cyan text-2xl"></i>
            <span className="text-2xl font-black text-berkana-cyan tracking-tighter">
              VIAJES<span className="text-berkana-dark">BERKANA</span>
            </span>
          </div>
          <ul className="hidden md:flex gap-8 text-gray-600 font-bold uppercase text-[10px] tracking-widest">
            <li className="hover:text-berkana-cyan cursor-pointer transition">Inicio</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Destinos</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Promociones</li>
            <li className="hover:text-berkana-cyan cursor-pointer transition">Contacto</li>
          </ul>
          <a href={`https://wa.me/${numeroCallCenter}`} target="_blank" className="bg-[#25D366] text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition shadow-md text-sm flex items-center gap-2">
            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp
          </a>
        </div>
      </nav>

      {/* 2. HERO CON BUSCADOR INTELIGENTE */}
      <header className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000" className="absolute w-full h-full object-cover" alt="Playa" />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 text-center text-white px-4 w-full max-w-5xl">
          <h1 className="text-5xl md:text-6xl font-black mb-4 uppercase drop-shadow-lg">Tu aventura comienza aquí</h1>
          <form onSubmit={enviarCotizacion} className="bg-white p-4 rounded-xl shadow-2xl text-gray-800 mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 text-left">
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 p-1">
              <span className="text-[10px] font-bold text-berkana-cyan uppercase">Origen</span>
              <input type="text" placeholder="Ciudad salida" className="outline-none text-sm font-semibold" onChange={(e) => setDatosViaje({...datosViaje, origen: e.target.value})} />
            </div>
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 p-1">
              <span className="text-[10px] font-bold text-berkana-cyan uppercase">Destino</span>
              <input type="text" placeholder="¿A dónde vas?" className="outline-none text-sm font-semibold" onChange={(e) => setDatosViaje({...datosViaje, destino: e.target.value})} />
            </div>
            <div className="flex flex-col border-b md:border-b-0 md:border-r border-gray-100 p-1">
              <span className="text-[10px] font-bold text-berkana-cyan uppercase">Fecha</span>
              <input type="date" className="outline-none text-sm font-medium" onChange={(e) => setDatosViaje({...datosViaje, fecha: e.target.value})} />
            </div>
            <button type="submit" className="bg-berkana-gold text-white font-black py-3 rounded-lg hover:bg-yellow-600 transition shadow-lg">COTIZAR AHORA</button>
          </form>
        </div>
      </header>

      {/* 3. CARRUSEL ESTILO TURASER (7 PROMOS INSTAGRAM) */}
      <section className="py-16 bg-white relative">
        <div className="container mx-auto px-4 mb-8 text-left">
          <h2 className="text-3xl font-black text-gray-800 uppercase tracking-tighter">Flash Sales</h2>
          <p className="text-berkana-cyan font-bold text-sm tracking-widest italic">@viajesberkana en Instagram</p>
        </div>

        <div className="container mx-auto px-4 relative group">
          {/* Botones de Navegación */}
          <button onClick={() => scroll('left')} className="absolute -left-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-berkana-cyan transition-all opacity-0 group-hover:opacity-100">
            <i className="fa-solid fa-chevron-left text-xl"></i>
          </button>
          <button onClick={() => scroll('right')} className="absolute -right-2 top-1/2 -translate-y-1/2 z-30 w-12 h-12 bg-white shadow-xl rounded-full flex items-center justify-center text-gray-400 hover:text-berkana-cyan transition-all opacity-0 group-hover:opacity-100">
            <i className="fa-solid fa-chevron-right text-xl"></i>
          </button>

          {/* Contenedor Scrollable */}
          <div ref={scrollRef} className="flex overflow-x-auto gap-6 pb-10 no-scrollbar snap-x snap-mandatory scroll-smooth">
            {promosInstagram.map((promo) => (
              <div key={promo.id} className="min-w-[280px] md:min-w-[320px] snap-center">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg group/item cursor-pointer">
                  <img src={promo.img} className="w-full h-full object-cover group-hover/item:scale-110 transition duration-700" alt={promo.titulo} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-left">
                    <span className="bg-berkana-gold text-white text-[10px] font-black px-3 py-1 rounded-full self-start shadow-md uppercase">{promo.tag}</span>
                    <div className="text-white">
                      <p className="text-[10px] text-berkana-cyan font-bold uppercase tracking-widest mb-1 italic"><i className="fa-solid fa-clock"></i> {promo.noches}</p>
                      <h3 className="text-2xl font-black mb-4 uppercase leading-tight">{promo.titulo}</h3>
                      <div className="flex items-baseline gap-1">
                        <span className="text-sm font-bold">US$</span>
                        <span className="text-4xl font-black">{promo.precio}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DESTINOS DE LUJO ORIGINALES (Canaima, Roques, Margarita) */}
      <section className="container mx-auto py-16 px-4 text-left">
        <h2 className="text-3xl font-black text-berkana-dark mb-10 border-l-4 border-berkana-cyan pl-4 uppercase">Destinos de Lujo</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Margarita */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <img src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?q=80&w=1000" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Margarita" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-black mb-2">Isla de Margarita</h3>
              <p className="text-sm opacity-80 font-light italic">Vibrante y All Inclusive</p>
            </div>
          </div>
          {/* Los Roques */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <img src="https://ospreyexpeditions.com/wp-content/uploads/2024/10/Venezuela-Los-Roques-Angel-Falls-Orinoco-Roraima-Caribbean-honeymoon-9.jpg" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Los Roques" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-black mb-2">Los Roques</h3>
              <p className="text-sm opacity-80 font-light italic">El paraíso turquesa</p>
            </div>
          </div>
          {/* Canaima */}
          <div className="relative h-[450px] overflow-hidden rounded-2xl shadow-xl group">
            <img src="https://lirp.cdn-website.com/a109d03d/dms3rep/multi/opt/IMG_0145-min-640w.JPG" className="w-full h-full object-cover transition duration-500 group-hover:scale-105" alt="Canaima" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-black mb-2">Canaima</h3>
              <p className="text-sm opacity-80 font-light italic">Tierra de Tepuyes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER COMPLETO ORIGINAL */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 text-left">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-16 border-b border-gray-800 pb-16">
          <div className="col-span-1">
            <span className="text-2xl font-black text-berkana-cyan tracking-tighter mb-6 block">VIAJESBERKANA</span>
            <p className="text-gray-400 text-sm leading-relaxed italic">Expertos en crear recuerdos inolvidables en los rincones más bellos de Venezuela y el mundo.</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-berkana-cyan">Información</h4>
            <ul className="text-gray-400 text-sm space-y-4 font-light">
              <li className="hover:text-white cursor-pointer transition">Sobre Nosotros</li>
              <li className="hover:text-white cursor-pointer transition">Preguntas Frecuentes</li>
              <li className="hover:text-white cursor-pointer transition">Términos y Condiciones</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-berkana-cyan">Contacto</h4>
            <ul className="text-gray-400 text-sm space-y-4 font-light">
              <li><i className="fa-solid fa-location-dot mr-2"></i> Guayana, Venezuela</li>
              <li><i className="fa-solid fa-phone mr-2"></i> +58 (414) 850-1150</li>
              <li><i className="fa-solid fa-envelope mr-2"></i> viajesberkana@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6 text-berkana-cyan">Síguenos</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition"><i className="fa-brands fa-instagram text-xl"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition"><i className="fa-brands fa-tiktok text-xl"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-berkana-cyan transition"><i className="fa-brands fa-facebook-f text-xl"></i></a>
            </div>
          </div>
        </div>
        <p className="text-center pt-10 text-gray-600 text-xs uppercase tracking-widest font-bold">
          © {new Date().getFullYear()} Viajes Berkana. Hecho con pasión por el turismo.
        </p>
      </footer>

    </div>
  )
}

export default App