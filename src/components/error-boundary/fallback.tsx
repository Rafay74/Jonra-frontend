
interface IFallback {
  error: Error
}

const Fallback = ({ error }: IFallback) => {
  return (
    <div>
      <h1 className="text-xl">Oops! An error occured</h1>
      <p>
        {error.toString()}
      </p>

    </div>
  )
}

export default Fallback