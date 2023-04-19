import Breath from './ani-components/Breath'
import Flicker from './ani-components/Flicker'
import Jump from './ani-components/Jump'
import Rect from './ani-components/Rect'
import Ripple from './ani-components/Ripple'
import Shake from './ani-components/Shake'

function App() {
  return (
    <div className="flex flex-col items-center pt-5">
      <h1 className="text-2xl tracking-wider font-mono text-slate-400 border border-slate-200 rounded-xl p-2 px-5">
        @micahfang/twx-animate
      </h1>
      <div className="container m-5">
        <Shake />
        <Ripple />
        <Breath />
        <Jump />
        <Flicker />
      </div>
    </div>
  )
}

export default App
