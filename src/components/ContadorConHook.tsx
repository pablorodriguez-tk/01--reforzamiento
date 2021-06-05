import { useCounter } from '../hooks/useCounter';

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter(100);

  return (
    <div>
      <h3>
        Contador Con Hook<small> {valor}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => acumular(1)}>
        +1
      </button>
      <button className="btn btn-primary" onClick={() => acumular(-1)}>
        -1
      </button>
    </div>
  );
};
