const TopBar = () => {
  return (
    <nav className="bg-blue-600 text-white border-gray-200 py-3 shadow-2xl">
      <div className="flex flex-wrap justify-between items-center">
        <div className="flex items-center justify-between w-full px-8">
            <h2 className="font-bold text-2xl">Bem-vindo ao HPainel, HiSkell !</h2>

            <button type="button" className="h-12 flex text-sm bg-white rounded-full md:mr-0 focus:ring-4 focus:ring-blue-700">
              <img className="h-full rounded-full" src="https://github.com/rodrigofplourenco.png" alt="Foto" />

              <div className="px-3 my-auto">
                <p className="font-normal text-black">Rodrigo Lourenço</p>
                <span className="text-sm font-extralight text-black">Desenvolvedor</span>
              </div>
            </button>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
