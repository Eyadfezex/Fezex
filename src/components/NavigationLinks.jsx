import Link from "./Link";
const NavigationLinks = () => {
  return (
    <div class="grid grid-cols-3 col-span-3 gap-[1px]">
      <Link to="." label="_hello" />
      <Link to="./about" label="_about-me" />
      <Link to="./projects" label="_projects" />
    </div>
  );
};

export default NavigationLinks;
