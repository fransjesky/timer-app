interface ButtonProps {
  name: string;
  onClick?: () => void;
}

export const Button = ({ name, onClick }: ButtonProps) => {
  return (
    <div
      className='py-1 px-4 rounded-lg border-white border-2 cursor-pointer capitalize hover:bg-sky-400 transition-all'
      onClick={onClick}
    >
      {name}
    </div>
  );
};
