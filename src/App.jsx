import React,{useState} from 'react';
import firstcomefirstserve from './assets/first-come-first-serve.png';
import mypicture from './assets/mypicture.jpg';

const App = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">

   {/* Header */}
<header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
  
  {/* Logo */}
  <h1 className="text-2xl font-bold">Gave Dela Cerna</h1>

  {/* Desktop Menu */}
  <nav className="hidden md:block">
    <ul className="flex gap-6">
      <li><a href="#about" className="hover:text-blue-600">About</a></li>
      <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
      <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
      <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
    </ul>
  </nav>

  {/* Mobile Hamburger Button */}
  <button 
    className="md:hidden text-3xl"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  {/* Mobile Menu Dropdown */}
  {menuOpen && (
    <nav className="absolute top-20 right-6 bg-white shadow-lg rounded-lg p-4 md:hidden">
      <ul className="flex flex-col gap-4 text-right">
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a></li>
        <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  )}

</header>


      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-r from-blue-300 to-purple-300">
        <h2 className="text-5xl font-bold mb-4">Frontend Developer & React Enthusiast</h2>
        <p className="text-lg max-w-xl mb-6">
          I build responsive, interactive web applications using modern technologies like React and Tailwind CSS.
        </p>
        <a 
          href="#contact" 
          className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Contact Me
        </a>
      </section>

  

<section id="about" className="py-20 px-6 max-w-4xl mx-auto">
  <div className="flex flex-col md:flex-row items-center gap-8">

    {/* Text Section */}
    <div className="flex-1 text-center md:text-left">
      <h3 className="text-3xl font-bold mb-4">About Me</h3>
      <p className="text-gray-700">
        I am BSIT irregular student in Cordova Public Collage, I'm a Lazy person and only work 
        under pressure. I have a passion for creating beautiful and functional web applications. 
        With a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic 
        user interfaces using React. When I'm not coding, I enjoy exploring new technologies and 
        contributing to open-source projects.
      </p>
    </div>

    {/* Image Section */}
    <img 
      src={mypicture}
      alt="mypicture"
      className="
        w-48 h-48 md:w-70 md:h-70 
        object-cover rounded-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.5)]
        hover:shadow-[0_25px_50px_rgba(0,0,0,0.75)]
        transition transform hover:-translate-y-2
      "
    />
  </div>
</section>


{/* Skills Section */}
<section id="skills" className="py-20 px-6 bg-white max-w-4xl mx-auto">
  <h3 className="text-3xl font-bold mb-10 text-center">Skills</h3>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">HTML</h4>
      <p className="text-gray-600 text-sm">Experienced</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">CSS / Tailwind</h4>
      <p className="text-gray-600 text-sm">Proficient</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">JavaScript</h4>
      <p className="text-gray-600 text-sm">Intermediate</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">React</h4>
      <p className="text-gray-600 text-sm">Intermediate</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">Git / GitHub</h4>
      <p className="text-gray-600 text-sm">Intermediate</p>
    </div>

    <div className="p-4 bg-gray-100 rounded-lg shadow hover:shadow-lg transition">
      <h4 className="font-bold text-lg">UI/UX Basics</h4>
      <p className="text-gray-600 text-sm">Beginner</p>
    </div>
  </div>
</section>



      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">First-Come-First-Serve</h4>
            <p className="text-gray-700 mb-4">FCFS (First-Come, First-Served) is a CPU scheduling algorithm where the first process to arrive is executed first.</p>
            <img src={firstcomefirstserve} alt="" />
            <a href="https://firstcomefirstserve.netlify.app/" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">Project Two</h4>
            <p className="text-gray-700 mb-4">Interactive dashboard built with React and Chart.js.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">Project Three</h4>
            <p className="text-gray-700 mb-4">E-commerce website with Stripe integration.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">Contact Me</h3>
        <p className="mb-6 text-gray-700">Feel free to reach out for collaborations or freelance work.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Name" className="p-3 border rounded"/>
          <input type="email" placeholder="Email" className="p-3 border rounded"/>
          <textarea placeholder="Message" className="p-3 border rounded"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-white shadow-inner mt-10">
        &copy; {new Date().getFullYear()} John Dela Cerna. All rights reserved.
      </footer>

    </div>
  );
}

export default App;
