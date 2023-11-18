import React from "react";
// food categories component
const  Categories = ({filterItems, categoryList}) => {
    return(
        <section>
            <div className="btn-container">
                
                {categoryList.map((category, index) => {
                    return(<button className="filter-btn" key={index} onClick={() => filterItems(`${category}`)}>{category}</button>)
                })}
            </div>
        </section>
    )
}

export default Categories;