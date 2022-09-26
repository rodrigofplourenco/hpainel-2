import Link from 'next/link'
import Default from '../layouts/Default';

function Error() {
  return (
    <Default>
      <div className='flex flex-col justify-center items-center h-full'>
        <h1 className='text-2xl'>Oops!</h1>
        <h2 className='text-l'>Ocorreu algum erro.</h2>
 
        <Link href="/painel">
          <a className='mt-4 border-b text-sm border-blue-500 text-blue-500'>
            Voltar para o painel
          </a>
        </Link>
      </div>
    </Default>
  )
}

export default Error;