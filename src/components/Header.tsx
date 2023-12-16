import { useTheme } from "../context/ThemeContext";

type HeaderProps = {
  title: string,
  toggleTheme: (theme:string) => string

};

const Header: React.FC<HeaderProps> = ({ title , toggleTheme}) => {
//   const { theme, toggleTheme } = useTheme();

  return (
    <header >
      <h1>{title}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </header>
  );
};

export default Header;
