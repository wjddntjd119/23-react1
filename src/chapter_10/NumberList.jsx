const numbers = [1, 2, 3, 4, 5];

function NumberList(props){

  const listItems = numbers.map((number)=>
    <li>{number}</li>
  );

  return(
    <ul>{listItems}</ul>
  )
}
export default NumberList;