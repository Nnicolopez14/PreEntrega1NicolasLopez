import "./itemlistcontainer.scss"
const ItemListContainer = ({ saludo }) => {
    return (
        <div className="main-app">
            <h1>{saludo}</h1>
        </div>
    )
}

export default ItemListContainer