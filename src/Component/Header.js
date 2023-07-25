function Header(props) {
  return (
    <h1>
      <header>
        <img src={props.keyConceptsImage} alt="Medal badge with a star" />
        <h1>Key React Concepts</h1>
        <p>Selected key React concepts you should know about</p>
      </header>
    </h1>
  );
}

export default Header;
