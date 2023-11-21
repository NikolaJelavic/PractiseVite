export default function Table({ data, config }) {
  const renderedHeaders = config.map((column) => {
    return <th key={column.label}>{column.label}</th>;
  });

  const fruitsData = data.map((data) => {
    return (
      <tr key={data.name} className="border-b">
        <td className="p-3">{config[0].render(data)}</td>
        <td className={`p-3 m-2 ${config[1].render(data)}`}></td>
        <td className="p-3">{config[2].render(data)}</td>
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
