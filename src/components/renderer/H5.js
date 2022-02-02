const H5 = ({ className, style, id, children }) => {
    return (
        <h5 id={id} className={className} style={style}>
            {children}
        </h5>
    );
};
export default H5;