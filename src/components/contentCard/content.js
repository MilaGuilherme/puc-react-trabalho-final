import React, { useState } from 'react';
import { Description } from './description'

export const Content = (props) => {
    const content = props.content;
    const index = content.index;
    const [collapsed, setCollapsed] = useState("collapsed");
    const [description, setDescription] = useState(<></>);

    function setState() {
        collapsed !== "collapsed" ? setCollapsed("collapsed") : setCollapsed("open");
        let desc = < Description content={props.content} type={props.type} />;
        setDescription(desc);
    }
    
    return (
        <div className="accordion-item" id={`accordion${index}`}>
            <h3 className="accordion-header" id={`heading${index}`}>
                <button className={`accordion-button ${collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${index}`} aria-expanded="false" aria-controls={`collapse${index}`} onClick={() => setState()}>
                    {content.name}
                </button>
            </h3>
            <div className={`accordion-collapse ${collapsed.split("d")[0]}`} id={`collapse${index}`} aria-labelledby={`#heading${index}`} data-bs-parent={`#accordion${index}`}>
              {description}
            </div>
        </div>
    );
}