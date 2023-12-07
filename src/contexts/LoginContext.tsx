import { createContext, useState } from "react";

export const LoginContext = createContext<any>({});

export const LoginProvider = ({ children }: any) => {
  const [validPassword, setValidPassword] = useState<boolean>(false);
  const [passwordHasNumber, setPasswordHasNumber] = useState<boolean>(false);
  const [passwordHasSpecialChar, setPasswordHasSpecialChar] = useState<boolean>(false);
  const [passwordHasUpperCaseLetter, setPasswordHasUpperCaseLetter] = useState<boolean>(false);
  const [passwordHasNoConsecutiveLetters, setPasswordHasNoConsecutiveLetters] = useState<boolean>(false);

  const cleanPasswordInput = () => {
    let passwordInput = document.getElementById('password') as HTMLInputElement 
    passwordInput.value = ''
    setPasswordHasNumber(false)
    setPasswordHasSpecialChar(false)
    setPasswordHasUpperCaseLetter(false)
    setPasswordHasNoConsecutiveLetters(false)
    setValidPassword(false)
  }

  return (
    <LoginContext.Provider
      value={{
        validPassword, setValidPassword,
        passwordHasNumber, setPasswordHasNumber, 
        passwordHasSpecialChar, setPasswordHasSpecialChar, 
        passwordHasUpperCaseLetter, setPasswordHasUpperCaseLetter, 
        passwordHasNoConsecutiveLetters, setPasswordHasNoConsecutiveLetters,
        cleanPasswordInput
      }}
    >
      {children}
    </LoginContext.Provider>
  );
};
