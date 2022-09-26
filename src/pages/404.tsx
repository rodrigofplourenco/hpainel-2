import Link from 'next/link'
import Default from '../layouts/Default';

function FourOhFour() {
  return (
    <Default>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-2xl'>404</h1>
        <h2 className='text-l'>Esta página ainda não foi adicionada.</h2>
 
        <Link href="/painel">
          <a className='mt-4 border-b text-sm border-blue-500 text-blue-500'>
            Voltar para o painel
          </a>
        </Link>
      </div>
    </Default>
  )
}

export default FourOhFour;