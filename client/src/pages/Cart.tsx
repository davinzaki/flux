import { checkout as checkoutApi } from "@/api/order.api";
import { useGetCart } from "@/hooks/useCart";
import { type ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Cart = () => {
  const checkoutMutation = useMutation({
    mutationFn: checkoutApi,
    onSuccess: (data: ApiResponse<{ order: any; invoice: any }>) => {
      // data.data is { order, invoice }
      // xendit invoice object usually has invoiceUrl or invoice_url (SDK uses camelCase usually)
      const paymentUrl = data.data.invoice?.invoiceUrl || data.data.invoice?.invoice_url;
      
      console.log("Redirecting to:", paymentUrl);
      if (paymentUrl) {
        window.location.href = paymentUrl;
      } else {
        toast.error("No payment URL received");
      }
    },
    onError: (error: any) => {
      console.error(error);
      toast.error("Checkout failed: " + (error.response?.data?.message || error.message));
    },
  });

  const { data: cartData, isLoading, isError } = useGetCart();
  const { mutate: checkout, isPending } = checkoutMutation;

  if (isLoading) return <div>Loading cart...</div>;
  if (isError) return <div>Error loading cart</div>;

  const cartItems = cartData?.data?.items || [];
  const totalPrice = cartItems.reduce((acc: number, item: any) => acc + item.productId.price * item.qty, 0);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
      <div className="bg-white p-6 rounded shadow-md">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            <ul className="mb-4">
              {cartItems.map((item: any) => (
                <li key={item.productId._id} className="flex justify-between border-b py-2">
                  <div>
                    <h3 className="font-bold">{item.productId.name}</h3>
                    <p>Qty: {item.qty} x {item.productId.price}</p>
                  </div>
                  <div>
                    <p className="font-bold">
                      {(item.productId.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="flex justify-between font-bold text-xl mb-4">
              <span>Total:</span>
              <span>
                {totalPrice.toLocaleString("id-ID", {
                  style: "currency",
                  currency: "IDR",
                })}
              </span>
            </div>
            <button
              onClick={() => checkout()}
              disabled={isPending}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
            >
              {isPending ? "Processing..." : "Checkout with Xendit"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
