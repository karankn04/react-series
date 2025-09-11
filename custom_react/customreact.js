function customRender(rectElement, container){
    /*
    const domElement = document.createElement(rectElement.type)
    domElement.innerHTML = rectElement.children
    domElement.setAttribute('href', rectElement.props.href)
    domElement.setAttribute('target', rectElement.props.target)
    container.appendChild(domElement)
    */
   const domElement = document.createElement(rectElement.type)
   domElement.innerHTML= rectElement.children
   for (const prop in rectElement.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, rectElement.props[prop])

   }
   container.appendchild(domElement)
}

const rectElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(rectElement, mainContainer)