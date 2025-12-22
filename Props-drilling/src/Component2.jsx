const Component2 = (props) => {
  return (
    <div>
      <h3>Component 2</h3>
      <Component3 a={props.a} b={props.b} c={props.c} d={props.d} e={props.e} f={props.f} />
    </div>
  );
};
import Component3 from "./Component3";
export default Component2;
