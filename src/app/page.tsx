export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            🍺 PubCrawl Architect
          </h1>
          <p className="text-xl text-gray-600">
            Plan the perfect pub crawl with your friends
          </p>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">📍 Find Venues</h2>
            <p className="text-gray-600">
              Search and discover the best pubs and bars in your area
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">🗺️ Plan Route</h2>
            <p className="text-gray-600">
              Optimize your crawl route for maximum fun and minimum walking
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-3">👥 Share & Track</h2>
            <p className="text-gray-600">
              Invite friends and keep everyone on the same page
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition">
            Start Planning Your Crawl
          </button>
        </div>
      </div>
    </main>
  )
}
