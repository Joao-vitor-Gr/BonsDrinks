import React from 'react'
import './Botao.css'

const Botao = (props) => {
    const type = props.type
    const content = props.content
    return(
        <button type={type} className="botao-submit">{content}</button>
    )
}

export default Botao