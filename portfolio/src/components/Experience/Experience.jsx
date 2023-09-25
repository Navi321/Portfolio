import React from "react";

import skills from "../../data/skills.json"
import { getImageUrl } from "../../utils";

export const Experience = () => {
    return ( 
    <section id="experience">
        <h2>Experience</h2>
        <div>
            <div>{
                skills.map((skills, id) => {
                    return <div key={id}>
                        <div><img src={getImageUrl(skills.imageSrc)} alt={skills.title} /></div>
                    </div>
                })
                }</div>
            <ul></ul>
        </div>
    </section>
    );
};