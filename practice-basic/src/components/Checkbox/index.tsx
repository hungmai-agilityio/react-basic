interface CheckboxProps {
  label?: string;
  htmlFor?: string;
}

const Checkbox = ({ label, htmlFor }: CheckboxProps) => {
  return (
    <div className="flex items-center gap-3 text-xs">
      <input
        type="checkbox"
        id={htmlFor}
        className="w-4 h-4 accent-orange-550"
      />
      <label htmlFor={htmlFor} className="text-sm">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
