interface ILabelAtomProps {
  children: React.ReactNode
  required?: boolean
  htmlFor?: string
  className?: string
}

const LabelAtom = ({ children, required, htmlFor, className }: ILabelAtomProps) => (
  <label
    htmlFor={htmlFor}
    className={`block text-sm md:text-base lg:text-[18px] mb-2 ${className || 'text-gray-700'} font-semibold`}
  >
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
)

export { LabelAtom }
