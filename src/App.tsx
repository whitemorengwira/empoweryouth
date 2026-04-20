import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Navigation, Award, Film } from 'lucide-react';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-[#050505] text-white min-h-screen" ref={containerRef}>
      
      {/* ----------------- SECTION 1: HERO (Dynamics) ----------------- */}
      <section className="layout-70-30 relative">
        <div className="visual-section">
          <img src="/empower_youth_hero.png" alt="Film Crew on Set" className="visual-image" />
          <div className="visual-overlay"></div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 left-12 lg:bottom-24 lg:left-24 max-w-xl z-20"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Empower<span className="accent-text">Youth</span></h1>
            <p className="text-xl text-gray-300">Creative Futures Africa Summit - 22 April 2026</p>
          </motion.div>
        </div>
        
        <div className="content-section justify-center relative z-10 glass m-4 lg:m-0 lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-r-0">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-2xl font-bold mb-6 gradient-text">The Converging Dynamics</h2>
            <blockquote className="border-l-4 border-[var(--accent)] pl-4 italic text-gray-300 mb-8">
              "Artificial intelligence (AI) and platform economics are reshaping global creative production, creating a critical window for African interests..."
            </blockquote>
            <p className="text-sm text-gray-400 mb-6">
              The convergence of youth demographic advantage (Africa's median age under 20 years), technological access, and cultural assets creates unprecedented transformation potential.
            </p>
            <button className="btn mt-4">
              <Play className="w-4 h-4 mr-2" /> Watch Insight
            </button>
          </motion.div>
        </div>
      </section>

      {/* ----------------- SECTION 2: BREAKING IN (Skills) ----------------- */}
      <section className="layout-70-30 layout-30-70 relative">
        <div className="content-section justify-center z-10">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-8">Breaking Into the <span className="accent-text">Industry</span></h2>
            <p className="text-gray-300 mb-6">Pick one area to start, but understand the basics of all. Soft skills and resilience are just as important as technical capability.</p>
            
            <div className="flex flex-col gap-4">
              <div className="glass p-4">
                <h4 className="font-bold flex items-center text-lg"><CheckCircle className="w-5 h-5 mr-2 accent-text" /> Production</h4>
                <p className="text-sm text-gray-400 mt-2">Etiquette, call sheets, basic camera operation, lighting safety.</p>
              </div>
              <div className="glass p-4 border-l-2 border-[var(--accent)]">
                <h4 className="font-bold flex items-center text-lg"><CheckCircle className="w-5 h-5 mr-2 accent-text" /> Sound & Art</h4>
                <p className="text-sm text-gray-400 mt-2">Boom operating, mic placement, prop sourcing, continuity.</p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="visual-section order-first lg:order-last">
          <img src="/empower_youth_learning.png" alt="Camera Operator" className="visual-image" />
          <div className="visual-overlay" style={{ background: 'linear-gradient(to left, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.8) 100%)' }}></div>
        </div>
      </section>

      {/* ----------------- SECTION 3: ENTRY JOBS & MATRIX ----------------- */}
      <section className="p-6 lg:p-16 max-w-7xl mx-auto">
        <motion.div
             initial={{ opacity: 0, y: 40 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
             className="glass p-8 lg:p-12"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Gets You <span className="accent-text">Hired</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Practical experience beats formal training – the strategy is to use both. No one asks for your certificate on set.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="matrix-table min-w-[700px]">
              <thead>
                <tr>
                  <th>Factor</th>
                  <th>Formal Training</th>
                  <th>Practical Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-semibold">Gets you in the door</td>
                  <td className="text-gray-400">Sometimes, for internships at big studios</td>
                  <td className="text-gray-400">Almost always. Producer cares if you survived wrapped times.</td>
                </tr>
                <tr>
                  <td className="font-semibold">Teaches you</td>
                  <td className="text-gray-400">Theory, history, safe failing, gear access</td>
                  <td className="text-gray-400">Set etiquette, pressure, problem-solving</td>
                </tr>
                <tr>
                  <td className="font-semibold">Industry View</td>
                  <td className="text-gray-400">Nice to have</td>
                  <td className="text-gray-400 text-[var(--accent)] font-semibold">"Must have"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass p-6 hover:border-[var(--accent)] transition-colors">
              <Film className="w-8 h-8 mb-4 accent-text" />
              <h3 className="text-xl font-bold mb-2">Runner / PA</h3>
              <p className="text-sm text-gray-400">Coffee, lockups, driving. You see every department. Contact Joburg production houses for gig.</p>
            </div>
            <div className="glass p-6 hover:border-[var(--accent)] transition-colors">
              <Navigation className="w-8 h-8 mb-4 accent-text" />
              <h3 className="text-xl font-bold mb-2">Camera Trainee</h3>
              <p className="text-sm text-gray-400">Load batteries, carry cases, learn from 2nd AC. Contact rental houses.</p>
            </div>
            <div className="glass p-6 hover:border-[var(--accent)] transition-colors">
              <Award className="w-8 h-8 mb-4 accent-text" />
              <h3 className="text-xl font-bold mb-2">Art Department</h3>
              <p className="text-sm text-gray-400">Paint sets, buy props, continuity. DM local art directors to help.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ----------------- SECTION 4: NO BARRIERS ----------------- */}
      <section className="layout-70-30 layout-30-70 relative min-h-[70vh]">
        <div className="visual-section order-last lg:order-first h-[40vh] lg:h-auto">
          <img src="/empower_youth_success.png" alt="Editing Suite Collaboration" className="visual-image" />
          <div className="visual-overlay" style={{ background: 'linear-gradient(to right, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.8) 100%)' }}></div>
        </div>
        
        <div className="content-section justify-center z-10 glass m-4 lg:m-0 lg:rounded-none lg:border-t-0 lg:border-b-0 lg:border-l-0">
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">No More <span className="accent-text">Barriers</span></h2>
            <p className="text-gray-300 mb-6">Entering the industry now has less barrier of entry if you are determined and focused.</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 accent-text mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400"><strong className="text-white">Phone + Free Software:</strong> Shoot a 1-min short monthly. Post to TikTok/YouTube.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 accent-text mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400"><strong className="text-white">48 Hour Film Project:</strong> Global competition to write/shoot/edit in 48hrs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 mr-3 accent-text mt-1 flex-shrink-0" />
                <span className="text-sm text-gray-400"><strong className="text-white">NFVF Funding:</strong> R100k-R200k grants for 18-35 yr olds for shorts.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>
      
      <footer className="text-center py-8 border-t border-[var(--border-color)] text-gray-500 text-sm">
        <p>© 2026 SA Film Academy • Creative Futures Africa Summit • Built by Ndeko Holdings</p>
      </footer>
    </div>
  );
}
