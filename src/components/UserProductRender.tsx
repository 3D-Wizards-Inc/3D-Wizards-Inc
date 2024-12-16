import { Product } from '@prisma/client';

/* Renders a single row in the List Product table, used in account products list and admin display. */
const UserProductRender = ({ option, size, quantity, color1, color2, color3 }: Product) => (

  <tr>
    {/* empty element to sorta shift row right */}
    <td>{ }</td>
    <td>{option}</td>
    <td>{size}</td>
    <td>{color1}</td>
    <td>{color2}</td>
    <td>{color3}</td>
    <td>{quantity}</td>
  </tr>
);

export default UserProductRender;
