import React, { useRef, useEffect } from "react";

const BaseStat = ({ valueStat, nameStat, type }) => {
    const bg = `bg-${type}`;
    const ref = useRef(null);

    useEffect(() => {
        const setValueStat = ref.current; // 현재 요소 접근
        const calc = valueStat * (100 / 255);
        setValueStat.style.width = calc + '%';
    }, [])

    return (
        <tr className="w-full text-white">
            <td className="sm:px-5">
                [valueStat]
            </td>
            <td>
                <div className={`flex items-center h-2 min-w-[10rem] overflow-hidden rounded bg-gray-600`}>
                    <div ref={ref}
                        className={`h-3 ${bg}`}>
                    </div>
                </div>
            </td>
            <td className='px-2 sm:px-5'>
                255
            </td>
        </tr>
    );
}

export default BaseStat;