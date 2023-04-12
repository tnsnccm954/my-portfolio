import React from "react";

export default function Skills(){
    return(
        <section id="skills" style={{minHeight:800}}>
            <h1 className="text-shaded fs-1">Skills:</h1>
            <div className="prolanguage ae ms-3">
                <h1 className="fs-3 text-shaded ">Programing-Language:</h1>
                <span  className="badge bg-secondary px-2 fs-6">
                    PHP
                </span>
            </div>
            <div className="framework ms-3">
                <h1 className="fs-3 text-shaded ">Framework&Tools</h1>
            </div>
        </section>
        
    );
}