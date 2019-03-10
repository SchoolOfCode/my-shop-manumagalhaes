export const formatPrice = pennies => {
  return (pennies / 100).toLocaleString("en-GB", {
    style: "currency",
    currency: "GBP"
  });
};
