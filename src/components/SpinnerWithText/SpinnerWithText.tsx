import { Spinner } from "@/components/ui/spinner";

const SpinnerWithText = () => {
  return (
    <Spinner size={"large"}>
      <span className="text-2xl">Loading...</span>
    </Spinner>
  );
};

export default SpinnerWithText;
