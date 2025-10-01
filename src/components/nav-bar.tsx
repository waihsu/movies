import { Link, NavLink } from "react-router";

export default function NavBar() {
  return (
    <div className="p-2 flex gap-2">
      <NavLink to="/" className="[&.active]:font-bold" end>
        Home
      </NavLink>
      <NavLink to="/tv-series" className="[&.active]:font-bold" end>
        TV Series
      </NavLink>
    </div>
  );
}
