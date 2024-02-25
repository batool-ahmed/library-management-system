import { React, useEffect, useState, useRef, useContext } from 'react';
import ReactTable from '../common/ReactTable';
import { btnsBelowTable, btnsBelowTableNo, tableCols } from '../Constants';
import ReactButton from '../common/ReactButton';
import ButtonsBelowTable from './ButtonsBelowTable';

const Home = () => {
  return (
    <div>
        <ReactTable radioBtnIndex={0} colTitles={tableCols} data={[['hello', 'hello2', 'hi'], ['hello7', 'hello3', 'hi']]}/>
        <ButtonsBelowTable/>
    </div>
  )
}
export default Home;