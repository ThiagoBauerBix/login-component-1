import Logo from "../../assets/images/Qventus-Logo.png";
import { useState } from "react";
import PasswordCheckComponent from "../../components/Password";
import { useLogin } from "../../hooks/useLogin";
import { Modal } from "flowbite-react";

export default function Login() {
  const [username, setUsername] = useState("");
  const {validPassword, cleanPasswordInput} = useLogin()  
  const [selectRulesModalOpen, setSelectRulesModalOpen] = useState<boolean>(false)
  const [selectedRules, setSelectedRules] = useState([])
  const [successBox, setSuccessBox] = useState(false)

  const handleSetRules = () => {
    cleanPasswordInput();
    const TEMP_ARR = [];
    const HAS_SPECIAL_CHAR_INPUT = (document.querySelector(`input[type='checkbox'][id=HasSpecialChar]`)as HTMLInputElement)
    const HAS_NUMBER_INPUT = (document.querySelector(`input[type='checkbox'][id=HasNumber]`)as HTMLInputElement)
    const HAS_UPPERCASE_LETTER_INPUT = (document.querySelector(`input[type='checkbox'][id=HasUpperCaseLetter]`)as HTMLInputElement)
    const HAS_NO_CONSECUTIVE_LETTER_INPUT = (document.querySelector(`input[type='checkbox'][id=HasNoConsecutiveLetters]`)as HTMLInputElement)

    HAS_SPECIAL_CHAR_INPUT?.checked && TEMP_ARR.push(HAS_SPECIAL_CHAR_INPUT.value)
    HAS_NUMBER_INPUT?.checked && TEMP_ARR.push(HAS_NUMBER_INPUT.value)
    HAS_UPPERCASE_LETTER_INPUT?.checked && TEMP_ARR.push(HAS_UPPERCASE_LETTER_INPUT.value)
    HAS_NO_CONSECUTIVE_LETTER_INPUT?.checked && TEMP_ARR.push(HAS_NO_CONSECUTIVE_LETTER_INPUT.value)

    setSelectedRules(TEMP_ARR)
    setSelectRulesModalOpen(false)
  }

  const handleSignUp = (e) => {
    e.preventDefault()
    setSuccessBox(true)
    setTimeout(() => setSuccessBox(false),5000)
  }

  return (
    <section className="bg-gray-primary h-full w-full text-white">
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-black-primary p-12 rounded rounded-lg drop-shadow-2xl shadow-2xl space-y-4 flex flex-col items-center justify-center">
          <a className="flex items-center mb-6">
            <img src={Logo} alt="logo" className="w-64 bg-white rounded h-22" />
          </a>
          <h1 className="text-xl font-bold leading-tight tracking-tight py-1">
            Create your account
          </h1>
          {successBox && 
            <div role="alert" className="mb-5 w-full">
              <div className="bg-green-500 text-white font-bold rounded-t px-4 py-2 text-sm">
                  Congratulations, well done!
              </div>
              <div className="border border-t-0 border-green-400 rounded-b bg-green-100 px-4 py-3 text-green-700 text-sm">
                <p>You inputed your password successfully!</p>
              </div>
            </div>
          }
          <form
            onSubmit={(e) => console.log(e)}
            className="space-y-4 w-[100%] lg:w-[600px]"
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your name
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
                type="name"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900  rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="name example"
              />
            </div>
            <PasswordCheckComponent passwordReqs={selectedRules}/>
            <div className="flex align-center justify-center gap-2">
              <button
                type="submit"
                className="w-[225px] bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={(e) => {
                  e.preventDefault()
                  setSelectRulesModalOpen(true)
                }}
              >
                Change Rules
              </button>
              <button
                type="submit"
                className="w-[225px] bg-indigo-600 disabled:bg-indigo-300 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                disabled={!validPassword}
                onClick={handleSignUp}
              >
                Sign up
              </button>
            </div>
          </form>
          <Modal 
            dismissible 
            show={selectRulesModalOpen} 
            onClose={() => setSelectRulesModalOpen(false)}
            position={'center'}
            style={{backgroundColor: 'rgb(17, 24, 39)'}}
            size="2xl" 
          >
            <Modal.Header className="bg-black-primary border-slate-200 border-t border-l border-r border-b-0" >
              <div className="flex w-full">
                <div className="flex text-white">
                  <span>Select One or More Password Rules</span>
                </div>
              </div>
            </Modal.Header>
            <Modal.Body className="bg-black-primary border-t-0 border-l border-r border-b">
              <div className="text-white">
                <div className="flex items-center justify-start py-3 gap-2">
                  <input id="HasSpecialChar" type='checkbox' value={'HasSpecialChar'}/>
                  <label htmlFor="HasSpecialChar">Has one or more of these special characters: !@#$%^&*</label>
                </div>
                <div className="flex items-center justify-start py-3 gap-2">
                  <input id="HasNumber" type='checkbox' value={'HasNumber'}/>
                  <label htmlFor="HasNumber">Has a number 0-9</label>
                </div>
                <div className="flex items-center justify-start py-3 gap-2">
                  <input id="HasUpperCaseLetter" type='checkbox' value={'HasUpperCaseLetter'}/>
                  <label htmlFor="HasUpperCaseLetter">Has an uppercase letter</label>
                </div>
                <div className="flex items-center justify-start py-3 gap-2">
                  <input id="HasNoConsecutiveLetters" type='checkbox' value={'HasNoConsecutiveLetters'}/>
                  <label htmlFor="HasNoConsecutiveLetters">Has NO consecutive letters</label>
                </div>
              </div>
              <div className="flex align-center justify-center gap-2 text-white pt-2">
              <button
                className="w-[225px] bg-indigo-600 disabled:bg-indigo-300 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                onClick={handleSetRules}
              >
                Confirm
              </button>
            </div>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </section>
  );
}
