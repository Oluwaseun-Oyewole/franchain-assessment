export const CheckBoxInput = ({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: () => void;
}) => {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className="h-[20px] w-[20px] focus:ring-blue-500 focus:border-blue-500 cursor-pointer"
    />
  );
};
