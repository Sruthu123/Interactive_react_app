
export function CoreConcept({ title, description }) {
  return (
    <li>
      <h3>{title}</h3>
      <pre>{description}</pre>
    </li>
  );
}