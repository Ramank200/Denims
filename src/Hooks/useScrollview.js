import React,{useEffect} from "react";

export function useScrollview(element, func , repeat=false){
    useEffect(() => {
        const observer = new IntersectionObserver((ele)=>{
            ele.forEach((ent)=>{
                if(ent.isIntersecting && repeat){
                    console.log("entered")
                    func()
                    repeat=false;
                }
                else if(!ent.isIntersecting && !repeat){
                    repeat=true
                }
            })
        })

      const hiddenElements = document.querySelectorAll(element);
      hiddenElements.forEach((element) => observer.observe(element));
    }, [element,func])

}