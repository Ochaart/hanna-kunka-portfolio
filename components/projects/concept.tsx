import React from "react";

interface ConceptProps {
  title: string;
  caption?: string;
  children: React.ReactNode;
}

const Concept = ({ title, children, caption }: ConceptProps) => {
  return (
    <div className="flex flex-col padding gap-y-4 md:gap-y-20">
      <div className="flex flex-col gap-y-4 md:gap-y-20">
        <h3 className="copy-h2">{title}</h3>
        {caption && (<p className="copy-body">{caption}</p>)}
      </div>
      <p className="copy-body">{children}</p>
    </div>
  )

}

export default Concept;