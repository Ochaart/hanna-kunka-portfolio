import React from "react";

interface DiagramQuestionProps {
  question: string;
  children: React.ReactNode;
}


const DiagramQuestion = ({ question, children }: DiagramQuestionProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-10 md:gap-y-20">
      <p className="copy-body text-left self-start padding">{question}</p>
      <div className="p-8">
        {children}
      </div>
    </div>
  )
}

export default DiagramQuestion;