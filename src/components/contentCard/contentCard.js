import React from 'react';
import { Content } from './content'

export const ContentCard = (props) => {
   const content = props.content;
   return (
      <div className="accordion" id={props.type}>
         {content.map((n) => {
            return (
               <Content content={n} key={n.index} type={props.type} />
            );
         })}
      </div>
   );
};