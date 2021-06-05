import { useEffect, useState } from 'react';
import { reqResAPI } from '../api/reqRes';
import { ReqResListado, Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  useEffect(() => {
    reqResAPI
      .get<ReqResListado>('/users')
      .then((resp) => {
        setUsuarios(resp.data.data);
      })
      .catch(console.log);
  }, []);

  const renderItem = ({
    id,
    avatar,
    email,
    first_name,
    last_name,
  }: Usuario) => {
    return (
      <tr key={id.toString()}>
        <td>
          <img
            src={avatar}
            alt={first_name}
            style={{ width: 35, borderRadius: 100 }}
          ></img>
        </td>
        <th>
          {first_name}
          {last_name}
        </th>
        <th>{email}</th>
      </tr>
    );
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className="table">
        <thead></thead>
        <tbody>{usuarios.map(renderItem)}</tbody>
      </table>
      <button className="btn btn-primary">Siguientes</button>
    </>
  );
};
