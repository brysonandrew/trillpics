import { I } from "@components/Icon";
import { B } from "@components/interactive/B";
import { useCheckout } from "@context/checkout";

export const Checkout = () => {
  const {items} = useCheckout()
  return (
    <B>
      <I icon="mdi:cart"/>
      <ul>
        {items.map((item) => (
          <li key={item}>
{item}
          </li>
        ))}
      </ul>
    </B>
  )
}