import Wave from './components/Wave';

export default function Home() {
  return (
    <main className="min-h-screen  overflow-hidden">
      <div className="flex">
        {Array.from({ length: 65 }, (_, i) => (
          <div className="w-1/2 md:w-1/3 lg:w-1/4" key={i}>
            <Wave height={Math.floor(Math.random() * (250 - 300) + 300)} />
          </div>
        ))}
      </div>
    </main>
  );
}