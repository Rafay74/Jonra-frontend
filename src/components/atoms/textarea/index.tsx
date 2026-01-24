import { Input } from 'antd';

const TextAreaAtom = () => {

    return (
        <Input.TextArea placeholder='Type your query here' rows={4}
            style={{
                fontSize: '16px',
                padding: '10px 24px',
                borderRadius: 20,

            }}
        />
    )
}

export { TextAreaAtom }
