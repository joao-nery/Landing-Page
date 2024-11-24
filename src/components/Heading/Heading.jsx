export function Heading() {
  return (
    <section className="h-max border-2 flex flex-col justify-center items-center">
      <article className="mt-10">
        <h3 className="font-bold text-2xl">Heading</h3>
        <h4 className="text-gray-400 text-sm text-center">Subheading</h4>
      </article>
      <div className="flex justify-center p-2 gap-10 mt-10 mb-10 lg:w-3/4">
        <div className="">
          <div className="mb-5">
            <h4 className="font-bold">Title</h4>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint quae, fugit totam hic alias facilis quibusdam
              accusantium ipsa cupiditate voluptates velit incidunt et voluptas
              doloribus
            </p>
          </div>
          <div className="mb-5">
            <h4 className="font-bold">Title</h4>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint quae, fugit totam hic alias facilis quibusdam
              accusantium ipsa cupiditate voluptates velit incidunt et voluptas
              doloribus{" "}
            </p>
          </div>
        </div>
        <div>
          <div className="mb-5">
            <h4 className="font-bold">Title</h4>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint quae, fugit totam hic alias facilis quibusdam
              accusantium ipsa cupiditate voluptates velit incidunt et voluptas
              doloribus{" "}
            </p>
          </div>
          <div>
            <h4 className="font-bold">Title</h4>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur sint quae, fugit totam hic alias facilis quibusdam
              accusantium ipsa cupiditate voluptates velit incidunt et voluptas
              doloribus{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
