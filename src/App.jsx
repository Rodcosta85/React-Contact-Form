import React, { useState } from 'react';

import FirstName from './FirstName';
import SecondName from './SecondName';
import Email from './Email';
import Radios from './Radios';
import Message from './Message';
import Checkbox from './Checkbox';



function App() {

  // EMAIL LOGIC
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const handleEmailChange = (value) => {
    setEmail(value);
    setIsEmailValid(emailRegex.test(value));
  };

  // FIRST NAME LOGIC
  const [first, setFirst] = useState('');
  const [isFirstNameEmpty, setIsFirstNameEmpty] = useState(false);
  const handleFirstNameChange = (value) => {
    setFirst(value);
    setIsFirstNameEmpty(value.trim() === '');
  };

  // LAST NAME LOGIC
  const [last, setLast] = useState('');
  const [isLastNameEmpty, setIsLastNameEmpty] = useState(false);
  const handleLastNameChange = (value) => {
    setLast(value);
    setIsLastNameEmpty(value.trim() === '');
  };

  const [message, setMessage] = useState('');
  const [isMessageEmpty, setIsMessageEmpty] = useState(false);
  const handleMessageChange = (value) => {
    setMessage(value);
    setIsMessageEmpty(value.trim() === '');
  };


  // FOR THE RADIOS
  const [selected, setSelected] = useState('');
  const [isReallySelected, setIsReallySelected] = useState(false);
  
  // FOR THE CHECKBOX
  const [checked, setChecked] = useState('');
  const [isReallyChecked, setIsReallyChecked] = useState(false);
  

  const handleSubmit = (e) => {  // "e" is the event
    e.preventDefault();  // this function prevents the button from refreshing the page everytime it's clicked. Remember that we have to pass the "onClick" attribute to the button tag
    
    const isEmailValidNow = emailRegex.test(email);
    const isFirstNameEmptyNow = first.trim() === '';
    const isLastNameEmptyNow = last.trim() === '';
    const isMessageEmptyNow = message.trim() === '';
    const isRadioSelectedNow = selected === '';
    const isCheckboxClicked = checked === '';


    setIsEmailValid(isEmailValidNow);
    setIsFirstNameEmpty(isFirstNameEmptyNow);
    setIsLastNameEmpty(isLastNameEmptyNow);
    setIsMessageEmpty(isMessageEmptyNow);
    setIsReallySelected(isRadioSelectedNow);
    setIsReallyChecked(isCheckboxClicked);
  };


  return (
    <section className='bg-lightGreen w-[100vw] h-[100vh] flex justify-center items-center'>
      <div className='rounded-[12px] h-min w-[600px] p-8 bg-white'>

        <h1 className='text-[30px] text-green-950 font-semibold mb-6'>Contact Us</h1>
        <form onSubmit={handleSubmit} id="form">

          <div className='flex flex-row justify-center mb-6'>
            {/* FIRST NAME */}
            <FirstName value={first} firstChange={handleFirstNameChange} isEmpty={isFirstNameEmpty} />

            {/* SECOND NAME */}
            <SecondName value={last} lastChange={handleLastNameChange} isEmpty={isLastNameEmpty} />
          </div>

          {/* EMAIL INPUT */}
          <Email value={email} emailChange={handleEmailChange} isValid={isEmailValid} />

          <div className='mt-6 mb-6'>
            {/* RADIO INPUTS */}
            <Radios value={selected} radioChange={setSelected} isChecked={isReallySelected} />
          </div>

          {/* TEXT AREA */}
          <Message value={message} messageChange={handleMessageChange} isEmpty={isMessageEmpty} />

          <div className='mt-3 mb-10'>
            {/* FINAL CHECKBOX */}
            <Checkbox value={checked} checkboxChange={setChecked} isChecked={isReallyChecked} />
            {/* usando somente a função do estado (setChecked) a gente ja consegue fazer as alterações no estado em si propriamente */}
          </div>



        </form>
        <button
          type='submit'
          onClick={handleSubmit}
          className='bg-mediumGreen text-white font-semibold w-[536px] h-12 rounded-[10px] hover:bg-hoverMedium'>
          Submit
        </button>
      </div>

    </section>
  )
}

export default App
