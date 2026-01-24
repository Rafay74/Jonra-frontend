import { Upload } from 'antd'
import { InboxOutlined } from '@ant-design/icons'


interface UploadAtomProps {
    onChange: (files: File[]) => void
    value?: File[]
}

const UploadAtom = ({ onChange }: UploadAtomProps) => {
    return (
        <Upload.Dragger
            multiple
            beforeUpload={() => false}

            onChange={(info) => {
                const files = info.fileList
                    .map(file => file.originFileObj)
                console.log("files are here  :", files)
                onChange([])
            }}
        >
            <p className="ant-upload-drag-icon">
                <InboxOutlined />
            </p>
            <p className="">
                Click or drag files here
            </p>
        </Upload.Dragger>
    )
}

export { UploadAtom }
