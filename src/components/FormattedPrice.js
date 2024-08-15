import { cn } from "@/lib/utils";

const FormattedPrice = ({ amount, className }) => {
  const formattedAmount = new Number(amount).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 2,
  });

  return (
    <span className={cn("text-base text-black", className)}>
      {formattedAmount}
    </span>
  );
};

export default FormattedPrice;
