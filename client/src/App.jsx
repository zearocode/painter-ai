import { BrowserRouter , Routes , Route , Link  } from 'react-router-dom';
import {logo} from './assets/index';
import Hero from './components/hero';
import CreatePost from './components/createPost';


function App() {

  const gitPage = () =>{
      const url = 'https://github.com/';
      window.open(url , '_blank');


  }


  return (
    <BrowserRouter>
      <header className="flex justify-center items-center flex-row w-full ">
        <nav className='flex justify-between items-center w-full mb-10 bg-red-950 h-28 pt-0 mt-0'>
          <div className='w-96 h-28 mb-20 mt-32'>
            <Link to="/">
             <img value={logo} src={logo} alt='Logo' className='object-cover ml-4' />
            </Link>
          </div>
          
        <div className='flex justify-between'>
          <div className='items-center'>

         
        <Link to='/create-post' className='mr-10 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group' target="_blank"><span className="w-48 h-48 rounded rotate-[-40deg] bg-[#6469ff] absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
        <span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">Create</span>
        </Link>

        </div>
        
        
         <div> 
          {/* <button className='p-4 border-white border-2 rounded mr-10 hover:border-blue-500 hover:bg-white hover:text-red-950 ' onClick={gitPage}> Github </button> */}
          <button className='mr-10 relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-white rounded hover:bg-white group' target="_blank" onClick={gitPage}><span className="w-48 h-48 rounded rotate-[-40deg] bg-red-960 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span> 
<span className="relative w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">GitHub</span></button></div>
          </div>

      </nav>

      </header>
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/create-post' element={<CreatePost />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
