import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import './App.css';

function App() {
  const [showPrank, setShowPrank] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPrank(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (showPrank) {
    return (
      <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-red-600 text-4xl font-bold">
        <p>Error 404</p>
        <p className="text-lg mt-4 text-gray-400">Page not found</p>
      </div>
    );
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const slideLeft = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  const slideRight = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (

    <div>

    <div className="w-full h-screen flex flex-col items-center justify-center bg-black text-white text-3xl font-bold">
        Just kidding! 🚨
        
      </div>
      
    
    <div className="bg-black text-gray-200 min-h-screen font-sans">

      {/* NAVBAR */}
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, transition: { duration: 0.8 } }}
        className="w-full py-4 border-b border-red-700 bg-black/70 backdrop-blur-md sticky top-0 z-50"
      >
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <h1 className="text-2xl font-extrabold text-red-500">⚠️</h1>
          <div className="hidden md:flex gap-6 text-lg font-medium">
            <a href="#lore" className="hover:text-red-400 transition-colors">About</a>
            <a href="#chart" className="hover:text-red-400 transition-colors">Chart</a>
            <a href="#tokenomics" className="hover:text-red-400 transition-colors">Tokenomics</a>
            <a href="#faq" className="hover:text-red-400 transition-colors">FAQ</a>
          </div>
          <div className="md:hidden">
            <p className="font-medium">☰</p>
          </div>
        </div>
      </motion.nav>

      {/* HERO */}
      <section className="relative w-full h-[500px] border-b border-red-700 overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay muted loop playsInline
        >
          <source src="background.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-0 left-0 w-full h-full bg-black/60"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        >
          <motion.h2 
            initial={{ y: -50, opacity: 0 }}
            animate={{ y:0, opacity: 1, transition: { duration: 1 } }}
            className="text-lg md:text-5xl font-extrabold text-red-500 mb-4"
          >$BYEMONEY</motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.5 } }}
            className="text-lg md:text-xl font-semibold text-gray-200 mb-6"
          >
            “THIS IS AN UNREGISTERED SECURITY — DO NOT BUY, IT WILL RUG!”
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.1, boxShadow: "0px 0px 20px #ff0000" }}
            className="bg-red-600 text-white px-6 py-2 rounded-full font-bold cursor-pointer"
          >
            Watch Out!
          </motion.div>
        </motion.div>
      </section>

      {/* LORE */}
      <motion.section 
        id="lore"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h3 className="text-3xl font-bold mb-4 text-red-500">Lore</h3>
        <p className="text-lg text-gray-200 mb-4">
          Deep in the Base chain, a sinister villain crawled — 
          a blood-red centipede known as <span className="font-bold text-red-500">The Rugger Centipede</span>. 
          Its many legs strike fear into every degen developer who whispered “trust me bro” before vanishing. 
          <span className="font-bold text-white">It hunts.</span>
        </p>
        <p className="text-gray-400 text-lg">
          Each segment represents a trap: hype, liquidity burns, and taxes that vanish like smoke. 
          It’s not the villain who runs — <span className="font-bold text-red-400">you do.</span>
        </p>
      </motion.section>

      {/* MASKOT */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8, transition: { duration: 1 } }}
        viewport={{ once: true }}
        className="relative w-full mb-8"
      >
        <img 
          src="villain.png" 
          alt="Rugger Centipede" 
          className="mx-auto w-64 sm:w-80 md:w-96 opacity-80 pointer-events-none"
        />
      </motion.div>

      {/* SOCIAL MEDIA */}
  <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-8">
  {/* Twitter / X */}
  <a 
    href="https://twitter.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center
               transition-transform transform hover:scale-110 hover:shadow-[0_0_15px_#9400d3]"
  >
    <img src="x.jpg" alt="Twitter" className="w-full h-full object-cover"/>
  </a>

  {/* Telegram */}
  <a 
    href="https://t.me" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center
               transition-transform transform hover:scale-110 hover:shadow-[0_0_15px_#0088cc]"
  >
    <img src="telegram.jpg" alt="Telegram" className="w-full h-full object-cover"/>
  </a>

  {/* DexScreener */}
  <a 
    href="https://dexscreener.com" 
    target="_blank" 
    rel="noopener noreferrer"
    className="w-16 h-16 rounded-full overflow-hidden bg-gray-900 shadow-lg flex items-center justify-center
               transition-transform transform hover:scale-110 hover:shadow-[0_0_15px_#FF0000]"
  >
    <img src="dexscreener.jpg" alt="DexScreener" className="w-full h-full object-cover"/>
  </a>
</div>

     


<motion.section 
  id="roadmap"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={fadeUp}
  className="max-w-6xl mx-auto px-4 py-16"
>
  <div className="flex flex-col lg:flex-row gap-8">

    {/* DexScreener Chart */}
    <motion.div 
      variants={slideRight} 
      className="flex-1 order-1 mb-6 lg:mb-0"
      id ="chart"
    >
      <h4 className="text-xl font-bold text-red-500 mb-4 lg:hidden text-center">Live Chart</h4>
      <div className="w-full h-[300px] sm:h-[400px] rounded-xl overflow-hidden shadow-lg border border-red-700">
        <iframe
          src="https://dexscreener.com/base/0x26d915a941c399b81d6cd47aa5d19beed86662164587b38635455a4dc5edb213"
          className="w-full h-full"
          title="Dexscreener Chart"
        ></iframe>
      </div>
    </motion.div>

    {/* Roadmap Tabel */}
    <motion.div 
      variants={slideLeft} 
      className="flex-1 flex flex-col justify-center items-start bg-black/50 rounded-xl p-6 shadow-lg border border-gray-700 order-3 lg:order-2"
    >
      {/* Roadmap Title */}
      <h3 className="text-3xl font-bold text-red-500 mb-4 text-center lg:text-center order-1">
        Roadmap: The Hunt of Rugger Centipede
      </h3>

      {/* Roadmap Tabel dengan animasi */}
      <div className="text-gray-200 space-y-3 order-2">
        {[
          "Q1: Rugger emerges from the shadows, trapping hype, burning liquidity, and leaving degen devs in panic.",
          "Q2: First rug attempts, only the clever survive. Liquidity burns like wildfire 🔥.",
          "Q3: Warning signs everywhere — do you hold, or do you run? 🕷️",
          "Q4: The final rug pull — Only legends will whisper about the centipede who hunted them."
        ].map((text, i) => (
          <motion.p 
            key={i} 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0, transition: { delay: i * 0.3, duration: 0.6 } }}
            viewport={{ once: true }}
          >
            <span className="font-bold text-red-500">{text.split(":")[0]}:</span>{text.substring(text.indexOf(":") + 1)}
          </motion.p>
        ))}
      </div>
    </motion.div>
  </div>

  {/* Contract Address */}
  <motion.div 
    className="mt-6 lg:mt-10 flex justify-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0, transition: { duration: 0.8 } }}
    viewport={{ once: true }}
  >
    <div className="flex items-center w-full max-w-md bg-gray-900/70 px-4 py-3 rounded-lg shadow-inner border border-gray-700">
      <span className="truncate text-gray-200 mr-4">
        0xA12A532B0B7024b1D01Ae66a3b8cF77366c7dB07
      </span>
      <button
        onClick={() => {
          navigator.clipboard.writeText('0xA12A532B0B7024b1D01Ae66a3b8cF77366c7dB07');
          alert('Contract address copied!');
        }}
        className="bg-red-600 hover:bg-red-500 text-white px-3 py-1 rounded-md shadow-md transition"
      >
        Copy
      </button>
    </div>
  </motion.div>
</motion.section>







      {/* WARNING TAPE */}
      <div className="w-full overflow-hidden relative my-4">
        <div className="whitespace-nowrap font-bold text-lg sm:text-xl px-4 py-1 inline-block animate-marquee" style={{ color: 'yellow', backgroundColor: 'red' }}>
          ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠ WARNING ⚠
        </div>
      </div>

      {/* TOKENOMICS */}
      <motion.section
        id="tokenomics"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="w-full py-16"
      >
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {title:"Total Supply", desc:"1,000,000,000 (Fixed)"},
            {title:"Liquidity", desc:"Burned forever 🔥"},
            {title:"Taxes", desc:"0/0 — pure degen"}
          ].map((item,i)=>(
            <motion.div key={i} whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px #ff0000" }} className="p-6 bg-black/50 shadow-lg rounded-xl border border-gray-700">
              <h4 className="font-bold text-xl mb-2 text-red-500">{item.title}</h4>
              <p className="text-lg">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        id="faq"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="max-w-4xl mx-auto px-4 py-16"
      >
        <h3 className="text-3xl font-bold text-red-500 mb-6">FAQ</h3>
        <div className="space-y-6 text-gray-200">
          {[
            {q:"Is this a rugpull?", a:"Maybe yes, maybe no. That’s the fun part."},
            {q:"Is liquidity locked?", a:"We burned it. No turning back."},
            {q:"When moon?", a:"As soon as you invite your cousin, neighbor, ex, and barista."}
          ].map((item,i)=>(
            <motion.div key={i} whileHover={{ scale:1.02 }} className="p-3 rounded-lg hover:bg-gray-900 transition">
              <h4 className="text-lg sm:text-xl font-bold text-red-500">{item.q}</h4>
              <p>{item.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* FOOTER */}
      <motion.footer
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y:0, opacity:1, transition:{ duration:0.8 } }}
        className="w-full py-6 bg-red-700 text-white text-center"
      >
        <p className="font-semibold text-sm sm:text-base">© 2025 $BYEMONEY — Built on Base</p>
      </motion.footer>
    </div>



    </div>
  );
}

export default App;
