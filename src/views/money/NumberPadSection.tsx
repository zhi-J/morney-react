import styled from 'styled-components';
import React, {useState} from 'react';

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  >.output{
    background: white;
    font-size: 36px;
    line-height: 72px;
    text-align: right;
    padding: 0 16px;
    box-shadow: inset 0 -5px 5px -5px rgba(0,0,0,0.25),
                inset 0 5px 5px -5px rgba(0,0,0,0.25);
  }
  >.pad{
    >button{
      float: left;
      width: 25%;
      height: 64px;
      border: none;
      &.OK{
        height: 128px;
        float: right;
      }
      &.zero{
        width: 50%;
      }
      &:nth-child(1){
        background: #F2F2F2;
      }
      &:nth-child(2),
      &:nth-child(5){
        background: #E0E0E0;
      }
      &:nth-child(3),
      &:nth-child(6),
      &:nth-child(9){
        background: #D3D3D3;
      }
      &:nth-child(4),
      &:nth-child(7),
      &:nth-child(10){
        background: #C1C1C1;
      }
      &:nth-child(8),
      &:nth-child(11),
      &:nth-child(13){
        background: #B8B8B8;
      }
      &:nth-child(12){
        background: #9A9A9A;
      }
      &:nth-child(14){
        background: #A9A9A9;
      }
    }
  }
`;
type Props = {
  value: number,
  onChange: (value: number)=>void
  onOk?: ()=>void
}
const NumberPadSection: React.FunctionComponent<Props> = (props)=>{
  // const output = props.value.toString()
  const [output, _setOutput] = useState(props.value.toString())
  const setOutput = (output:string) =>{
    let newOutput
    if(output.length > 16){
      newOutput = output.slice(0, 16)
    }else if(output.length === 0){
      newOutput = '0'
    }else {
      newOutput = output
    }
    _setOutput(newOutput)
    props.onChange(parseFloat(newOutput))
  }
  const onClickButtonWrapper = (e: React.MouseEvent)=>{
    const text = (e.target as HTMLButtonElement).textContent
    if(text === null){return}
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        if(output === '0'){
          setOutput(text)
        }else {
          setOutput(output + text)
        }
        break
      case '.':
        if(output.indexOf('.') >= 0){
          return;
        }else {
          setOutput(output + '.')
        }
        break
      case '??????':
        if(output.length === 1){
          setOutput('')
        }else {
          setOutput(output.slice(0,-1))
        }
        break
      case '??????':
        setOutput('')
        break
      case 'OK':
        if(props.onOk){
          props.onOk()
        }
        break
    }
  }
  return(
    <Wrapper>
      <div className="output">{output}</div>
      <div className="pad clearfix" onClick={onClickButtonWrapper}>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>??????</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>??????</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button className="OK">OK</button>
        <button className="zero">0</button>
        <button>.</button>
      </div>
    </Wrapper>
  )
}

export {NumberPadSection}