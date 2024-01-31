export default function Card({src, children}) {
    return (
        <>
            <div className="relative h-[300px] max-h-[300px] overflow-hidden group/content">
                <img
                    src={src}
                    alt=""
                    className="h-full object-cover group-hover/content:scale-110 transition-transform duration-300 bg-black"
                />
                <div className="absolute h-full w-full flex flex-col justify-end bg-black/80 bottom-0 text-white transform translate-y-full group-hover/content:translate-y-0 transition-transform duration-500">
                    <div className="p-5">
                        {children}
                    </div>
                </div>
            </div>
        </>
    )
}