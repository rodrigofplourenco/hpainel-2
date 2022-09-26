import navBar from "../utils/navBar";
import Alert from "./Alert"; 

const Nav = () => {
  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="py-4 px-3 bg-blue-500 h-full flex flex-col shadow-2xl">
        <div className="flex items-center justify-center  py-10">
          <img src="/images/logo.png" alt="Logo" />
        </div>

        <ul className="space-y-2">
          {navBar.map((navItem, index) => (
            <li key={index}>
              <a href={navItem.path} className="flex items-center p-2 text-base font-normal text-white rounded-lg hover:bg-white hover:text-blue-500">
                  <navItem.icon />
                  <span className="ml-3">{ navItem.name }</span>
              </a>
            </li>
          ))}
        </ul>

        <Alert 
          title="Beta"
          message="Bem-vindo ao novo HPainel, lembre-se que ainda estamos em fase beta, qualquer erro não exite em contactar a respetiva equipe."
          pathText="HiSkell"
          pathUrl="https://github.com/rodrigofplourenco"
        />
      </div>
    </aside>
  )
}

export default Nav;
