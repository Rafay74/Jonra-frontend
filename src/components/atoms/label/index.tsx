interface ILabelAtomProps {
  children: React.ReactNode
  required?: boolean
  htmlFor?: string
}

const LabelAtom = ({ children, required, htmlFor }: ILabelAtomProps) => (
  <label
    htmlFor={htmlFor}
    className="block text-sm md:text-base lg:text-[18px] mb-2 text-gray-700 font-semibold"
  >
    {children}
    {required && <span className="text-red-500 ml-1">*</span>}
  </label>
)

export { LabelAtom }
