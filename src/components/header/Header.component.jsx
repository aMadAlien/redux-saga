import { useDispatch, useSelector } from "react-redux";
import { initialState } from "../../saga/store";

const Header = () => {
    const loadData = () => {
        return {
            type: "INVOKE_DATA"
        }
    }

    const titles = useSelector(state => state.data);
    const title = Object.values(titles);

    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => {dispatch(loadData()); console.log(title)}}>Logo</button>
            {/* {
            titles.map(val => (
                ))
            } */}
            <div>Title: {title[2]}</div>

        </div>
    )
}

export default Header;