import { Dispatch, SetStateAction } from "react"

interface IModal {
    show: boolean
    dismissModal: Dispatch<SetStateAction<void>>
    modalText: string
    modalTitle:string
}

const Modal = ({ modalTitle, modalText, show, dismissModal}:IModal) => {

    const handleClick = () => dismissModal();

    return (
        <div className={`${show ? '' : 'hidden'} cursorModal fixed z-10 inset-0 overflow-y-auto`} aria-labelledby='modal-title' role='dialog' aria-modal='true'>
            <div className='flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' aria-hidden='true'></div>

                <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>&#8203;</span>

                <div className='relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                    <div>
                        {/*<div className='mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100'>
                    <svg className='h-6 w-6 text-green-600' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' aria-hidden='true'>
                      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 13l4 4L19 7' />
                    </svg>
                  </div>*/}
                        <div className='mt-3 text-center sm:mt-5'>
                            <h3 className='text-lg leading-6 font-medium text-gray-900' id='modal-title'>{modalTitle}</h3>
                            <div className='mt-2'>
                                <p className='text-sm text-gray-500'>{modalText} 🥳🥳🥳</p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-5 sm:mt6'>
                        <button onClick={handleClick} type='button' className='inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm'>Novo jogo</button>
                    </div>
                </div>
            </div>
        </div>
    )
}  

export default Modal;