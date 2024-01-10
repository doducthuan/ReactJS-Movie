import React, { useRef } from 'react';
const Ref = () =>{
    // Khi ref thay doi thi component khong bi re-render
    // khai bao ref
    const domRef = useRef(10);
    // truy xuat gia tri ref
    console.log(domRef.current)
    // set gia tri cho ref
    domRef.current = 12;
    return (
        <div>

        </div>
    )
}
export default Ref;