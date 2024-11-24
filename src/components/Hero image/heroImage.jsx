export function HeroImage() {
  return (
    <div className="bg-gray-100 h-72 flex justify-center items-center flex-col text-center gap-5 ">
      <div>
        <h1 className="text-5xl font-bold">Title</h1>
        <h2 className="text-lg">Subtitle</h2>
      </div>
      <div className="flex gap-4">
        <button className="h-9 w-16 rounded-md bg-white border-2 border-neutral-400">
          button
        </button>
        <button className="h-9 w-16 rounded-md bg-neutral-700 border-2 border-neutral-400 text-white">
          button
        </button>
      </div>
    </div>
  );
}
