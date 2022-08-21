import Add from "../Add/Add";

import "./Header.css";

interface HeaderProps {
  onAdd: (title: string) => void;
}
function Header({ onAdd }: HeaderProps) {
  return (
    <div className="Header">
      <h1 className="font-pacifico">Todos</h1>
      <Add onAdd={onAdd} />
    </div>
  );
}

export default Header;
