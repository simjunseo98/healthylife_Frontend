import React,{FormEvent, JSX, ReactNode} from "react";

/* type 정의 방식*/
type userFormProps = {
    title: string;
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    submitText: string;
    bottomText?: ReactNode;
    children: ReactNode;
}

const UserForm =({
    title,
    onSubmit,
    submitText,
    bottomText,
    children,
}: userFormProps): JSX.Element => {
    return (
    <div className='flex flex-col w-full max-w-[600px]  h-[600px] p-4 rounded-md '>
      <h2 className='text-center text-5xl font-semibold mb-4'>{title}</h2>
      <form onSubmit={onSubmit} className='space-y-6  flex flex-col flex-1'>
       {children}
        <button
          type='submit'
          className='w-full h-auto bg-gray-700 text-white py-4 rounded-md cursor-pointer hover:bg-black'
        >
          {submitText}
        </button>
      </form>
      {bottomText && <div className='text-xl text-center'>{bottomText}</div>}
    </div>
    );
};
export default UserForm;

