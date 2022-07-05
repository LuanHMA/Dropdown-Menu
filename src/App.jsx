import { Header } from './components/Header'
import { Main } from './components/Main'

export default function App(){
  return(
    <div className="font-epilogue overflow-hidden bg-[#f7f4f4] 2xl:w-9/12 2xl:m-auto">
      <Header/>
      <Main/>
    </div>
  )
}