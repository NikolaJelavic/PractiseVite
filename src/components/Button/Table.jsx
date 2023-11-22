export default function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const fruitsData = data.map((data) => {
    const renderedCells = config.map((column) => (
      <td className="p-2" key={column.label}>
        {column.render(data)}
      </td>
    ));

    return (
      <tr key={data.name} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{fruitsData}</tbody>
    </table>
  );
}
