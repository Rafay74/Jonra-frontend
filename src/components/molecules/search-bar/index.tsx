import { ButtonAtom } from '@/components/atoms'
import { InputField } from '../input-field'

const SearchBar = () => {
  return (
    <div className="flex-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-2 h-auto sm:h-12">
      <InputField
        placeholder="Search"
        className="flex-1 h-12 sm:h-full rounded-xl bg-[#123C4E] px-4"
      />

      <ButtonAtom
        className="h-12 sm:h-full px-6 rounded-xl text-white font-medium shrink-0"
        style={{
          background: 'linear-gradient(90deg, #1EC5E0 0%, #9F8EFF 100%)',
        }}
      >
        Search
      </ButtonAtom>
    </div>
  )
}
export { SearchBar }
