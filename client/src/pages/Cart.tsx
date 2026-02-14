import { checkout as checkoutApi } from "@/api/order.api";
import { useGetCart, useUpdateCart } from "@/hooks/useCart";
import { type ApiResponse } from "@/types/api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

const Cart = () => {
  const checkoutMutation = useMutation({
    mutationFn: checkoutApi,
    onSuccess: (data: ApiResponse<{ order: any; invoice?: any; paymentUrl?: string }>) => {
      // data.data is { order, invoice } or { order, paymentUrl }
      // xendit invoice object usually has invoiceUrl or invoice_url (SDK uses camelCase usually)
      const paymentUrl = data.data.paymentUrl || data.data.invoice?.invoiceUrl || data.data.invoice?.invoice_url;
      
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
  const { mutate: updateCart, isPending: isUpdating } = useUpdateCart();
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
                <li key={item.productId._id} className="flex justify-between items-center border-b py-4">
                  <div className="flex items-center gap-4">
                    {item.productId.images?.[0] && (
                        <img src={item.productId.images[0]} alt={item.productId.name} className="w-16 h-16 object-cover rounded" />
                    )}
                    <div>
                        <h3 className="font-bold">{item.productId.name}</h3>
                        <p className="text-gray-500">
                            {item.productId.price.toLocaleString("id-ID", { style: "currency", currency: "IDR" })}
                        </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center border rounded">
                        <button 
                            disabled={isUpdating}
                            onClick={() => updateCart({ productId: item.productId._id, qty: item.qty - 1 })}
                            className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                        >-</button>
                        <span className="px-3">{item.qty}</span>
                        <button 
                            disabled={isUpdating}
                            onClick={() => updateCart({ productId: item.productId._id, qty: item.qty + 1 })}
                            className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                        >+</button>
                    </div>
                    <div className="font-bold min-w-[100px] text-right">
                      {(item.productId.price * item.qty).toLocaleString("id-ID", {
                        style: "currency",
                        currency: "IDR",
                      })}
                    </div>
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
