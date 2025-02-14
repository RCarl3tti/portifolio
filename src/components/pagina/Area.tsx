interface AreaProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Area(props: AreaProps) {
    return (
        <div id={props.id ?? ''} className={`
            flex justify-center w-full
             
            ${props.className ?? ''}
        `}>
            <div className={`
                px-7 xl:px-0 
                w-full xl:w-[1200px]
                flex flex-col
                justify-center items-center
            `}>
                {props.children}
            </div>
        </div>
    )
}