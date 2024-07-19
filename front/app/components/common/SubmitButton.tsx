import { Button } from "@nextui-org/react";

interface SubmitButtonProps {
  disabled: boolean;
  loading: boolean;
  handleSubmit: () => void;
}

export const SubmitButton = ({
  disabled,
  loading,
  handleSubmit,
}: SubmitButtonProps): JSX.Element => {
  return (
    <div className="w-full flex justify-center">
      <Button
        fullWidth
        className="max-w-lg cursor-pointer text-medium"
        color={disabled ? "default" : "success"}
        isDisabled={disabled}
        isLoading={loading}
        radius="sm"
        variant="bordered"
        onClick={handleSubmit}
      >
        {loading ? "Loading..." : "Submit"}
      </Button>
    </div>
  );
};
