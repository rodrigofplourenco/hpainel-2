import type { NextPage } from 'next'
import Link from 'next/link'

const Login: NextPage = () => {
  return (
    <div className='flex justify-center items-center h-full bg-blue-600'>

      <div className="p-4 w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8">
        <form className="space-y-6" action="#">
          <h5 className="text-xl font-medium text-gray-900">HPainel</h5>
          
          <div>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">Seu usuário</label>
            
            <input type="username" name="username" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="HiSkell" required />
          </div>

          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Sua senha</label>
            
            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>

          <div className="flex items-start">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300" required />
              </div>

              <label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900">
                Lembrar me
              </label>
            </div>

            <a href="#" className="ml-auto text-sm text-blue-700 hover:underline">Esqueceu a senha?</a>
          </div>

          <Link href="/painel">
            <button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Acessar
            </button>
          </Link>


          <div className="text-sm font-medium text-gray-500">
            Não tem conta? 
            <a href="https://habbletxd.com.br" className="text-blue-700 hover:underline ml-2">
              Entre agora na equipe!
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
