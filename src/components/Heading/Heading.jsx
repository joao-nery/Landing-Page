import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  
} from "@/components/ui/carousel"

export function Heading() {
  
  return (
    <main className="mb-12">
      <div className="h-10 mt-10 flex flex-col justify-center items-center text-xl">
        <h1 className="w-2/3 text-center">O que os <b className="text-red-400">Clientes</b> dizem!</h1>
        <p className="text-xs text-center w-2/3 text-gray-400">Veja como nossa Agencia de marketing digital ajuda os clientes a chegarem em seus objetivos.</p>
      </div>

      <Carousel>
        <CarouselContent className='mt-5 '>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center p-5">
              <div 
                className="border-2 w-72 rounded-xl p-5  cursor-pointer"
                style={{boxShadow: '0px 5px 2px 2px rgba(0,0,0,0.2)'}}
              >
                  <div>
                    <div className="flex">
                      <div
                      className="w-10 h-10 rounded-full bg-gray-300"
                      ></div>
                      <div className="text-left ml-2 h-max">
                        <h3 className="text-md font-semibold">Jonh Doe</h3>
                        <p className="text-sm relative bottom-2 mb-2 text-gray-400">Executive Ceo</p>
                      </div>
                    </div>
                    <p className="text-xs text-left text-gray-400">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                  </div>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center  p-5">
                <div 
                  className="border-2 w-72 rounded-xl p-5 cursor-pointer"
                  style={{boxShadow: '0px 5px 2px 2px rgba(0,0,0,0.2)'}}
                >
                    <div>
                      <div className="flex">
                        <div
                        className="w-10 h-10 rounded-full bg-gray-300"
                        ></div>
                        <div className="text-left ml-2 h-max">
                          <h3 className="text-md font-semibold">Jonh Doe</h3>
                          <p className="text-sm relative bottom-2 mb-2 text-gray-400">Executive Ceo</p>
                        </div>
                      </div>
                      <p className="text-xs text-left text-gray-400">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                    </div>
                </div>
              </div>
          </CarouselItem>
          <CarouselItem>
            <div className="flex flex-col justify-center items-center  p-5">
                <div 
                  className="border-2 w-72 rounded-xl p-5 cursor-pointer"
                  style={{boxShadow: '0px 5px 2px 2px rgba(0,0,0,0.2)'}}
                >
                    <div>
                      <div className="flex">
                        <div
                        className="w-10 h-10 rounded-full bg-gray-300"
                        ></div>
                        <div className="text-left ml-2 h-max">
                          <h3 className="text-md font-semibold">Jonh Doe</h3>
                          <p className="text-sm relative bottom-2 mb-2 text-gray-400">Executive Ceo</p>
                        </div>
                      </div>
                      <p className="text-xs text-left text-gray-400">Lorem Ipsumis simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
                    </div>
                </div>
              </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className='hidden' />
        <CarouselPrevious />
      </Carousel>
    </main>
  );
}


