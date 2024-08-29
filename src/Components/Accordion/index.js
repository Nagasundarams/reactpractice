import React, { useState } from 'react';
import data from '../Accordion/data';
import '../Accordion/index.css';


const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
  
    function handlesingleselection(getCurrentId) {
      setSelected(getCurrentId === selected ? null : getCurrentId);
    }
  
    function handleMultiSelection(getCurrentId) {
      let cpyMutiple = [...multiple];
      const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);
  
      console.log(findIndexOfCurrentId);
      if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
      else cpyMutiple.splice(findIndexOfCurrentId, 1);
  
      setMultiple(cpyMutiple);
    }
    return (
        <div className='wrapper'>
            <button onClick={()=>{setEnableMultiSelection(!enableMultiSelection)}}>Enable multiple selection</button>
            <div className='accordian'>
            {data.map((e) => (<div className='item'>
                <div onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(e.id)
                    : () => handlesingleselection(e.id)
                } className='title'>
                <h3>{e.question}</h3>
                <span>+</span></div>
                <div className='content'>
                {enableMultiSelection
                ? multiple.indexOf(e.id) !== -1 && (
                    <div className="acc-content ">{e.answer}</div>
                  )
                : selected === e.id && (
                    <div className="acc-content ">{e.answer}</div>
                  )}
                    </div></div>))}
        </div></div>
    )
}

export default Accordion