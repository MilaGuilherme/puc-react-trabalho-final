import React, { useState } from 'react';
import { Description } from './description'

export const Content = (props) => {
    const type = props.type;
    const content = props.content;
    const [collapsed, setCollapsed] = useState("collapsed");

    function setState() {
        collapsed !== "collapsed" ? setCollapsed("collapsed") : setCollapsed("open");
    }

    return (
        <div className="accordion-item" id={`accordion${type}`}>
            <h5 className="accordion-header" id={`heading${type}`}>
                <button className={`accordion-button ${collapsed}`} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${type}`} aria-expanded="false" aria-controls={`collapse${type}`} onClick={() => setState()}>
                    {content.name}
                </button>
            </h5>
            <div className={`accordion-collapse ${collapsed.split("d")[0]}`} id={`collapse${type}`} aria-labelledby={`#heading${type}`} data-bs-parent={`#accordion${type}`}>
                < Description url={collapsed === "" ? content.url : null}/>
            </div>
        </div>
    );
}