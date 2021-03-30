import React from 'react'
import imagem from '../../img/drink-com-vodka-lista-de-bebidas-Capa-1068x712.jpg'
import './SobreNos.css'


export default class SobreNos extends Component {
    render() {
        return (
            <div className={style.main}>
                <h1 className={style.titulo}>Sobre Nós</h1>
                <Imagemcontato foto="https://www.familypower-blog.de/wp-content/uploads/bb-plugin/cache/kaizen-nguy-n-jcLcWL8D7AQ-unsplash-landscape.jpg" />
                <p className={style.texto}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget ligula eu lectus lobortis condimentum. Aliquam nonummy auctor massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla at risus. Quisque purus magna, auctor et, sagittis ac, posuere eu, lectus. Nam mattis, felis ut adipiscing.
				</p>
            </div>
        );
    }
}