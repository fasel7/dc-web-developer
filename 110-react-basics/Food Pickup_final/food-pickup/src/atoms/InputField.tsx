import { ChangeEventHandler } from 'react';

interface InputFieldProps {
  id?: string;
  value?: string;
  type: string;
  name: string;
  placeholder?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const InputField = (props: InputFieldProps) => {
  return (
    <input
      id={props.id}
      className="mb-4 w-full block shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={props.type}
      name={props.name}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default InputField;
