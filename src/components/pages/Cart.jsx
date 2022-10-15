import ItemList from "../Cart/itemList"

var items = [
  {
  id: "1",
  name: "sdfsd",
  amount: 3
},
  {
  id: "2",
  name: "ugh",
  amount: 3.5
},
]


function Cart() {
    return <section>
      <h1 style={{margin: "5% 0 5% 5%"}} >Cart</h1>
      <ItemList items={items}/>
    </section>;
  }
  
  export default Cart;
  