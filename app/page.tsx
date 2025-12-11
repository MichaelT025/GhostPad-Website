export default function Home() {
  return (
    <main className="min-h-screen bg-ghost-black">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-cyan bg-clip-text text-transparent">
            GhostPad
          </h1>
          <p className="text-2xl text-ghost-gray mb-8">
            Your Invisible AI Assistant
          </p>
          <p className="text-lg text-ghost-light max-w-2xl mx-auto">
            Lightweight Windows desktop app providing real-time AI assistance through a translucent overlay.
            Multi-provider LLM support, instant screen capture, privacy-first architecture.
          </p>
        </div>
      </div>
    </main>
  );
}
