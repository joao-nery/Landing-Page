import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { useState } from "react";
import { useEffect } from "react";

const elements = [
  <div key={{}} className="h-full flex items-center justify-center p-5">
    <div 
      className="border-2 rounded-lg p-5 bg-white xl:h-56 w-1/2"
      style={{boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}
    >
      <h3 className="text-lg xl:text-4xl font-semibold text-yellow-500">Seo/Sem</h3>
      <p className="text-xs xl:text-2xl xl:w-2/3 text-gray-400 ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
    </div>
  </div>,

  <div key={{}} className="h-full flex items-center justify-center p-5">
    <div 
      className="border-2 rounded-lg p-5 bg-white xl:h-56 w-1/2"
      style={{boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}
    >
      <h3 className="text-lg font-semibold text-green-500 xl:text-4xl">Marketing Digital</h3>
      <p className="text-xs text-gray-400 xl:text-2xl xl:w-2/3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
    </div>
  </div>,

  <div key={{}} className="h-full flex items-center justify-center p-5">
    <div 
      className="border-2 rounded-lg p-5 bg-white  xl:h-56 w-1/2"
      style={{boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}
    >
      <h3 className="text-lg font-semibold text-indigo-500 xl:text-4xl">Campanha Viral</h3>
      <p className="text-xs text-gray-400 xl:text-2xl xl:w-2/3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
    </div>
  </div>,

  <div key={{}} className="h-full flex items-center justify-center p-5">
  <div 
    className="border-2 rounded-lg p-5 bg-white xl:h-56 w-1/2"
    style={{boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}
  >
    <h3 className="text-lg font-semibold text-red-500 xl:text-4xl">Outros</h3>
    <p className="text-xs text-gray-400 xl:text-2xl xl:w-2/3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s</p>
  </div>
</div>,
];



export function PanelImage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % elements.length);
    }, 2000); // Troca automática a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, []);

  return (
    <main>
      <div className="h-32 xl:h-56 flex justify-center items-center text-xl xl:text-4xl border-2">
        <h1 className="w-2/3 text-center">Nós oferecemos os Melhores <b className="text-red-400">Serviços</b> para você!</h1>
      </div>
      <Carousel className="relative w-full bg-gray-100 overflow-hidden xl:h-64">
        <CarouselContent
          className="flex transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {elements.map((element, index) => (
            <CarouselItem
              key={index}
              className="w-full flex-shrink-0"
            >
              {element}
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </main>
  );
}

