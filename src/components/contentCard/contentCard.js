import React from 'react';
import { Content } from './content'

export const ContentCard = (props) => {
   const content = props.content;
   return (
      <div className="card">
         <h4 className="card-header">{props.name}</h4>
         <div className="accordion">
            {content.map((n) => {
               return (
                  <Content content={n} key={n.index}/>
               );
            })}
         </div>
      </div>
   );
};