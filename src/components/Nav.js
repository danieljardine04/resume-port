import React from 'react';


function Nav(props){

  const {
    categories = [],
    setCurrentCategory,
    currentCategory
  } = props

  return(
    <header>
      <h1>
        <a href="/">
          Daniel Jardine
        </a>
      </h1>
      <nav>
        <ul className="flex-row">
          {categories.map((category) => (
            <li
              className={`mx-1 ${ currentCategory.name === category.name && 'navActive'}`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
                >{category.name}
              </span>
            </li>
          ))}
          
          {/* <li>Resume</li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;