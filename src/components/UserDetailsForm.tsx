import styled from "@emotion/styled";
import { FC, useCallback, useState } from "react";
import { LocalStorageKeys } from "../types/LocalStorageKeys.enum";
import clsx from "clsx";

interface UserDetailsFormProps {
  className?: string;
  onSubmit: () => void;
}

const UserDetailsForm: FC<UserDetailsFormProps> = ({ className, onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const validate = useCallback(() => {
    if (!name) {
      setError("Name is required");
      return false;
    }

    setError("");
    return true;
  }, [name]);

  const setStorageAndSubmit = useCallback(
    (overrideName?: string) => {
      const _name = overrideName || name;
      localStorage.setItem(LocalStorageKeys.USER, _name);
      onSubmit();
    },
    [name, onSubmit]
  );

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStorageAndSubmit();
  };

  const continueAsGuest = useCallback(() => {
    const randomId = Math.floor(Math.random() * 1000);
    const name = `Guest #${randomId}`;

    setStorageAndSubmit(name);
  }, []);

  return (
    <div className={className}>
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className={clsx("form-input", { error: !!error })}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Submit</button>

        {error && <span className="error-message">{error}</span>}
      </form>

      <span>or</span>

      <button onClick={continueAsGuest}>Continue as Guest</button>
    </div>
  );
};

export default styled(UserDetailsForm)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  .form-wrapper {
    width: 400px;
    border: 3px solid #0d0d0d;
    border-radius: 12px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    .form-input {
      width: 100%;
      padding: 10px;
      border-radius: 4px;
      font-size: 16px;
      outline: none;
      border: 2px solid #0d0d0d;

      &.error {
        border-color: #ff4444;
      }
    }

    .error-message {
      color: #ff4444;
    }

    button {
      text-align: center;
      background-color: #1456e4;
    }
  }
  button {
    background-color: #0d0d0d;
    padding: 10px 15px;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
`;
