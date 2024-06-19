import { View } from "../App"

interface DefaultViewProps {
  onViewSelect: (view: View) => void;
}
export function DefaultView(props: DefaultViewProps) {
  return (
    <div className='flex flex-row w-screen h-screen'>
      <div className='flex-1 basis-1/2 bg-gradient-to-t from-[#121212] to-[#585858] hover:opacity-90 transition-opacity'>
      </div>
      <div className='flex-1 basis-1/2 bg-gradient-to-t from-[#121212] to-[#585858] hover:opacity-90 transition-opacity'>
      </div>
    </div>
  )
}