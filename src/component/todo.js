import React, {useState} from 'react'
import todo from "../images/todo3.jpg";
import "../App.css";
import 'font-awesome/css/font-awesome.min.css';

const Todo = () => {

  const [inputData, setInputData] = useState('');
  const [items, setItems] = useState([]);
  const addItem = () => {
      if(!inputData){

      }else{      
        setItems([...items,inputData]);
        setInputData('')  
      }      
  }

  //delete items
  const deleteItem = (id) => {
    //console.log(id);
    const updateditems = items.filter((elem, ind) => {
      return ind !== id;
    });

    setItems(updateditems);
  }

  //remove All
  const removeAll = () => {
    setItems([]); 
  }

  return (
    <>
      <div className="main-div">
      <div className="child-div">
      	<figure>
      		<img src={todo} alt="todologo" />
            <figcaption>Add your list here</figcaption>
      	</figure>

        <div className="addItems">
            <input type="text" placeholder="Add Items.."
            value={inputData} 
            onChange={(e) => setInputData(e.target.value) } 
            />                    
            <i className="fa fa-plus-circle fa-2x add-btn" aria-hidden="true" 
            title="Add Item" onClick={addItem}></i>
        </div>

        <div className="showItems">

          {
            items.map((elem, ind)=> {
              return (
                  <div className="eachItem" key={ind}> 
                      <h3>{elem}</h3>
                      <i className="fa fa-trash fa-2x add-btn" aria-hidden="true" 
                      title="Delete Item" onClick = {() =>deleteItem(ind)}></i>
                  </div>
                )
            })
          }

          
        </div>

      {/*clear all button*/}
        <div className="showItems">
          <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}><span>CHECK LIST</span></button>
        </div>


      </div>
      </div>
    </>
  )
}

export default Todo