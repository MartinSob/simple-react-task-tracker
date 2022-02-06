import { useDispatch, useSelector } from "react-redux";
import Button from "../components/Button";
import { decrement, increment } from "../redux/actions/increment";

const ReduxTest = () => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch();

    return (
        <div>
            <header className="header">
                <h1>Redux</h1>
            </header>

            <div>
                <p>Value: {counter}</p>
                <Button color="Green" text="+" onClick={() => { dispatch(increment(1)) }} />
                <Button color="Green" text="-" onClick={() => { dispatch(decrement(1)) }} />
            </div>
        </div>
    )
}

export default ReduxTest;