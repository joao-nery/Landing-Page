import heroImage from '../../Images/heroimage.png'

export function HeroImage() {
  return (
    <div className="h-96 flex  justify-center items-center ">
      <div className="w-2/4 md:w-2/4 lg:1/3">
        <h1 className="font-bold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">Nós criamos <b className='text-red-400'>soluções</b> para o seu negocio</h1>
        <h2 className="text-sm lg:text-lg xl:text-xl text-gray-500 mt-5">Nossa equipe está atenta às tendências e tecnologias emergentes para garantir que suas campanhas de marketing permaneçam de ponta</h2>
        <div className="w-1/2 md:w-2/3 lg:1/3">
        <button 
          className="p-2 text-xs rounded-lg mt-5 bg-red-300 text-white hover:bg-red-400 font-normal sm:w-28 sm:h-12 sm:text-lg"
          style={{boxShadow: '0px 4px 5px 0px rgba(0,0,0,0.3)'}}
        >Saiba mais</button>
      </div>
      </div>
      <picture>
        <img 
          src={heroImage} 
          alt="hero image"
          height='0px'
          width='150px'
          className='sm:w-64'
        />
      </picture>
      
    </div>
  );
}
