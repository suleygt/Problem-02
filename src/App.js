import { useState } from "react"



export default function Discussions() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount((prevCount) = prevCount + 1);
  };
  return (
    <ul className='discussions'>
      <Discussion count={count} incrementCount={incrementCount} />
      <Discussion count={count + 1} incrementCount={incrementCount} />
    </ul>
  )
}

function Discussion({ count, incrementCount}) {
 
  

  return (
    <li className='flex flex-wrap items-center justify-between gap-x-6 gap-y-4 py-5 sm:flex-nowrap'>
    <div>
      <p className='text-sm font-semibold leading-6 text-gray-900'>
        <a href='#' className='hover:underline' onClick={() => incrementCount()}>
          Tartışma konusu {count +1 }
          </a>
      </p>
      <div className='mt-1 flex items-center gap-x-2 text-xs leading-5 text-gray-500'>
        <p>
          <a href='#' className='hover:underline'>
            Namık Korona
          </a>
        </p>
        <svg viewBox='0 0 2 2' className='h-0.5 w-0.5 fill-current'>
          <circle cx={1} cy={1} r={1} />
        </svg>
        <p>
          <time>2 gün önce</time>
        </p>
      </div>
    </div>
  </li>
);
}
