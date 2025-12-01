import React from 'react';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-800">

      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center sticky top-0 z-50">
        <h1 className="text-2xl font-bold">John Dela Cerna</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#about" className="hover:text-blue-600">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          </ul>
        </nav>
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

      {/* About Section */}
      <section id="about" className="py-20 px-6 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="text-gray-700">
          I am BSIT irregular student in Cordova Public Collage, I'm a Lazy person and only work under pressure. I have a passion for creating beautiful and functional web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in building dynamic user interfaces using React. When I'm not coding, I enjoy exploring new technologies and contributing to open-source projects.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-50">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h4 className="font-bold text-xl mb-2">Project One</h4>
            <p className="text-gray-700 mb-4">A responsive React app with Tailwind CSS and API integration.</p>
            <a href="#" className="text-blue-600 hover:underline">View Project</a>
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
