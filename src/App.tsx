import ComponentA from './components/ComponentA';
import { useUserStore } from './store/counterStore';


const App = () => {

  const count = useUserStore((state) => state.count);
  const increment = useUserStore((state) => state.increment);
  const decrement = useUserStore((state) => state.decrement);



  return (
    <>
      <div className="">
        <h1>{count}</h1>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <ComponentA />
      </div >
    </>
  )
}

export default App;