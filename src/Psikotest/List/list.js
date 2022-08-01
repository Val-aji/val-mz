import HeaderList from "./header";
import FooterList from "./footer";
import Middle from "./middle";

function List() {

    return (
        <div id="containerList">
            <HeaderList />
            <Middle />
            
            <FooterList />
        </div>
    )
}

export default List;