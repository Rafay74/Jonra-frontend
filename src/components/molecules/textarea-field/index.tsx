import { TextAreaAtom, LabelAtom } from '@/components/atoms'
import type { InputProps } from 'antd'

interface TextAreaFieldProps extends Omit<InputProps, 'size'> {
    label?: string
    error?: string
    required?: boolean
    labelClassName?: string
}

const TextAreaField = ({ label, error, required, labelClassName }: TextAreaFieldProps) => (
    <div className="w-full">
        {label && (
            <LabelAtom required={required} className={labelClassName}>
                {label}
            </LabelAtom>
        )}
        <TextAreaAtom />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
)

export { TextAreaField }
