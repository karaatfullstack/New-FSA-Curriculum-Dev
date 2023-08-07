const Pizza = (props) => {
    
    const {type, size} = props;
    return (
        <>
        <h1>Here's a pizza!</h1>
        <h2>Type: {type[0]} and also {type[2]} </h2>
        <h2>Size: {size}</h2>
        </>
    )
}
export default Pizza;