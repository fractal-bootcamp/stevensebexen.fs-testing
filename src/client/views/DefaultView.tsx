import { SetViewFunc, View } from "../App"

interface DefaultViewProps {
  setView: SetViewFunc
}
export function DefaultView(props: DefaultViewProps) {
  return (
    <div className='flex flex-row w-screen h-screen text-white text-5xl select-none'>
      <div
        className='flex flex-1 basis-1/2 bg-gradient-to-t from-[#121212] to-[#585858] hover:opacity-90 transition-opacity justify-center items-center'
        onClick={() => props.setView(View.GAMES)}
      >
        <p>all games</p>
      </div>
      <div
        className='flex flex-1 basis-1/2 bg-gradient-to-t from-[#121212] to-[#585858] hover:opacity-90 transition-opacity justify-center items-center'
        onClick={() => props.setView(View.FAVORITES)}
      >
        <p>favorites</p>
      </div>
    </div>
  )
}