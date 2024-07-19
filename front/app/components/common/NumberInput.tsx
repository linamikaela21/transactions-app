import { Input } from "@nextui-org/react";

interface NumberInputProps {
  value: string;
  setValue: (value: string) => void;
  isInvalid: boolean;
  label: string;
}

export const NumberInput = ({
  value,
  setValue,
  isInvalid,
  label,
}: NumberInputProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Input
        fullWidth
        isClearable
        className="max-w-lg text-medium"
        color={value ? (isInvalid ? "danger" : "success") : "default"}
        errorMessage={`Please enter a valid ${label}`}
        isInvalid={isInvalid}
        label={label}
        size="md"
        startContent={
          <div className="pointer-events-none flex items-center">
            <span className="text-default-400 text-medium">$</span>
          </div>
        }
        type="number"
        value={String(value)}
        variant="bordered"
        onClear={() => setValue("")}
        onValueChange={setValue}
      />
    </div>
  );
};
