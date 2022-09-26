import { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';

interface IAlertProps {
  title: string;
  message: string;
  pathUrl: string;
  pathText: string;
}

const Alert = (props: IAlertProps) => {
  const [active, setActive] = useState(true);

  const styles = {
    display: active ? 'block' : 'none'
  }

  return (
    <div id="dropdown-cta" className="p-4 mt-6 bg-blue-50 rounded-lg dark:bg-blue-900" role="alert" style={styles}>
      <div className="flex items-center mb-3">
        <span className="bg-orange-100 text-orange-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900">
         {props.title}
        </span>
        
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-blue-50 text-blue-900 rounded-lg focus:ring-2 focus:ring-blue-400 p-1 hover:bg-blue-200 inline-flex h-6 w-6 dark:bg-blue-900 dark:text-blue-400 dark:hover:bg-blue-800" data-collapse-toggle="dropdown-cta" aria-label="Close">
          <span className="sr-only">Fechar</span>
          <FaWindowClose onClick={() => setActive(false)} />
        </button>
      </div>
      <p className="mb-3 text-sm text-blue-900 dark:text-blue-400">
        { props.message }
      </p>

      <a className="text-sm text-blue-900 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300" href={props.pathUrl} target="_blank" rel="noreferrer">
        { props.pathText }
      </a>
    </div>
  )
}

export default Alert;
