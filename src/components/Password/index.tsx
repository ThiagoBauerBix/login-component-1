import { useState } from "react";
import { CheckCircle, WarningCircle } from "@phosphor-icons/react";
import { useLogin } from "../../hooks/useLogin";


export default function PasswordCheckComponent({passwordReqs}) {
  const [password, setPassword] = useState("");
  const {
          setValidPassword, passwordHasNumber, setPasswordHasNumber, 
          passwordHasSpecialChar, setPasswordHasSpecialChar, passwordHasUpperCaseLetter, 
          setPasswordHasUpperCaseLetter, passwordHasNoConsecutiveLetters, setPasswordHasNoConsecutiveLetters, cleanPasswordInput
      } = useLogin()
  
  const handlePasswordCheck = (password : string) => {
    if(!password) {
        cleanPasswordInput()
        return
    }
    let tempPasswordHasnumber
    let tempPasswordHasSpecialChar
    let tempPasswordUpperCaseLetter
    let tempPasswordHasNoConsecutiveLetters
    passwordReqs.indexOf('HasNumber') > -1 ? tempPasswordHasnumber = /\d/.test(password) : tempPasswordHasnumber = true
    passwordReqs.indexOf('HasSpecialChar') > -1 ? tempPasswordHasSpecialChar = /[`!@#$%^&*]/.test(password) : tempPasswordHasSpecialChar = true
    passwordReqs.indexOf('HasUpperCaseLetter') > -1 ? tempPasswordUpperCaseLetter = /[A-Z]/.test(password) : tempPasswordUpperCaseLetter = true
    passwordReqs.indexOf('HasNoConsecutiveLetters') > -1 ? tempPasswordHasNoConsecutiveLetters = !(/([a-z])\1/i).test(password) : tempPasswordHasNoConsecutiveLetters = true
    setPasswordHasNumber(tempPasswordHasnumber)
    setPasswordHasSpecialChar(tempPasswordHasSpecialChar)
    setPasswordHasUpperCaseLetter(tempPasswordUpperCaseLetter)
    setPasswordHasNoConsecutiveLetters(tempPasswordHasNoConsecutiveLetters)
    setValidPassword(tempPasswordHasnumber && tempPasswordHasSpecialChar && tempPasswordUpperCaseLetter && tempPasswordHasNoConsecutiveLetters)
    setPassword(password)
  }

  return (
    <>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium"
        >
          Password
        </label>
        <input
          onChange={(e) => handlePasswordCheck(e.target.value)}
          type="text"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        />
      </div>
      <div className="py-3">
        {passwordReqs.indexOf('HasSpecialChar') > -1 && <div className="flex items-center justify-start align-center py-3">
          <div className="flex items-center h-5">
            {passwordHasSpecialChar ? <CheckCircle size={32} color='green'/> : <WarningCircle size={32} color='red'/>}
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember">
              Has one or more of these special characters: !@#$%^&*
            </label>
          </div>
        </div>}
        {passwordReqs.indexOf('HasNumber') > -1 && <div className="flex items-center justify-start py-3">
          <div className="flex items-center h-5">
            {passwordHasNumber ? <CheckCircle size={32} color='green'/> : <WarningCircle size={32} color='red'/>}
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember">
              Has a number 0-9
            </label>
          </div>
        </div>}
        {passwordReqs.indexOf('HasUpperCaseLetter') > -1 && <div className="flex items-center justify-start py-3">
          <div className="flex items-center h-5">
            {passwordHasUpperCaseLetter ? <CheckCircle size={32} color='green'/> : <WarningCircle size={32} color='red'/>}
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember">
              Has an uppercase letter
            </label>
          </div>
        </div>}
        {passwordReqs.indexOf('HasNoConsecutiveLetters') > -1 && <div className="flex items-center justify-start py-3">
          <div className="flex items-center h-5">
          {passwordHasNoConsecutiveLetters ? <CheckCircle size={32} color='green'/> : <WarningCircle size={32} color='red'/>}
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember">
              Has NO consecutive letters
            </label>
          </div>
        </div>}
      </div>
    </>
  )
}