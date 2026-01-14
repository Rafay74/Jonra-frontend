import flag from '@/assets/flag.svg'

const RfqDetail = () => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 ">
      <div className="text-[#1EC5E0] text-xl lg:text-2xl font-bold">
        Procurement Summary
      </div>
      <div className="bg-[#C9C9C933] h-screen rounded-2xl p-8 flex flex-col gap-4 overflow-y-auto">
        <div className="bg-[#C5F7FF] rounded-3xl p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2 ">
            <span className="text-black font-bold text-md">Country:</span>
            <div className="flex items-center gap-2">
              <img src={flag} alt="country_flag" />
              <span className="text-black text-md">USA</span>
            </div>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-black font-bold text-md">Deadline:</span>
            <span className="text-black text-md">14 Jan 2025</span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="text-black font-bold text-md">Summary:</span>
            <span className="text-black text-md">
              Overhaul of components for F-7GS Aircraft Fleet (Foreign Bidders
              only) - Limited International
            </span>
          </div>
        </div>

        <div className="bg-[#C5F7FF] rounded-3xl p-4 flex flex-col gap-2">
          <div className="text-[#1EC5E0] text-lg lg:text-2xl font-bold">
            Other Information
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-black font-bold text-md">Notice:</span>
              <span className="text-black text-md">Tender</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-bold text-md">TOT No:</span>
              <span className="text-black text-md">1366745485</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-bold text-md">
                Document Ref:
              </span>
              <span className="text-black text-md">1366745485</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-black font-bold text-md">Financier:</span>
              <span className="text-black text-md">Self Financed</span>
            </div>
          </div>
        </div>

        <div className="bg-[#C5F7FF] rounded-3xl p-4 flex flex-col gap-2 h-screen">
          <div className="text-[#1EC5E0] text-lg lg:text-2xl font-bold">
            Summary
          </div>
          <p className="text-black text-2xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
            minima nisi pariatur ipsum nam, consectetur alias rem. Facilis,
            recusandae corporis, ratione sapiente quidem nesciunt voluptatem
            molestias reiciendis, odio possimus reprehenderit. Culpa modi,
            obcaecati molestias totam dolor labore aut asperiores quidem quae
            maiores laborum dignissimos, dolore libero sapiente aliquam iure
            sint temporibus ea ab molestiae autem? Labore incidunt cumque
            molestias sint. Ad tenetur adipisci possimus doloremque dolor,
            asperiores dolorem nostrum placeat et non eligendi sapiente quas
            molestias, quam obcaecati quo earum incidunt. Ducimus nesciunt, sed
            deserunt necessitatibus tenetur ipsa itaque minus. Unde perferendis
            cupiditate veniam voluptatem saepe laudantium voluptatibus at
            eligendi cumque odit, labore omnis repellat distinctio quibusdam
            nobis modi! Incidunt veritatis officiis porro ut inventore velit sit
            amet est necessitatibus! Amet perferendis dicta, nisi minima non,
            maiores sed accusamus eum ex vel eaque ratione commodi impedit?
            Impedit, iste, hic quasi illo vero dolores debitis vel, provident
            eum itaque fuga eligendi. Laborum quam porro exercitationem fuga
            totam, in modi doloribus voluptatem architecto rerum temporibus
            recusandae, animi, doloremque necessitatibus reprehenderit expedita
            blanditiis. Eius veniam dolorem laborum eum explicabo ea accusantium
            modi dignissimos! Omnis velit optio nesciunt sunt vel quis illo ipsa
            odit consequuntur ipsam et impedit eligendi dolor nulla nihil aut
            soluta a nam maxime aspernatur, ea porro? Quaerat cupiditate aperiam
            consequatur! Delectus, soluta. Dignissimos natus eaque odio rem
            voluptas, modi maiores quisquam maxime ex et pariatur velit
            voluptatum, fuga soluta vero rerum quia asperiores id quis qui.
            Asperiores harum tempore accusantium! Sunt iure labore corporis
            aspernatur voluptas asperiores voluptate dolor dolorem amet, ad ea,
            numquam ab id corrupti eveniet explicabo iusto facere beatae est
            repellendus magnam adipisci tenetur nulla! Veritatis, saepe?
            Exercitationem culpa ad aliquid mollitia fuga, delectus unde enim
            quibusdam iusto hic aliquam expedita omnis laudantium assumenda
            accusamus cum veritatis, molestiae provident corporis non? Vel
            placeat inventore qui excepturi nihil.
          </p>
        </div>
      </div>
    </div>
  )
}

export { RfqDetail }
