
import styled from 'styled-components';

interface InputProps {
    placeholder: string;
    onChange: (e: any) => void;
    value: string;
    textArea?: boolean;
}

const Input = (props: InputProps) => {
  return (
    <StyledWrapper className='w-[75%]'>
      {props.textArea ? (
        <textarea placeholder={props.placeholder} onChange={props.onChange} value={props.value} className="input textArea" />
      ) : (
        <input placeholder={props.placeholder} onChange={props.onChange} value={props.value} className="input" />
      )}
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .input {
    border: 2px solid transparent;
    width: 100%;
    height: 2.5em;
    padding-left: 0.8em;
    outline: none;
    overflow: hidden;
    background-color: #f3f3f3;
    border-radius: 10px;
    transition: all 0.5s;
  }

  .textArea {
    height: 8em;
    resize: none;
  }

  .input:hover,
  .input:focus {
    border: 2px solid #4a9dec;
    box-shadow: 0px 0px 0px 7px rgb(74, 157, 236, 20%);
    background-color: white;
  }
`;

export default Input;
