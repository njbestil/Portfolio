export default function Card({src, children}) {
    return (
        <div className="group/content relative h-[300px] w-full overflow-hidden sm:w-[400px]">
            <img
                src={src}
                alt=""
                className="h-full w-full bg-stone-300 object-cover transition-transform duration-300 group-hover/content:scale-110"
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/90 via-black/30 to-transparent text-white">
                <div className="p-5">
                    {children}
                </div>
            </div>
        </div>
    )
}
