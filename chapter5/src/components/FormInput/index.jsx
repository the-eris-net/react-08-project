import styled from 'styled-components';
import { useState } from 'react';

const Label = styled.label`
  margin-top: 10px;
  font-weight: 600;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 6px;
  border-radius: 6px;
  border: 2px solid green;

  &:invalid {
    border: 2px solid #ccc;
  }
`;

const Error = styled.span`
  display: none;
  color: red;
  font-size: 12px;
`;

const EMPTY_ERROR_MESSAGE = '값이 비어 있습니다';

export default function FormInput({
  name,
  label,
  type = 'text',
  onChange = null,
  errorMessage = null,
  ...props
}) {
  const [status, setStatus] = useState('');

  /*
    badInput : 사용자가 입력한 값이 유효하지 않을 때 발생
    customError : 개발자가 setCustomValidity 메서드를 사용하여 설정한 커스텀 유효성 검사 오류
    patternMismatch : 입력한 값이 지정된 패턴과 일치하지 않을 때 발생
    rangeOverflow : 입력한 값이 허용된 최대값보다 클 때 발생
    rangeUnderflow : 입력한 값이 허용된 최소값보다 작을 때 발생
    stepMismatch : 입력한 값이 지정된 단계와 일치하지 않을 때 발생
    tooLong : 입력한 값이 maxlength 속성에 지정된 최대 길이를 초과할 때 발생
    tooShort : 입력한 값이 minlength 속성에 지정된 최소 길이보다 짧을 때 발생
    typeMismatch : 입력한 값이 지정된 타입과 일치하지 않을 때 발생 (예: 이메일 형식이 아닐 때)
    valid : 입력한 값이 유효할 때 발생
    valueMissing : 필수 입력 필드가 비어 있을 때 발생
  */
  const handleInputChange = (event) => {
    const validity = event.target.validity;

    if (validity.valueMissing) {
      setStatus('valueMissing');
    } else if (validity.typeMismatch) {
      setStatus('typeMismatch');
    } else if (validity.patternMismatch) {
      setStatus('patternMismatch');
    } else if (validity.tooShort) {
      setStatus('tooShort');
    } else if (validity.tooLong) {
      setStatus('tooLong');
    } else {
      setStatus(null);
    }

    if (onChange !== null) {
      onChange(event);
    }
  };

  return (
    <>
      <Label htmlFor={name}>{label}</Label>
      <Input
        type={type}
        id={name}
        name={name}
        onChange={handleInputChange}
        {...props}
      />
      {errorMessage && <Error className="error" style={{ display: status ? 'block' : 'none' }}>{errorMessage} : {status}</Error>}
    </>
  );
}
