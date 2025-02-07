import React from 'react'

const Team = () => {
  return (
    <div>
            <div className="font-sans bg-gray-100 text-gray-900">
      {/* Header Section */}
      <header className="bg-gray-800 text-white p-6">
        <nav className="flex justify-center space-x-6">
          <a href="#team" className="hover:text-yellow-500">Meet the Team</a>
          <a href="#services" className="hover:text-yellow-500">Services</a>
          <a href="#contact" className="hover:text-yellow-500">Contact Us</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="bg-gray-200 text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Transforming Businesses with AI-Powered Strategies</h1>
        <p className="text-xl mb-6">We are a team of visionary digital marketers, designers, and tech experts committed to growing your business.</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400">
          <a href="#contact">Let's Talk</a>
        </button>
      </section>

      {/* Meet the Team Section */}
      <section id="team" className="bg-white py-16">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
    <p className="mb-12">Our team is made up of SEO experts, content creators, developers, and brand strategists dedicated to helping your business grow.</p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <div className="text-center">
        <img 
          className="w-36 h-36 rounded-full mx-auto mb-4 object-cover" 
          src="" 
          alt="" 
        />
        <h3 className="text-xl font-semibold">Chukwudumebi Nwosu</h3>
        <p className="text-lg">Founder & Lead Strategist</p>
      </div>
      <div className="text-center">
        <img 
          className="w-36 h-36 rounded-full mx-auto mb-4 object-cover" 
          src="" 
          alt="" 
        />
        <h3 className="text-xl font-semibold">Solomon Akpas</h3>
        <p className="text-lg">Web Development Lead</p>
      </div>
      <div className="text-center">
        <img 
          className="w-36 h-36 rounded-full mx-auto mb-4 object-cover" 
          src="" 
          alt="" 
        />
        <h3 className="text-xl font-semibold">Soji Babatunde</h3>
        <p className="text-lg">Graphics and Video Editor</p>
      </div>
    </div>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="service-card">
              <h3 className="text-xl font-semibold">SEO</h3>
              <p>Optimizing your website to rank higher and attract more organic traffic.</p>
            </div>
            <div className="service-card">
              <h3 className="text-xl font-semibold">Content Creation</h3>
              <p>Engaging, high-quality content that speaks to your target audience.</p>
            </div>
            <div className="service-card">
              <h3 className="text-xl font-semibold">Web Development</h3>
              <p>Building custom websites with a focus on design and user experience.</p>
            </div>
            <div className="service-card">
              <h3 className="text-xl font-semibold">Brand Strategy</h3>
              <p>Creating a strong, consistent brand identity that stands out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="bg-gray-800 text-white py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
          <p className="mb-4">📞 Phone: +234-810-582-6279, +234-807-799-3190</p>
          <p className="mb-4">📩 Email: <a href="mailto:waiteccng@outlook.com" className="text-yellow-500">waiteccng@outlook.com</a></p>
          <p className="mb-4">📌 Office: Lagos, Nigeria</p>
          <p className="mb-6">🌐 Website: <a href="http://www.waitecc.com.ng" className="text-yellow-500">www.waitecc.com.ng</a></p>
          <button className="bg-yellow-500 text-white px-6 py-3 rounded-md hover:bg-yellow-400">
            <a href="mailto:waiteccng@outlook.com">Get in Touch</a>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="text-center">
          <p>🚀 Let's Elevate Your Brand with AI-Powered Digital Excellence!</p>
        </div>
      </footer>
    </div>

    </div>
  )
}

export default Team