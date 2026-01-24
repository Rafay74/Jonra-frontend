import { LabelAtom } from '@/components/atoms'
import { UploadAtom } from '@/components/atoms/upload'


interface UploadFieldProps {
    label?: string
    required?: boolean
    error?: string
    labelClassName?: string
    value?: File[]
    onChange: (files: File[]) => void
}

const UploadField = ({
    label,
    required,
    error,
    labelClassName,
    value,
    onChange,
}: UploadFieldProps) => {
    return (
        <div className="w-full">
            {label && (
                <LabelAtom required={required} className={labelClassName}>
                    {label}
                </LabelAtom>
            )}

            <UploadAtom value={value} onChange={onChange} />

            {error && (
                <p className="text-red-500 text-sm mt-1">
                    {error}
                </p>
            )}
        </div>
    )
}

export { UploadField }
