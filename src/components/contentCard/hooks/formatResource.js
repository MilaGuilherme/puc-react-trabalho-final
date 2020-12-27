import React from 'react';

function formatSpell(resource) {
    
    const format = []
   
    if (resource.level) { 
        format.push(<p key="level" ><strong>Spell level:</strong> {resource.level}</p>) 
    };
    if (resource.range) {
         format.push(<p key="range"><strong>Range:</strong> {resource.range}</p>) 
    };
    if (resource.area_of_effect) { 
        format.push(<p key="area_of_effect"><strong>Area of effect:</strong> {resource.area_of_effect.size}, <strong>Type:</strong> {resource.area_of_effect.type} </p>) 
    };
    if (resource.attack_type) {
        format.push(<p key="attack_type"><strong>Attack type:</strong> {resource.attack_type}</p>) 
    };
    if (resource.casting_time) {
        format.push(<p key="casting_time"><strong>Casting time:</strong> {resource.casting_time}</p>)
    };
    if (resource.classes) {
        var classes = ""
        resource.classes.map((m) => {
            return classes === "" ? classes = `${m.name}` : classes = `${classes}, ${m.name}`
        })
        format.push(<p key="classes"><strong>Classes</strong> : {classes} </p>
        )
    }
    if (resource.subclasses) {
        var subclasses = ""
        resource.subclasses.map((m) => {
            return subclasses === "" ? subclasses = `${m.name}` : subclasses = `${subclasses}, ${m.name}`
        })
        format.push(<p key="subclasses"><strong>Subclasses</strong> : {subclasses} </p>
        )
    }
    if (resource.components) {
        var component = ""
        resource.components.map((m) => {
            return component === "" ? component = `${m}` : component = `${component}, ${m}`
        })
        format.push(<p key="components"><strong>Components:</strong> {component} </p>
        )
    }
    if (resource.material) {
        format.push(<p key="material"><strong>Material:</strong> {resource.material}</p>)
    };
    if (resource.concentration) {
        format.push(<p key="concentration"><strong>Requires concentration?</strong> {resource.concentration}</p>)
    };
    if (resource.dc) {
        format.push(<p key="dc"><strong>DC:</strong> {resource.dc.dc_type.name} , <strong>Success:</strong> {resource.dc.dc_success}</p>)
    };
    if (resource.desc) {
        var desc = ""
        resource.desc.map((m) => {
            return desc === "" ? desc = <>{m}</> : desc = <>{desc}<br/>{m}</>;
        })
        format.push(<p key="desc"><strong>Description:</strong> {desc}</p>)
    }
    if (resource.duration) {
        format.push(<p key="duration"><strong>Duration:</strong> {resource.duration}</p>)
    };
    if (resource.ritual) {
        format.push(<p key="ritual"><strong>Can be cast as Ritual?</strong> {resource.ritual}</p>)
    };
    if (resource.school) {
        format.push(<p key="school"><strong>School:</strong> {resource.school.name}</p>)
    };

    return (
        <>
            {format}
        </>
    )
}


export const FormatResource = (type, resource) => {
    if (resource) {
        switch (type) {
            case 'spells':
                return formatSpell(resource);
                
            default:
                console.log("no resources to format");
                break;
        }
    }
}