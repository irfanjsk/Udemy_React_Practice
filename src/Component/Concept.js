function Concept(props) {
  return (
    <li className="concept">
      <img src={props.conceptDetails.image} alt={props.conceptDetails.title} />
      <h2>{props.conceptDetails.title}</h2>
      <p>{props.conceptDetails.description}</p>
    </li>
  );
}

export default Concept;
