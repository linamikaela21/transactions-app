import { Select, SelectItem } from "@nextui-org/react";

interface SelectInputProps {
  value: { key: string; label: string };
  setValue: (key: string) => void;
  options: { key: string; label: string; Icon?: any }[];
  label: string;
  placeholder: string;
}

export const SelectInput = ({
  value,
  setValue,
  label,
  placeholder,
  options,
}: SelectInputProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Select
        fullWidth
        className="max-w-lg text-medium shadow-md text-lime-500 bg-transparent"
        color="success"
        label={label}
        placeholder={placeholder}
        radius="sm"
        size="md"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-medium">$</span>
          </div>
        }
        value={value.key}
        variant="bordered"
        onSelect={(option) => {
          setValue(option.currentTarget.value);
        }}
      >
        {options.map(({ key, label, Icon }) => (
          <SelectItem
            key={key}
            shouldHighlightOnFocus
            className="text-medium shadow-md text-lime-500 bg-transparent"
            startContent={
              <div className="flex items-center text-medium">{Icon()}</div>
            }
            value={key}
          >
            {label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
};
