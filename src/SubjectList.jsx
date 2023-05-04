import { useState } from "react";

export default function SubjectList({subjectList}) {
    const [subjects, setSubjects] = useState(subjectList);

    function addSubject() {
        setSubjects((subjects)=>{
            const nval = [...subjects, {code:"CMSC23", description:"Mobile Development"}];
        console.log(nval);
        return nval;
        })
    }


    return (
        <>
            <p>Show List:</p>
            <ol>
                {
                subjects.map((subject)=>{
                    return <li>{subject.code} - {subject.description}</li>
                })
            }
            </ol>
            <button onClick={addSubject}>Add</button>
        </>
    )

}