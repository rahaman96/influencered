// import React, { useState } from 'react';

// function Counter() {
//     const [counter1, setCounter1] = useState(0);
//     const [counter2, setCounter2] = useState(0);
//     const [counter3, setCounter3] = useState(0);
//     const [counter4, setCounter4] = useState(0);
//     const [counter5, setCounter5] = useState(0);
//     const [counter6, setCounter6] = useState(0);

//     const updateCounter = (id, count) => {
//         switch (id) {
//             case 1:
//                 setCounter1(count);
//                 break;
//             case 2:
//                 setCounter2(count);
//                 break;
//             case 3:
//                 setCounter3(count);
//                 break;
//             case 4:
//                 setCounter4(count);
//                 break;
//             case 5:
//                 setCounter5(count);
//                 break;
//             case 6:
//                 setCounter6(count);
//                 break;
//             default:
//                 break;
//         }
//     };

//     return (
//         <div>
//             <button onClick={() => updateCounter(1, counter1 + 1)}>Counter 1: {counter1}</button>
//             <button onClick={() => updateCounter(2, counter2 + 1)}>Counter 2: {counter2}</button>
//             <button onClick={() => updateCounter(3, counter3 + 1)}>Counter 3: {counter3}</button>
//             <button onClick={() => updateCounter(4, counter4 + 1)}>Counter 4: {counter4}</button>
//             <button onClick={() => updateCounter(5, counter5 + 1)}>Counter 5: {counter5}</button>
//             <button onClick={() => updateCounter(6, counter6 + 1)}>Counter 6: {counter6}</button>
//         </div>
//     );
// }

// export default Counter;




import React, { useState } from 'react';

function Counter() {
  const [counters, setCounters] = useState({
    counter1: 0,
    counter2: 0,
    counter3: 0,
    counter4: 0,
    counter5: 0,
    counter6: 0,
  });

  const updateCounter = (id, action) => {
    setCounters(prevCounters => {
      const counter = prevCounters[`counter${id}`];

      if (action === 'increment') {
        return {
          ...prevCounters,
          [`counter${id}`]: counter + 1,
        };
      } else if (action === 'decrement') {
        return {
          ...prevCounters,
          [`counter${id}`]: counter > 0 ? counter - 1 : 0,
        };
      }

      return prevCounters;
    });
  };

  return (
    <div>
      <button onClick={() => updateCounter(1, 'increment')}>Counter 1 (+): {counters.counter1}</button>
      <button onClick={() => updateCounter(1, 'decrement')}>Counter 1 (-)</button>
      <button onClick={() => updateCounter(2, 'increment')}>Counter 2 (+): {counters.counter2}</button>
      <button onClick={() => updateCounter(2, 'decrement')}>Counter 2 (-)</button>
      <button onClick={() => updateCounter(3, 'increment')}>Counter 3 (+): {counters.counter3}</button>
      <button onClick={() => updateCounter(3, 'decrement')}>Counter 3 (-)</button>
      <button onClick={() => updateCounter(4, 'increment')}>Counter 4 (+): {counters.counter4}</button>
      <button onClick={() => updateCounter(4, 'decrement')}>Counter 4 (-)</button>
      <button onClick={() => updateCounter(5, 'increment')}>Counter 5 (+): {counters.counter5}</button>
      <button onClick={() => updateCounter(5, 'decrement')}>Counter 5 (-)</button>
      <button onClick={() => updateCounter(6, 'increment')}>Counter 6 (+): {counters.counter6}</button>
      <button onClick={() => updateCounter(6, 'decrement')}>Counter 6 (-)</button>
    </div>
  );
}

export default Counter;
