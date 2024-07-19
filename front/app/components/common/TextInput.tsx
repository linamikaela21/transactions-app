import { Input } from "@nextui-org/react";

interface TextInputProps {
  value: string;
  setValue: (value: string) => void;
  isInvalid: boolean;
  label: string;
}

export const TextInput = ({
  value,
  setValue,
  isInvalid,
  label,
}: TextInputProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
    <Input
      fullWidth
      isClearable
      className="max-w-lg flex justify-center text-medium"
      color={value ? isInvalid ? "danger" : "success" : "default"}
      errorMessage={`Please enter a valid ${label}`}
      isInvalid={isInvalid}
      label={label}
      size="md"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-medium">T</span>
        </div>
      }
      type="text"
      value={value}
      variant="bordered"
      onClear={() => setValue("")}
      onValueChange={setValue}
    />
    </div>
  );
};
