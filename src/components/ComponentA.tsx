import { useUserStore } from '../store/counterStore';

const ComponentA = () => {


    const count = useUserStore((state) => state.count);
    const multiply = useUserStore((state) => state.multiply);

    
    return (
        <>
            <p>This is component A ,count- {count}</p>
            <button onClick={multiply}>Multiply with 2</button>
        </>
    )
};

export default ComponentA