interface LabelProps {
  value: string;
}

const Label = (props: LabelProps) => {
  return <label className="mb-4 block text-gray-700 text-sm font-bold">{props.value}</label>;
};

export default Label;
