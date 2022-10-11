import styles from "./Input.module.scss";
interface IInput {
  label: string;
  name: string;
  type: string;
  value?: string;
  error?: string | null;
  onChange?: ({ target }: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
}
const Input = ({
  label,
  name,
  type,
  value,
  error,
  onChange,
  onBlur,
  disabled,
}: IInput) => {
  return (
    <label htmlFor="" className={styles.input}>
      {label}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
      />
      {error && <p>{error}</p>}
    </label>
  );
};

export default Input;
