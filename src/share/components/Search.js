import React,{useContext,useState} from "react";
import Card from "../UIElements/Card";
import ProductContext from "../../context/productContext";

const Search = props => {
    const productContext = useContext(ProductContext);
    const {filterProduct, clearFilter} = productContext;

    const [search, setSearch] = useState('');

    const handlerEvent = (event) => {
      setSearch(event);

      if(search !== ''){
        filterProduct(search);
      }else{
        clearFilter();
      }
      //props.handlersearch(event);
    };

    return (
      <Card>
        <form>
          <input
            type={"search"}
            name="search"
            id="search"
            className="relative peer z-10 bg-transparent w-full h-12 rounded-full border cursor-pointer outline-none
            pl-12 focus:w-full focus:border-orange-300 focus:courser-text focus:pl-16"
            value={search}
            onChange={(e) => handlerEvent(e.target.value)}
            placeholder="Search by name"
          />
        </form>
      </Card>
    );
};

export default Search;