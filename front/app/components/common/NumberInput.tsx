import { faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";

interface NumberInputProps {
  value: number | string;
  handleChange: (e: any) => void;
  label: string;
  name: string;
  errorMessage?: string;
  touched?: boolean;
}

export const NumberInput = ({
  value,
  handleChange,
  errorMessage,
  name,
  label,
  touched,
}: NumberInputProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Input
        fullWidth
        isClearable
        className="max-w-lg flex justify-center text-lime-500"
        classNames={{
          label: "text-large",
          errorMessage: "text-large",
          input: "text-large placeholder:text-lime-700 placeholder:text-lg",
        }}
        color={
          value
            ? !!errorMessage && touched
              ? "danger"
              : "success"
            : "secondary"
        }
        errorMessage={errorMessage}
        isInvalid={!!errorMessage}
        label={label}
        name={name}
        placeholder="0"
        size="lg"
        startContent={
          <div className="flex flex-col">
            <FontAwesomeIcon icon={faDollarSign} size="xs" />
          </div>
        }
        type="number"
        value={String(value)}
        variant="bordered"
        onChange={(e) =>
          handleChange({ target: { name, value: parseInt(e.target.value) } })
        }
        onClear={() => handleChange({ target: { name, value: "" } })}
      />
    </div>
  );
};
