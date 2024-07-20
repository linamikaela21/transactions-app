import { Select, SelectItem } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SelectInputProps {
  name: string;
  value: string;
  handleChange: (e: any) => void;
  options: { key: string; label: string; Icon?: IconProp }[];
  label: string;
}

export const SelectInput = ({
  name,
  value,
  handleChange,
  label,
  options,
}: SelectInputProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Select
        fullWidth
        className="max-w-lg flex justify-center text-lime-500"
        classNames={{
          label: "text-large",
          errorMessage: "text-large",
          listbox: "bg-gray-100 text-secondary",
          popoverContent: "bg-secondary",
        }}
        color={value ? "success" : "secondary"}
        label={label}
        radius="sm"
        size="lg"
        startContent={
          <div className="pointer-events-none flex items-center">
            <FontAwesomeIcon icon={faDollarSign} />
          </div>
        }
        value={value}
        variant="bordered"
        onChange={(e) => handleChange({ target: { name, value: e.target.value } })}
      >
        {options.map(({ key, label, Icon }) => (
          <SelectItem
            key={key}
            shouldHighlightOnFocus
            className="text-small shadow-md bg-transparent text-secondary"
            startContent={
              Icon ? <FontAwesomeIcon icon={Icon} size="sm" /> : null
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
