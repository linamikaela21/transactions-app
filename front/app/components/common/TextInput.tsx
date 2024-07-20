import { faFont } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@nextui-org/react";

interface TextInputProps {
  value: string;
  handleChange: (e: any) => void;
  label: string;
  name: string;
  errorMessage?: string;
  touched?: boolean;
  placeholder?: string;
}

export const TextInput = ({
  value,
  handleChange,
  errorMessage,
  label,
  touched,
  name,
  placeholder,
}: TextInputProps): JSX.Element => {
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
        placeholder={placeholder}
        size="lg"
        startContent={
          <div className="flex flex-col mb-1">
            <FontAwesomeIcon icon={faFont} />
          </div>
        }
        type="text"
        value={value}
        variant="bordered"
        onChange={(e) =>
          handleChange({
            target: { name, value: e.target.value },
          })
        }
        onClear={() => handleChange({ target: { name, value: "" } })}
      />
    </div>
  );
};
